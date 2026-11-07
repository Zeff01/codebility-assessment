"use client";

import { CartQuantityStepper } from "@/components/cart/CartQuantityStepper";
import { useCart } from "@/components/cart/CartProvider";
import { ResilientProductImage } from "@/components/product/ResilientProductImage";
import { formatMoney } from "@/lib/format";
import Link from "next/link";

export function CartView() {
  const { cart, isHydrated, isPending, error, updateQuantity, removeItem } =
    useCart();
  const currency = cart.items[0]?.currency ?? "USD";

  if (!isHydrated) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-24 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-24 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center dark:border-zinc-700 dark:bg-zinc-950">
        <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Your cart is empty
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Browse products and add items to see them here.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <ul className="w-full flex-1 space-y-4">
        {cart.items.map((item) => (
          <li
            key={item.productId}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center dark:border-zinc-800 dark:bg-zinc-950"
          >
            <Link
              href={`/products/${item.productId}`}
              className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900"
            >
              <ResilientProductImage
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <Link
                href={`/products/${item.productId}`}
                className="font-semibold text-zinc-900 hover:underline dark:text-zinc-50"
              >
                {item.name}
              </Link>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {formatMoney(item.price, item.currency)} each
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Line total:{" "}
                {formatMoney(item.price * item.quantity, item.currency)}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:flex-col sm:items-end">
              <CartQuantityStepper
                productName={item.name}
                quantity={item.quantity}
                maxQuantity={item.stock}
                disabled={isPending}
                onChange={(nextQuantity) => {
                  void updateQuantity(item.productId, nextQuantity);
                }}
              />
              <button
                type="button"
                disabled={isPending}
                onClick={() => void removeItem(item.productId)}
                className="text-sm font-medium text-red-600 hover:text-red-700 disabled:opacity-50 dark:text-red-400"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <aside className="w-full shrink-0 rounded-2xl border border-zinc-200 bg-white p-6 lg:w-80 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Order summary
        </h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
            <dt>Items</dt>
            <dd>{cart.itemCount}</dd>
          </div>
          <div className="flex justify-between border-t border-zinc-200 pt-3 text-base font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-50">
            <dt>Subtotal</dt>
            <dd>{formatMoney(cart.subtotal, currency)}</dd>
          </div>
        </dl>
        {error ? (
          <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
            {error}
          </p>
        ) : null}
        <Link
          href="/"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-600 dark:hover:bg-zinc-900"
        >
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
