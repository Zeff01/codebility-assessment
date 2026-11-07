"use client";

import { useCart } from "@/components/cart/CartProvider";
import { formatMoney } from "@/lib/format";
import Link from "next/link";

export function SiteHeader() {
  const { cart, isHydrated } = useCart();
  const currency = cart.items[0]?.currency ?? "USD";

  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Codebility Shop
        </Link>
        <Link
          href="/cart"
          className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm transition hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          aria-live="polite"
        >
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            {isHydrated ? cart.itemCount : 0} items
          </span>
          <span className="mx-2 text-zinc-400">·</span>
          <span className="text-zinc-600 dark:text-zinc-300">
            {formatMoney(isHydrated ? cart.subtotal : 0, currency)}
          </span>
          <span className="sr-only">View cart</span>
        </Link>
      </div>
    </header>
  );
}
