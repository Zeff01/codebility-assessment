function Shimmer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-white/[0.06] ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
        >
          <Shimmer className="h-3.5 w-20" />
          <Shimmer className="mt-3 h-8 w-12" />
        </div>
      ))}
    </div>
  );
}

export function TodoCardSkeleton() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <Shimmer className="mt-0.5 h-5 w-5 rounded-full" />
      <div className="flex-1">
        <Shimmer className="h-4 w-3/5" />
        <div className="mt-3 flex gap-2">
          <Shimmer className="h-3 w-16" />
          <Shimmer className="h-5 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function TodoListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-3" aria-label="Loading tasks">
      {Array.from({ length: count }).map((_, i) => (
        <TodoCardSkeleton key={i} />
      ))}
    </div>
  );
}

/**
 * Add this keyframe to tailwind.config.ts (theme.extend.keyframes):
 *
 * shimmer: {
 *   "100%": { transform: "translateX(100%)" },
 * },
 */
