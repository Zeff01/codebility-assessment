"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const router = useRouter();
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 dark:bg-zinc-900 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-700">
          <h2 className="text-lg font-semibold">Cart ({totalItems})</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Close cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="mb-4 h-16 w-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-4 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium leading-tight">
                        {item.product.name}
                      </h3>
                      <p className="mt-0.5 text-sm font-semibold">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded border border-zinc-300 text-sm transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.min(item.product.stock, item.quantity + 1)
                            )
                          }
                          disabled={item.quantity >= item.product.stock}
                          className="flex h-7 w-7 items-center justify-center rounded border border-zinc-300 text-sm transition-colors hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-600 dark:hover:bg-zinc-800"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-xs text-red-500 transition-colors hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-zinc-200 px-6 py-4 dark:border-zinc-700">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Total</span>
              <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => {
                onClose();
                router.push("/checkout");
              }}
              className="w-full rounded-lg bg-black py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="mt-2 w-full rounded-lg border border-zinc-300 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
