export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.015] px-6 py-16 text-center">
      <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-blue-500/15 to-transparent">
        <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl" />
        <svg
          aria-hidden="true"
          className="relative h-8 w-8 text-blue-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
      <h3 className="text-base font-semibold text-slate-100">
        Nothing on your plate
      </h3>
      <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-slate-500">
        Add your first task above and watch this space fill up. Future you
        will be grateful.
      </p>
    </div>
  );
}
