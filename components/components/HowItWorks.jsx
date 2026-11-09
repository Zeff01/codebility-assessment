// components/HowItWorks.jsx
"use client";
import { useEffect, useRef } from "react";
import { QrCode, ScanLine, TrendingUp, Wallet } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <QrCode className="w-6 h-6 text-electric" />,
    title: "Launch a Drop",
    desc: "Attach a RestoFlow Drop — a QR code, sticker, or SMS link — to any campaign. No app downloads, no loyalty signups required from your guests.",
    accent: "from-electric/10 to-violet/10 border-electric/20",
  },
  {
    step: "02",
    icon: <ScanLine className="w-6 h-6 text-violet" />,
    title: "Guests Redeem",
    desc: "Customers scan in-store or tap your link, claim a gift card, and walk in. Every redemption is tied to the exact campaign that drove it.",
    accent: "from-violet/10 to-fuchsia-50 border-violet/20",
  },
  {
    step: "03",
    icon: <TrendingUp className="w-6 h-6 text-teal" />,
    title: "Track Real Revenue",
    desc: "We match redemptions to actual in-store spend, so you see revenue, ROAS, and customer counts per channel — not estimates.",
    accent: "from-teal/10 to-cyan/10 border-teal/20",
  },
  {
    step: "04",
    icon: <Wallet className="w-6 h-6 text-amber-600" />,
    title: "Pay on Redemption",
    desc: "No upfront fees. No monthly minimums. You only pay when a guest actually redeems — our incentives stay aligned with yours.",
    accent: "from-amber-100 to-orange-50 border-amber-200",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" ref={ref} className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden scroll-mt-24">
      <div aria-hidden className="absolute -top-20 left-0 w-[400px] h-[400px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3 py-1.5 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-semibold tracking-wider">
            HOW IT WORKS
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            From Campaign to{" "}
            <span className="gradient-text">Register in 4 Steps.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            RestoFlow closes the loop between marketing spend and in-store revenue.
            Here's exactly how a Drop goes from launch to measurable ROI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 reveal">
          {steps.map((s) => (
            <div
              key={s.step}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${s.accent} border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <span className="absolute top-4 right-4 text-3xl font-extrabold text-slate-900/10">
                {s.step}
              </span>
              <div className="w-11 h-11 rounded-xl bg-white/80 flex items-center justify-center shadow-sm mb-4">
                {s.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}