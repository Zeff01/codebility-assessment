// components/CampaignCard.jsx
import { ArrowUpRight } from "lucide-react";

export default function CampaignCard({ title, subtitle, stats, accent = "electric" }) {
  const accents = {
    electric: "from-electric/5 to-transparent border-electric/20",
    violet: "from-violet/5 to-transparent border-violet/20",
    teal: "from-teal/5 to-transparent border-teal/20",
  };
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${accents[accent]} border p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-base sm:text-lg">{title}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center shadow-sm group-hover:bg-white transition-colors">
          <ArrowUpRight className="w-4 h-4 text-slate-600" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/70 rounded-lg p-2.5 border border-white/60">
            <p className="text-[10px] text-slate-500">{s.label}</p>
            <p className="text-sm font-bold text-slate-900 mt-0.5">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}