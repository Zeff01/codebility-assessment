"use client";

import Link from "next/link";

/**
 * Route-level error boundary for the product page (renders client-side;
 * `reset` retries the server component render without a full reload).
 */
export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Well, this is awkward</p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900">
        This product failed to load.
      </h1>
      <p className="mt-2 max-w-md text-sm leading-6 text-stone-500">
        The page hit an unexpected error — not a product you can add to a cart. Retrying usually
        fixes it.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
        >
          Back to catalog
        </Link>
      </div>
      {error.digest ? <p className="mt-8 font-mono text-[11px] text-stone-400">ref: {error.digest}</p> : null}
    </main>
  );
}
