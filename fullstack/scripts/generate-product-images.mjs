/**
 * Authoring-time script: renders each product's scene as SVG, rasterizes it to
 * a 1200×1200 JPG with sharp, and writes it to public/products/<id>.jpg.
 *
 * Why author assets in-repo: the reviewer environment stays deterministic
 * (no remote image hosts, no network flake), and the repo stays reproducible —
 * `node scripts/generate-product-images.mjs` regenerates every asset.
 *
 * Run once whenever catalog art changes (not at runtime).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.join(process.cwd(), "public", "products");

const PALETTES = {
  "aurora-one": { bg: ["#eef1f6", "#d9e0ec"], body: "#23262b", accent: "#c98a4b", pad: "#3a3f47" },
  "drift-buds": { bg: ["#f4efe9", "#e7ddcf"], body: "#f7f7f5", accent: "#8a8f98", pad: "#c8c2b6" },
  "pulse-mini": { bg: ["#eaf4f2", "#d5e7e3"], body: "#2f6d66", accent: "#d8e6e2", pad: "#1f4b46" },
  "field-monitor": { bg: ["#f3efe8", "#e4dcd0"], body: "#6b4a32", accent: "#2b2b2b", pad: "#40332a" },
  "trail-cable": { bg: ["#f1f0f4", "#e1dfe9"], body: "#4a4e57", accent: "#c98a4b", pad: "#33363c" },
  "carry-case": { bg: ["#eef0f4", "#dde2ea"], body: "#3c4250", accent: "#98a0af", pad: "#2c303a" },
  "stage-arm": { bg: ["#f5f2ee", "#e7e1d8"], body: "#aab1bd", accent: "#545b66", pad: "#8a919c" },
  "loop-stand": { bg: ["#f3f0ea", "#e5e0d5"], body: "#b7bbb8", accent: "#787d76", pad: "#93988f" },
};

const defs = (bg) => `
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/>
  </linearGradient>`;

const shadow = (cy, rx, opacity = 0.1) =>
  `<ellipse cx="600" cy="${cy}" rx="${rx}" ry="40" fill="#101214" opacity="${opacity}"/>`;

const headphones = (p) => `
  <path d="M 372 660 C 372 356 828 356 828 660" fill="none" stroke="${p.accent}" stroke-width="42" stroke-linecap="round"/>
  <rect x="330" y="612" width="96" height="196" rx="48" fill="${p.body}"/>
  <rect x="774" y="612" width="96" height="196" rx="48" fill="${p.body}"/>
  <rect x="348" y="646" width="60" height="128" rx="30" fill="${p.pad}"/>
  <rect x="792" y="646" width="60" height="128" rx="30" fill="${p.pad}"/>
  <ellipse cx="378" cy="730" rx="16" ry="34" fill="${p.accent}"/>
  <ellipse cx="822" cy="730" rx="16" ry="34" fill="${p.accent}"/>`;

const earbuds = (p) => `
  <circle cx="458" cy="574" r="86" fill="${p.body}"/>
  <circle cx="742" cy="574" r="86" fill="${p.body}"/>
  <rect x="436" y="620" width="44" height="150" rx="22" transform="rotate(14 458 695)" fill="${p.body}"/>
  <rect x="720" y="620" width="44" height="150" rx="22" transform="rotate(-14 742 695)" fill="${p.body}"/>
  <circle cx="458" cy="560" r="30" fill="${p.accent}" opacity="0.55"/>
  <circle cx="742" cy="560" r="30" fill="${p.accent}" opacity="0.55"/>
  <rect x="470" y="790" width="260" height="120" rx="58" fill="${p.pad}"/>
  <line x1="508" y1="850" x2="692" y2="850" stroke="${p.pad}" stroke-width="8" stroke-linecap="round" opacity="0.7"/>`;

const miniSpeaker = (p) => `
  <rect x="450" y="430" width="300" height="420" rx="64" fill="${p.body}"/>
  ${[0, 1, 2, 3, 4, 5, 6].map((row) => [0, 1, 2].map((col) => `<circle cx="${525 + col * 75}" cy="${520 + row * 52}" r="9" fill="${p.accent}" opacity="0.5"/>`).join("")).join("")}
  <rect x="470" y="740" width="260" height="92" rx="46" fill="${p.pad}"/>
  <circle cx="600" cy="370" r="34" fill="none" stroke="${p.pad}" stroke-width="16"/>`;

const fieldMonitors = (p) => `
  <rect x="330" y="440" width="210" height="380" rx="26" fill="${p.body}"/>
  <rect x="660" y="440" width="210" height="380" rx="26" fill="${p.body}"/>
  <rect x="330" y="440" width="210" height="380" rx="26" fill="${p.pad}" opacity="0.25"/>
  <rect x="660" y="440" width="210" height="380" rx="26" fill="${p.pad}" opacity="0.25"/>
  <circle cx="435" cy="540" r="40" fill="${p.accent}"/>
  <circle cx="435" cy="666" r="66" fill="${p.accent}" opacity="0.85"/>
  <circle cx="765" cy="540" r="40" fill="${p.accent}"/>
  <circle cx="765" cy="666" r="66" fill="${p.accent}" opacity="0.85"/>`;

const coiledCable = (p) => `
  <path d="M 600 780 a 150 150 0 1 1 -0.1 0" fill="none" stroke="${p.body}" stroke-width="34"/>
  <path d="M 600 640 a 60 60 0 1 0 -0.1 0" fill="none" stroke="${p.body}" stroke-width="34"/>
  <path d="M 750 660 C 830 620 830 500 760 440" fill="none" stroke="${p.body}" stroke-width="30" stroke-linecap="round"/>
  <rect x="712" y="388" width="96" height="72" rx="16" fill="${p.accent}"/>
  <rect x="434" y="600" width="56" height="90" rx="12" fill="${p.accent}"/>`;

const carryCase = (p) => `
  <rect x="330" y="470" width="540" height="360" rx="64" fill="${p.body}"/>
  <path d="M 330 560 H 870" stroke="${p.accent}" stroke-width="10"/>
  <path d="M 348 560 H 852" stroke="${p.accent}" stroke-width="16" stroke-dasharray="4 22" stroke-linecap="round"/>
  <path d="M 500 470 C 500 392 700 392 700 470" fill="none" stroke="${p.accent}" stroke-width="22" stroke-linecap="round"/>
  <rect x="392" y="600" width="180" height="140" rx="26" fill="${p.pad}" opacity="0.55"/>`;

const monitorArm = (p) => `
  <rect x="380" y="430" width="150" height="420" rx="30" fill="${p.body}"/>
  <rect x="380" y="430" width="420" height="120" rx="30" fill="${p.body}"/>
  <circle cx="530" cy="560" r="52" fill="${p.accent}"/>
  <rect x="760" y="470" width="60" height="130" rx="18" fill="${p.pad}"/>
  <rect x="340" y="866" width="240" height="56" rx="18" fill="${p.accent}"/>
  <rect x="346" y="820" width="60" height="52" rx="10" fill="${p.pad}"/>`;

const loopStand = (p) => `
  <path d="M 440 800 C 440 430 760 430 760 800 L 686 800 C 686 540 514 540 514 800 Z" fill="${p.body}"/>
  <rect x="400" y="800" width="400" height="34" rx="17" fill="${p.pad}"/>
  <ellipse cx="600" cy="588" rx="0" ry="0" fill="none"/>
  <rect x="560" y="770" width="80" height="24" rx="12" fill="${p.accent}"/>
  <rect x="560" y="770" width="80" height="24" rx="12" fill="${p.accent}"/>`;

const SCENES = {
  "aurora-one": { head: shadow(880, 320), body: headphones },
  "drift-buds": { head: shadow(950, 300, 0.08), body: earbuds },
  "pulse-mini": { head: shadow(890, 240), body: miniSpeaker },
  "field-monitor": { head: shadow(860, 330), body: fieldMonitors },
  "trail-cable": { head: shadow(940, 280, 0.08), body: coiledCable },
  "carry-case": { head: shadow(870, 340), body: carryCase },
  "stage-arm": { head: shadow(950, 300, 0.08), body: monitorArm },
  "loop-stand": { head: shadow(870, 240), body: loopStand },
};

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(path.join(process.cwd(), "scripts", "art"), { recursive: true });

for (const [id, scene] of Object.entries(SCENES)) {
  const p = PALETTES[id];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
  <defs>${defs(p.bg)}</defs>
  <rect width="1200" height="1200" fill="url(#bg)"/>
  ${scene.head}
  ${scene.body(p)}
</svg>`;

  writeFileSync(path.join(process.cwd(), "scripts", "art", `${id}.svg`), svg);
  await sharp(Buffer.from(svg)).jpeg({ quality: 82, chromaSubsampling: "4:4:4" }).toFile(path.join(OUT_DIR, `${id}.jpg`));
}

console.log("generated", Object.keys(SCENES).length, "product images");
