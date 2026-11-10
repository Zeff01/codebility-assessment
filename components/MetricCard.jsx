// components/MetricCard.jsx
export default function MetricCard({ icon, value, label, accent }) {
  const gradients = {
    electric: "from-electric/10 to-violet/10 border-electric/20",
    teal: "from-teal/10 to-cyan/10 border-teal/20",
    violet: "from-violet/10 to-fuchsia-50 border-violet/20",
    amber: "from-amber-100 to-orange-50 border-amber-200",
  };
  return (
    <div className={`rounded-2xl p-5 bg-gradient-to-br ${gradients[accent]} border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
      <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center shadow-sm mb-3">
        {icon}
      </div>
      <p className="text-3xl sm:text-4xl font-extrabold gradient-text">{value}</p>
      <p className="text-sm text-slate-600 mt-1">{label}</p>
    </div>
  );
}