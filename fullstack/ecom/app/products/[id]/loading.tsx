export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="h-80 w-full animate-pulse rounded-3xl bg-muted" />
        <div className="space-y-4">
          <div className="h-8 w-3/4 animate-pulse rounded-lg bg-muted" />
          <div className="h-4 w-1/2 animate-pulse rounded-lg bg-muted" />
          <div className="h-24 w-full animate-pulse rounded-2xl bg-muted" />
          <div className="h-10 w-1/3 animate-pulse rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}
