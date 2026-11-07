"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { formatPrice } from "@/lib/catalog";
import { useCart } from "@/store/cart";

/**
 * Cart slide-over. Opens on `AddToCart` success or from the header badge.
 * All mutations round-trip through the cart API; busy flags per line keep
 * double-clicks honest without optimistic inventory math.
 */
export function CartDrawer() {
  const open = useCart((s) => s.open);
  const items = useCart((s) => s.items);
  const itemCount = useCart((s) => s.itemCount);
  const subtotal = useCart((s) => s.subtotal);
  const currency = useCart((s) => s.currency);
  const busy = useCart((s) => s.busy);
  const error = useCart((s) => s.error);
  const closeCart = useCart((s) => s.closeCart);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);

  // Esc to close + scroll lock while the drawer is up.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, closeCart]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 cursor-default bg-stone-950/40 backdrop-blur-[2px]"
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl ring-1 ring-stone-200">
        <header className="flex items-center justify-between border-b border-stone-200/80 px-5 py-4">
          <h2 className="text-sm font-semibold tracking-wide text-stone-900">
            Your cart {itemCount > 0 ? <span className="text-stone-400">({itemCount})</span> : null}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full p-1.5 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        {error ? (
          <p role="alert" className="mx-5 mt-4 rounded-lg bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">
            {error}
          </p>
        ) : null}

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <svg width="42" height="42" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-stone-300">
              <path
                d="M1.5 2h2l1.6 8.2a1 1 0 0 0 1 .8h6.6a1 1 0 0 0 1-.8L14.5 5H4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm font-medium text-stone-900">Your cart is empty</p>
            <p className="text-xs leading-5 text-stone-500">
              Nothing here yet. Browse the catalog and grab something loud.
            </p>
            <Link
              href="/"
              onClick={closeCart}
              className="mt-2 rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-stone-700"
            >
              Back to catalog
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-stone-100 overflow-y-auto px-5">
              {items.map((line) => {
                const lineBusy = busy[line.productId] ?? false;
                const maxQty = Math.min(line.inStock, 99);

                return (
                  <li key={line.productId} className="flex gap-3 py-4">
                    <Link
                      href={`/products/${line.productId}`}
                      onClick={closeCart}
                      className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-stone-100 ring-1 ring-stone-200/80"
                    >
                      <Image
                        src={`/products/${line.productId}.jpg`}
                        alt=""
                        width={112}
                        height={112}
                        className="object-cover"
                      />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="truncate text-sm font-medium text-stone-900">{line.productName}</p>
                        <span className="text-sm font-medium tabular-nums text-stone-900">
                          {formatPrice(line.lineTotal, currency)}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500">{formatPrice(line.unitPrice, currency)} each</p>

                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center rounded-full border border-stone-200">
                          <button
                            type="button"
                            aria-label={`Decrease quantity of ${line.productName}`}
                            disabled={lineBusy}
                            onClick={() => void updateQuantity(line.productId, line.quantity - 1)}
                            className="px-2.5 py-1 text-stone-500 transition-colors hover:text-stone-900 disabled:opacity-30"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-xs font-medium tabular-nums" aria-live="polite">
                            {lineBusy ? "…" : line.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label={`Increase quantity of ${line.productName}`}
                            disabled={lineBusy || line.quantity >= maxQty}
                            title={line.quantity >= maxQty ? `Only ${maxQty} in stock` : undefined}
                            onClick={() => void updateQuantity(line.productId, line.quantity + 1)}
                            className="px-2.5 py-1 text-stone-500 transition-colors hover:text-stone-900 disabled:opacity-30"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          disabled={lineBusy}
                          onClick={() => void removeItem(line.productId)}
                          className="text-xs text-stone-400 underline-offset-2 transition-colors hover:text-red-600 hover:underline disabled:opacity-30"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <footer className="border-t border-stone-200/80 px-5 py-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-stone-900">Subtotal</span>
                <span className="text-base font-semibold tabular-nums text-stone-900">{formatPrice(subtotal, currency)}</span>
              </div>
              <p className="mt-1 text-xs text-stone-500">
                Shipping calculated at checkout. Free over $75.
              </p>
              <button
                type="button"
                onClick={closeCart}
                title="Demo storefront — checkout is intentionally out of scope"
                className="mt-4 w-full rounded-full bg-stone-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-700"
              >
                {`Checkout (${itemCount})`}
              </button>
              <p className="mt-2 text-center text-[11px] text-stone-400">Payments are mocked — nothing is charged.</p>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
