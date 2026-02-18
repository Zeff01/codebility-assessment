export default function ProductLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 h-4 w-48 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="aspect-square animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex flex-col justify-center space-y-4">
          <div className="h-4 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-10 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-5 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-10 w-40 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="space-y-2">
            <div className="h-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="h-12 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
