"use client";

import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/format";
import { useCartState } from "../hooks/use-cart";

export function CartButton() {
  const { cart, isLoaded } = useCartState();

  return (
    <Link
      href="/cart"
      className="group flex items-center gap-2.5 rounded-full bg-surface py-1.5 pl-1.5 pr-4 text-sm ring-1 ring-border transition hover:shadow-md hover:shadow-indigo-500/10 hover:ring-indigo-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-linear-to-br from-indigo-600 to-violet-600 text-white">
        <CartIcon />
      </span>
      <span className="sr-only">Cart:</span>
      {isLoaded ? (
        <>
          <span className="font-semibold tabular-nums">
            {cart.itemCount}
            <span className="sr-only">{cart.itemCount === 1 ? " item" : " items"}</span>
          </span>
          <span className="hidden text-muted tabular-nums sm:inline">{formatCurrency(cart.subtotal)}</span>
        </>
      ) : (
        <Skeleton className="h-4 w-12" />
      )}
    </Link>
  );
}

function CartIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7h12l-1 12H7L6 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}
