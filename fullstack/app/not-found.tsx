import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
        That page left the warehouse.
      </h1>
      <p className="mt-2 max-w-md text-sm leading-6 text-stone-500">
        The link is dead, or the product was never in the catalog to begin with.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
      >
        Browse the catalog
      </Link>
    </main>
  );
}
