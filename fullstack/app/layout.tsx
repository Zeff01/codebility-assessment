import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Blog",
  description: "Articles on modern web development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className="cursor" id="cursor" suppressHydrationWarning/>
        <div className="cursor-ring" id="cursor-ring" suppressHydrationWarning/>
        <canvas id="particle-canvas" suppressHydrationWarning/>
        <div className="page-wrapper">{children}</div>

        <script dangerouslySetInnerHTML={{ __html: `
(function () {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let ringPos = { x: mouse.x, y: mouse.y };

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  (function animRing() {
    ringPos.x += (mouse.x - ringPos.x) * 0.12;
    ringPos.y += (mouse.y - ringPos.y) * 0.12;
    ring.style.left = ringPos.x + 'px';
    ring.style.top  = ringPos.y + 'px';
    requestAnimationFrame(animRing);
  })();

  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.post-card').forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--mouse-y', (e.clientY - rect.top)  + 'px');
    });
  });

  const COLORS = ['#ef4444','#eab308','#3b82f6','#22d3ee','#f97316'];
  const particles = Array.from({ length: 90 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    ox: 0, oy: 0,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    size: Math.random() * 3 + 1.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: Math.random() * 0.5 + 0.2,
    angle: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.04,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      const dx = mouse.x - p.x, dy = mouse.y - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy), radius = 160;
      if (dist < radius) {
        const force = (radius - dist) / radius;
        p.ox -= (dx/dist)*force*1.6; p.oy -= (dy/dist)*force*1.6;
      }
      p.ox *= 0.92; p.oy *= 0.92;
      p.vx += p.ox*0.04; p.vy += p.oy*0.04;
      p.vx *= 0.98; p.vy *= 0.98;
      p.x += p.vx; p.y += p.vy; p.angle += p.rotSpeed;
      if (p.x < -20) p.x = canvas.width+20;
      if (p.x > canvas.width+20) p.x = -20;
      if (p.y < -20) p.y = canvas.height+20;
      if (p.y > canvas.height+20) p.y = -20;
      ctx.save();
      ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y); ctx.rotate(p.angle);
      ctx.fillRect(-p.size/2, -p.size*1.5, p.size, p.size*3);
      ctx.restore();
    });
    requestAnimationFrame(animate);
  }
  animate();
})();
        `}} />
      </body>
    </html>
  );
}