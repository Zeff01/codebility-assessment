import { CartView } from "@/components/cart/CartView";
import Link from "next/link";

export default function CartPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="mb-6 inline-flex text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Back to catalog
      </Link>
      <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Review items, adjust quantities, or remove products before checkout.
      </p>
      <div className="mt-8">
        <CartView />
      </div>
    </main>
  );
}
