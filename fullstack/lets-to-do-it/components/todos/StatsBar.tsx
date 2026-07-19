interface StatsBarProps {
  total: number;
  completed: number;
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-200 hover:border-white/15 hover:bg-white/[0.05]">
      <p className="text-sm text-slate-400">{label}</p>
      <p
        className={`mt-2 font-mono text-3xl font-semibold tabular-nums ${accent ?? "text-white"}`}
      >
        {value}
      </p>
    </div>
  );
}

export default function StatsBar({ total, completed }: StatsBarProps) {
  const remaining = total - completed;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section aria-label="Task statistics" className="grid gap-4">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Total tasks" value={total} />
        <StatCard label="Completed" value={completed} accent="text-emerald-400" />
        <StatCard label="Remaining" value={remaining} accent="text-blue-400" />

        <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:col-span-1">
          <p className="text-sm text-slate-400">Completion</p>
          <p className="mt-2 font-mono text-3xl font-semibold tabular-nums text-white">
            {pct}%
          </p>
        </div>
      </div>

      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${pct}% of tasks completed`}
        className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 shadow-[0_0_12px_0_rgba(59,130,246,0.7)] transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </section>
  );
}
