// components/ui/GlassCard.jsx
export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl shadow-slate-200/40 ${className}`}
    >
      {children}
    </div>
  );
}