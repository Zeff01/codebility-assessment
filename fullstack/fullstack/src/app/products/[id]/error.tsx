"use client";

type ProductErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductError({ error, reset }: ProductErrorProps) {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start gap-4 px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
        We could not load this product. {error.message}
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      >
        Try again
      </button>
    </main>
  );
}
