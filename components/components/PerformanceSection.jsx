// components/PerformanceSection.jsx
"use client";
import { useEffect, useRef } from "react";
import { TrendingUp, DollarSign, Users, Gift, Percent, Target, Ticket } from "lucide-react";
import MetricCard from "./MetricCard";
import CampaignCard from "./CampaignCard";

export default function PerformanceSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll(".reveal").forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  const metrics = [
    { icon: <TrendingUp className="w-5 h-5 text-electric" />, value: "500%+", label: "Average ROAS", accent: "electric" },
    { icon: <DollarSign className="w-5 h-5 text-teal" />, value: "$60+", label: "Average Bill on Redemption", accent: "teal" },
    { icon: <Percent className="w-5 h-5 text-violet" />, value: "22%+", label: "Average Redemption Rate", accent: "violet" },
    { icon: <Gift className="w-5 h-5 text-amber-600" />, value: "$0", label: "Fees Until Redemption", accent: "amber" },
  ];

  const campaigns = [
    {
      title: "A-Frame QR Campaign",
      subtitle: "In-store QR discovery",
      accent: "electric",
      stats: [
        { label: "Generated Revenue", value: "$197,966" },
        { label: "ROAS", value: "605%" },
        { label: "Customers In", value: "3,271" },
        { label: "Gift Cards Claimed", value: "7,414" },
      ],
    },
    {
      title: "Takeout Box Sticker",
      subtitle: "Packaging-led acquisition",
      accent: "violet",
      stats: [
        { label: "Generated Revenue", value: "$30,645" },
        { label: "Redemption Rate", value: "27.5%" },
        { label: "Claimed", value: "1,751" },
        { label: "Boxes Distributed", value: "6,828" },
      ],
    },
    {
      title: "SMS Retargeting Drive",
      subtitle: "Lapsed customer win-back",
      accent: "teal",
      stats: [
        { label: "Incremental Revenue", value: "$169,458" },
        { label: "YoY Lift", value: "+22.9%" },
        { label: "Customers Back", value: "2,255" },
        { label: "Direct Revenue", value: "$138K" },
      ],
    },
  ];

  return (
    <section id="results" ref={ref} className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block px-3 py-1.5 rounded-full bg-violet/10 border border-violet/20 text-violet text-xs font-semibold tracking-wider">
            REAL CAMPAIGNS. REAL NUMBERS.
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Ads That Pay for Themselves —{" "}
            <span className="gradient-text">Measurably.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Every RestoFlow Drop is tracked end-to-end. We connect campaigns, redeemed gift cards,
            and in-store spending so you can see exactly what worked.
          </p>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 reveal">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Campaign showcase */}
        <div className="grid md:grid-cols-3 gap-5 mt-12 reveal">
          {campaigns.map((c) => (
            <CampaignCard key={c.title} {...c} />
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-10 reveal">
          Illustrative demonstration data. Not verified business results.
        </p>
      </div>
    </section>
  );
}