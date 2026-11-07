import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start gap-4 px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-semibold">Product not found</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        That product does not exist or may have been removed.
      </p>
      <Link
        href="/"
        className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
      >
        Return to catalog
      </Link>
    </main>
  );
}
