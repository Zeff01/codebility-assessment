"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/context/toast-context";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem, items } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const inCart = items.find((i) => i.product.id === product.id)?.quantity ?? 0;
  const remaining = product.stock - inCart;

  const handleAdd = async () => {
    if (remaining <= 0) return;

    const qty = Math.min(quantity, remaining);

    // Validate via API before adding to cart
    const res = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id, quantity: qty }),
    });

    if (res.ok) {
      addItem(product, qty);
      setAdded(true);
      showToast(`${product.name} added to cart`);
      setQuantity(1);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const maxSelectable = Math.max(0, remaining);
  const isDisabled = product.stock === 0 || remaining <= 0;

  return (
    <div className="flex flex-col gap-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Quantity
        </span>
        <div className="flex items-center rounded-lg border border-zinc-300 dark:border-zinc-600">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={isDisabled}
            className="px-3 py-2 text-sm transition-colors hover:bg-zinc-100 disabled:opacity-50 dark:hover:bg-zinc-800"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-10 text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.min(maxSelectable, q + 1))}
            disabled={isDisabled}
            className="px-3 py-2 text-sm transition-colors hover:bg-zinc-100 disabled:opacity-50 dark:hover:bg-zinc-800"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <span className="text-xs text-zinc-500">
          {remaining > 0
            ? `${remaining} left${inCart > 0 ? ` (${inCart} in cart)` : ""}`
            : "All in cart"}
        </span>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAdd}
        disabled={isDisabled}
        className={`w-full rounded-lg py-3 text-sm font-medium transition-all ${
          added
            ? "bg-green-600 text-white"
            : isDisabled
              ? "cursor-not-allowed bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
              : "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        }`}
      >
        {added
          ? "Added to Cart!"
          : remaining <= 0
            ? "All Stock in Cart"
            : product.stock === 0
              ? "Out of Stock"
              : "Add to Cart"}
      </button>
    </div>
  );
}
