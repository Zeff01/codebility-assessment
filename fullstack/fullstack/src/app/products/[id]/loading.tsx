export default function ProductLoading() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 animate-pulse px-4 py-10 sm:px-6">
      <div className="mb-6 h-5 w-32 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="aspect-square rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-4">
          <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-10 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-6 w-28 rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-24 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-12 w-40 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </main>
  );
}
