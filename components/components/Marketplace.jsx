// components/Marketplace.jsx
"use client";
import { useEffect, useRef } from "react";
import { Store, ArrowRight, Star } from "lucide-react";
import Button from "./ui/Button";

const partners = [
  {
    name: "QR A-Frame Kit",
    category: "In-store",
    desc: "Weatherproof QR stands with branded campaign tracking built in.",
    stat: "605% avg ROAS",
    accent: "from-electric/10 to-violet/10 border-electric/20",
  },
  {
    name: "Smart Packaging Stickers",
    category: "Takeout",
    desc: "Custom stickers that turn every takeout order into a tracked visit.",
    stat: "27.5% redemption",
    accent: "from-violet/10 to-fuchsia-50 border-violet/20",
  },
  {
    name: "SMS Retargeting Suite",
    category: "Digital",
    desc: "Win back lapsed guests with automated, revenue-tracked SMS drops.",
    stat: "+22.9% YoY lift",
    accent: "from-teal/10 to-cyan/10 border-teal/20",
  },
  {
    name: "Window Decal Set",
    category: "In-store",
    desc: "High-contrast window decals that drive scan-through and walk-ins.",
    stat: "4.8 ★ partner rating",
    accent: "from-amber-100 to-orange-50 border-amber-200",
  },
];

export default function Marketplace() {
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
    <section id="marketplace" ref={ref} className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden scroll-mt-24">
      <div aria-hidden className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1.5 rounded-full bg-violet/10 border border-violet/20 text-violet text-xs font-semibold tracking-wider">
              MARKETER MARKETPLACE
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ready-Made Campaigns,{" "}
              <span className="gradient-text">Verified by Real Restaurants.</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Browse proven campaign kits and physical marketing assets. Launch a
              trackable Drop in minutes — no design team required.
            </p>
          </div>
          <Button href="#contact" variant="secondary">
            Browse all kits <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 reveal">
          {partners.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-5 bg-gradient-to-br ${p.accent} border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/70 px-2 py-1 rounded">
                  {p.category}
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center shadow-sm">
                  <Store className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{p.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              <div className="flex items-center gap-1 mt-3 text-xs font-bold text-slate-800">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                {p.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}