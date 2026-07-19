/**
 * AuroraBackground
 * ------------------
 * Ambient, decorative backdrop: a near-black base, a faint grid, and three
 * softly breathing blue/indigo glow orbs. Pure Tailwind (arbitrary values +
 * keyframes defined in tailwind.config, see bottom of file for the config
 * snippet you need to add).
 *
 * Usage: render once, absolutely positioned, behind your page content:
 *   <div className="relative min-h-screen overflow-hidden bg-[#05070D]">
 *     <AuroraBackground />
 *     <div className="relative z-10">...page content...</div>
 *   </div>
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* base grid, very faint */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* glow orbs */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px] animate-[aurora-drift_16s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[110px] animate-[aurora-drift_20s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[130px] animate-[aurora-drift_24s_ease-in-out_infinite]" />

      {/* subtle vignette so edges stay dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05070D_85%)]" />
    </div>
  );
}

/**
 * Add this to tailwind.config.ts (theme.extend) so the `animate-[aurora-drift_*]`
 * utilities above resolve:
 *
 * keyframes: {
 *   "aurora-drift": {
 *     "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
 *     "50%": { transform: "translate(30px, -20px) scale(1.08)" },
 *   },
 * },
 */
