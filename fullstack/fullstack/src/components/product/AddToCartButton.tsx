"use client";

import { useCart } from "@/components/cart/CartProvider";
import Link from "next/link";
import { useState } from "react";

type AddToCartButtonProps = {
  productId: string;
  stock: number;
  disabled?: boolean;
};

export function AddToCartButton({
  productId,
  stock,
  disabled,
}: AddToCartButtonProps) {
  const { addItem, cart, isHydrated, isPending, error, clearError } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = isHydrated
    ? (cart.items.find((item) => item.productId === productId)?.quantity ?? 0)
    : 0;
  const remaining = Math.max(0, stock - inCart);
  const outOfStock = stock < 1;
  const atCartLimit = isHydrated && remaining < 1;
  const isDisabled = disabled || outOfStock || atCartLimit || isPending;

  let label = "Add to cart";
  if (outOfStock) {
    label = "Out of stock";
  } else if (atCartLimit) {
    label = "Maximum in cart";
  } else if (isPending) {
    label = "Adding…";
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        disabled={isDisabled}
        onClick={async () => {
          clearError();
          setAdded(false);
          const ok = await addItem(productId, 1, stock);
          if (ok) {
            setAdded(true);
          }
        }}
        className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-300 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white dark:disabled:bg-zinc-700 dark:disabled:text-zinc-400"
      >
        {label}
      </button>
      {isHydrated && !outOfStock ? (
        <p className="text-sm text-zinc-500">
          {atCartLimit
            ? `You have all ${stock} available units in your cart.`
            : `${remaining} more can be added (${inCart} in cart).`}
        </p>
      ) : null}
      {added ? (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1" role="status">
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            Added to your cart.
          </p>
          <Link
            href="/cart"
            className="text-sm font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
          >
            View cart
          </Link>
        </div>
      ) : null}
      {error ? (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
