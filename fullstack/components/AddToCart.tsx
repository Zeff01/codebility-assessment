"use client";

import { useState } from "react";

import { formatPrice } from "@/lib/catalog";
import { useCart } from "@/store/cart";

/**
 * Add-to-cart island: quantity stepper (server-clamped to stock by the API)
 * and a submit button. Success opens the drawer; failures surface inline and
 * in the drawer error area. Sold-out products get a dedicated branch so the
 * button never lies.
 */
export function AddToCart({ productId, stock, price }: { productId: string; stock: number; price: number }) {
  const addItem = useCart((s) => s.addItem);
  const adding = useCart((s) => s.adding);

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);

  if (stock === 0) {
    return (
      <div>
        <button
          type="button"
          disabled
          className="w-full cursor-not-allowed rounded-full bg-stone-200 py-3 text-sm font-medium text-stone-500"
        >
          Out of stock
        </button>
        <p className="mt-2.5 text-xs text-stone-500">
          This item sold through its run. Restocks are announced in the mock newsletter that doesn&apos;t
          exist yet.
        </p>
      </div>
    );
  }

  const addToCart = async () => {
    setError(null);

    const ok = await addItem(productId, quantity);

    if (ok) {
      useCart.getState().openCart();
    } else {
      setError("Couldn't add to cart — the request was rejected. Adjust the quantity and try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-stone-300 bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            disabled={quantity <= 1 || adding}
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3.5 py-2 text-stone-500 transition-colors hover:text-stone-900 disabled:opacity-30"
          >
            −
          </button>
          <span className="min-w-9 text-center text-sm font-medium tabular-nums">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            disabled={quantity >= stock || adding}
            title={quantity >= stock ? `Only ${stock} in stock` : undefined}
            onClick={() => setQuantity((q) => Math.min(stock, q + 1))}
            className="px-3.5 py-2 text-stone-500 transition-colors hover:text-stone-900 disabled:opacity-30"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={() => void addToCart()}
          disabled={adding}
          className="min-w-52 flex-1 rounded-full bg-stone-900 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700 disabled:opacity-60"
        >
          {adding
            ? "Adding…"
            : quantity > 1
              ? `Add ${quantity} to cart — ${formatPrice(price * quantity)}`
              : `Add to cart — ${formatPrice(price)}`}
        </button>
      </div>

      {error ? (
        <p role="alert" className="mt-3 text-xs leading-5 text-red-600">
          {error}
        </p>
      ) : (
        <p className="mt-3 text-xs text-stone-500">
          {stock} in stock and ready to ship. Cart contents are saved for 30 days.
        </p>
      )}
    </div>
  );
}
