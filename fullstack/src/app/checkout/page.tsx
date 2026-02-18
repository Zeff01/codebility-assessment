"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/");
    }
  }, [items.length, router]);

  if (items.length === 0) {
    return null;
  }

  function handlePlaceOrder() {
    clearCart();
    router.push("/checkout/confirmation");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Checkout
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Review your order before placing it.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Order items */}
        <div className="lg:col-span-2">
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {items.map((item) => (
              <li key={item.product.id} className="flex gap-4 py-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">{item.product.name}</h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Order summary */}
        <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-zinc-600 dark:text-zinc-400">Subtotal</dt>
              <dd className="font-medium">${totalPrice.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between border-t border-zinc-200 pt-3 dark:border-zinc-700">
              <dt className="font-semibold">Order Total</dt>
              <dd className="font-bold">${totalPrice.toFixed(2)}</dd>
            </div>
          </dl>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full rounded-lg bg-black py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Place Order
          </button>

          <Link
            href="/"
            className="mt-3 block text-center text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
