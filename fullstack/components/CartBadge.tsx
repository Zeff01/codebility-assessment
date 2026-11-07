"use client";

import { useEffect } from "react";

import { useCart } from "@/store/cart";

/**
 * Cart entry point in the header. A client island on purpose: the layout and
 * every page stay statically prerendered, while the badge hydrates from
 * `GET /api/cart` after mount. SSR-rendering the count would force every page
 * to dynamic rendering for a single number — not a trade worth making here.
 */
export function CartBadge() {
  const itemCount = useCart((s) => s.itemCount);
  const hydrated = useCart((s) => s.hydrated);
  const hydrate = useCart((s) => s.hydrate);
  const openCart = useCart((s) => s.openCart);

  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart${hydrated && itemCount > 0 ? `, ${itemCount} item${itemCount === 1 ? "" : "s"}` : ""}`}
      className="relative flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-1.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M1.5 2h2l1.6 8.2a1 1 0 0 0 1 .8h6.6a1 1 0 0 0 1-.8L14.5 5H4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6.3" cy="13.5" r="1.1" fill="currentColor" />
        <circle cx="12.3" cy="13.5" r="1.1" fill="currentColor" />
      </svg>
      <span className="hidden sm:inline">Cart</span>
      {hydrated && itemCount > 0 ? (
        <span
          aria-hidden="true"
          className="absolute -right-1.5 -top-1.5 flex min-w-5 items-center justify-center rounded-full bg-amber-700 px-1 text-[10px] font-semibold leading-5 text-white"
        >
          {itemCount}
        </span>
      ) : null}
    </button>
  );
}
