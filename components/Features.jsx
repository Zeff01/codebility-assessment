// components/Features.jsx
"use client";
import { useEffect, useRef } from "react";
import {
  BarChart3, Ticket, Users, Zap, ShieldCheck, Globe,
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-5 h-5 text-electric" />,
    title: "End-to-End Attribution",
    desc: "Every campaign is tied to real redemptions and register spend. Know which channel earned the dollar, not just the click.",
  },
  {
    icon: <Ticket className="w-5 h-5 text-violet" />,
    title: "Trackable Gift Cards",
    desc: "Each Drop issues a unique digital gift card. You see who claimed it, who redeemed it, and what they spent on top.",
  },
  {
    icon: <Users className="w-5 h-5 text-teal" />,
    title: "Customer Intelligence",
    desc: "Build a real customer list from anonymous walk-ins. See repeat visits, average bill, and lifetime value per campaign.",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    title: "Live Campaign Dashboard",
    desc: "Watch redemptions, revenue, and ROAS update in real time. Pause or scale a campaign while it's still running.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
    title: "Zero Upfront Cost",
    desc: "No setup fees, no monthly minimums, no contracts. You pay only when a customer redeems — aligned incentives, by design.",
  },
  {
    icon: <Globe className="w-5 h-5 text-cyan" />,
    title: "Works Across Channels",
    desc: "QR codes, packaging stickers, SMS, email, social. One platform to track every acquisition channel in one place.",
  },
];

export default function Features() {
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
    <section id="features" ref={ref} className="relative py-20 lg:py-28 bg-white overflow-hidden scroll-mt-24">
      <div aria-hidden className="absolute top-1/4 -right-20 w-[420px] h-[420px] bg-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold tracking-wider">
            BUILT FOR RESTAURANTS
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Everything You Need to Prove{" "}
            <span className="gradient-text">Marketing Works.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Purpose-built for restaurant operators who are tired of guessing which
            campaigns actually bring customers back.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 reveal">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl p-6 bg-white border border-slate-200 hover:border-electric/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-electric/5 flex items-center justify-center mb-4 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}