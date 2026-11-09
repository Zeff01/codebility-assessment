// components/DashboardPreview.jsx
"use client";
import { useState, useEffect } from "react";
import { TrendingUp, DollarSign, Users, Ticket, ArrowUpRight, ChevronDown } from "lucide-react";
import GlassCard from "./ui/GlassCard";

export default function DashboardPreview() {
  // Animated counters
  const [revenue, setRevenue] = useState(0);
  const [roas, setRoas] = useState(0);

  useEffect(() => {
    const targets = { revenue: 8420, roas: 597 };
    const duration = 1400;
    const start = performance.now();

    const animate = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setRevenue(Math.round(targets.revenue * ease));
      setRoas(Math.round(targets.roas * ease));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative">
      {/* Floating notification pills */}
      <div className="absolute -top-4 -left-2 sm:-left-6 z-20 animate-float">
        <NotificationPill
          icon={<Ticket className="w-4 h-4 text-teal" />}
          title="New Redemption"
          value="+$62 ticket"
          accent="teal"
        />
      </div>
      <div className="absolute top-1/3 -right-2 sm:-right-8 z-20 animate-float-delayed">
        <NotificationPill
          icon={<TrendingUp className="w-4 h-4 text-violet" />}
          title="Revenue Up"
          value="+24% today"
          accent="violet"
        />
      </div>
      <div className="absolute -bottom-6 left-8 z-20 animate-float">
        <NotificationPill
          icon={<ArrowUpRight className="w-4 h-4 text-electric" />}
          title="ROI Improved"
          value="597% ROAS"
          accent="electric"
        />
      </div>

      {/* Main dashboard card */}
      <GlassCard className="relative z-10 p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/70">
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">RestoFlow Analytics</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live Performance
            </p>
          </div>
          <button className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white/70 border border-slate-200 rounded-lg px-2.5 py-1.5 hover:bg-white transition-colors">
            Last 7 days <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <StatCard
            label="Today's Revenue"
            value={`$${revenue.toLocaleString()}`}
            delta="+24%"
            icon={<DollarSign className="w-4 h-4 text-teal" />}
            accent="from-teal/10 to-emerald-50"
          />
          <StatCard
            label="ROAS"
            value={`${roas}%`}
            delta="+18%"
            icon={<TrendingUp className="w-4 h-4 text-electric" />}
            accent="from-electric/10 to-violet/10"
          />
        </div>

        {/* Chart area */}
        <ChartArea />

        {/* Footer KPIs */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-200/70">
          <FooterKpi icon={<Users className="w-3.5 h-3.5" />} label="Customers In" value="3,271" />
          <FooterKpi icon={<Ticket className="w-3.5 h-3.5" />} label="Redeemed" value="7,414" />
          <FooterKpi icon={<TrendingUp className="w-3.5 h-3.5" />} label="Campaigns" value="12" />
        </div>
      </GlassCard>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function StatCard({ label, value, delta, icon, accent }) {
  return (
    <div className={`rounded-xl p-3 bg-gradient-to-br ${accent} border border-white/60`}>
      <div className="flex items-center justify-between">
        <div className="w-7 h-7 rounded-lg bg-white/80 flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
          {delta}
        </span>
      </div>
      <p className="text-[11px] text-slate-500 mt-2">{label}</p>
      <p className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">{value}</p>
    </div>
  );
}

function NotificationPill({ icon, title, value, accent }) {
  const colors = {
    teal: "border-teal/30",
    violet: "border-violet/30",
    electric: "border-electric/30",
  };
  return (
    <div className={`flex items-center gap-2.5 bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg border ${colors[accent]}`}>
      <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center">{icon}</div>
      <div>
        <p className="text-[10px] text-slate-500 leading-none">{title}</p>
        <p className="text-xs font-bold text-slate-900 mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function FooterKpi({ icon, label, value }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-1 text-slate-400">
        {icon}
        <span className="text-[10px] font-medium">{label}</span>
      </div>
      <p className="text-sm font-bold text-slate-900 mt-0.5">{value}</p>
    </div>
  );
}

function ChartArea() {
  // Illustrative bar chart — pure CSS, no library
  const bars = [42, 58, 47, 72, 63, 88, 95, 78, 90, 84, 100, 92];
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold text-slate-700">Revenue Performance</p>
        <p className="text-[10px] text-slate-400">Last 12 weeks</p>
      </div>
      <div className="flex items-end gap-1.5 h-24 sm:h-28">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-electric to-violet transition-all duration-700"
              style={{ height: `${h}%`, opacity: 0.35 + i * 0.05 }}
            />
          </div>
        ))}
      </div>
      {/* Redemption progress */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-[11px] mb-1.5">
          <span className="text-slate-500">Redemption rate</span>
          <span className="font-bold text-slate-900">22.4%</span>
        </div>
        <div className="h-2 bg-slate-200/70 rounded-full overflow-hidden">
          <div className="h-full w-[72%] bg-gradient-to-r from-teal to-cyan rounded-full" />
        </div>
      </div>
    </div>
  );
}