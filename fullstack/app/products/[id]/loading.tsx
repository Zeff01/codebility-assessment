export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6" aria-busy="true" aria-label="Loading product">
      <div className="h-4 w-36 animate-pulse rounded bg-stone-200 py-6" />
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="aspect-square animate-pulse rounded-3xl bg-stone-200/80" />
        <div className="space-y-4 pt-2">
          <div className="h-3 w-16 animate-pulse rounded bg-stone-200" />
          <div className="h-8 w-56 animate-pulse rounded bg-stone-200" />
          <div className="h-3 w-40 animate-pulse rounded bg-stone-200" />
          <div className="h-3 w-24 animate-pulse rounded bg-stone-200" />
          <div className="mt-8 h-6 w-28 animate-pulse rounded bg-stone-200" />
          <div className="mt-4 space-y-2">
            <div className="h-3 w-64 animate-pulse rounded bg-stone-200" />
            <div className="h-3 w-52 animate-pulse rounded bg-stone-200" />
          </div>
          <div className="mt-8 h-11 w-64 animate-pulse rounded-full bg-stone-200" />
        </div>
      </div>
    </main>
  );
}
