"use client";

import Link from "next/link";
import { useEffect, useState, useTransition, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import type { ProductSummary } from "@/features/products/types";
import { MAX_QUANTITY_PER_ITEM } from "../constants";
import { useCartActions, useCartState } from "../hooks/use-cart";
import { QuantitySelector } from "./quantity-selector";

type Status = { type: "idle" } | { type: "added" } | { type: "error"; message: string };

export function AddToCartForm({ product }: { product: ProductSummary }) {
  const { cart } = useCartState();
  const { addItem } = useCartActions();
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [isPending, startTransition] = useTransition();

  const inCart = cart.lines.find((line) => line.productId === product.id)?.quantity ?? 0;
  const remaining = Math.max(Math.min(product.stock, MAX_QUANTITY_PER_ITEM) - inCart, 0);
  const soldOut = product.stock === 0;
  const limitReached = !soldOut && remaining === 0;

  useEffect(() => {
    if (status.type !== "added") return;
    const timeout = setTimeout(() => setStatus({ type: "idle" }), 3000);
    return () => clearTimeout(timeout);
  }, [status]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (remaining === 0) return;

    const amount = Math.min(quantity, remaining);
    startTransition(async () => {
      const result = await addItem(product, amount);
      if (result.ok) {
        setQuantity(1);
        setStatus({ type: "added" });
      } else {
        setStatus({ type: "error", message: result.error });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-3">
        <QuantitySelector
          value={Math.min(quantity, Math.max(remaining, 1))}
          max={Math.max(remaining, 1)}
          disabled={remaining === 0 || isPending}
          onChange={setQuantity}
        />
        <Button type="submit" size="lg" className="flex-1" disabled={remaining === 0 || isPending}>
          {soldOut ? "Out of stock" : isPending ? "Adding…" : "Add to cart"}
        </Button>
      </div>

      <div aria-live="polite" className="min-h-6 text-sm">
        {status.type === "added" && (
          <p className="flex items-center gap-2 font-medium text-emerald-700 dark:text-emerald-400">
            <span aria-hidden className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10.5l4 4 8-9" />
              </svg>
            </span>
            <span>
              Added to cart.{" "}
              <Link href="/cart" className="underline underline-offset-2 hover:no-underline">
                View cart
              </Link>
            </span>
          </p>
        )}
        {status.type === "error" && <p className="font-medium text-red-600 dark:text-red-400">{status.message}</p>}
        {status.type === "idle" && limitReached && (
          <p className="text-muted">You already have the maximum quantity in your cart.</p>
        )}
      </div>
    </form>
  );
}
