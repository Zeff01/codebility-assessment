// components/HeroSection.jsx
import { Sparkles, ArrowRight, PlayCircle, ShieldCheck, Zap } from "lucide-react";
import Button from "./ui/Button";
import DashboardPreview from "./DashboardPreview";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-12 lg:pt-20 pb-20 lg:pb-28"
    >
      {/* Ambient background glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-electric/20 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-[480px] h-[480px] bg-violet/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 w-[420px] h-[420px] bg-cyan/15 rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-8 items-center">
          {/* LEFT: text */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              RESTAURANT MARKETING, REIMAGINED
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Stop Guessing.
              <br />
              Know Exactly What Your{" "}
              <span className="gradient-text">Marketing Earns.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Attach a RestoFlow Drop to any campaign. Track every customer who walks in,
              every dollar they spend, and every marketing channel that works.{" "}
              <span className="font-semibold text-slate-800">Pay only when customers redeem.</span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button href="#contact" size="lg">
                Request Info <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#results" variant="secondary" size="lg">
                <PlayCircle className="w-4 h-4" /> See Live Results
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <Zap className="w-4 h-4 text-teal" />
                <strong className="text-slate-800">500%+</strong> Average ROAS
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-electric" />
                Pay Only on Redemption
              </span>
            </div>
          </div>

          {/* RIGHT: dashboard */}
          <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}