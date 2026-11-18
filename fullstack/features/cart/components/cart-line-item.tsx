"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useState, useTransition } from "react";
import { formatCurrency } from "@/lib/format";
import { MAX_QUANTITY_PER_ITEM } from "../constants";
import type { MutationResult } from "../context/cart-provider";
import { useCartActions } from "../hooks/use-cart";
import type { CartLine } from "../types";
import { QuantitySelector } from "./quantity-selector";

type CartLineItemProps = {
  line: CartLine;
  // The first rows are on screen right away and one of them is often the largest element.
  eager?: boolean;
};

export const CartLineItem = memo(function CartLineItem({ line, eager = false }: CartLineItemProps) {
  const { updateQuantity, removeItem } = useCartActions();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { product } = line;

  const run = (action: () => Promise<MutationResult>) => {
    setError(null);
    startTransition(async () => {
      const result = await action();
      if (!result.ok) setError(result.error);
    });
  };

  return (
    <li className="flex gap-4 rounded-3xl bg-surface p-3 ring-1 ring-border transition sm:gap-5 sm:p-4">
      <Link
        href={`/products/${product.slug}`}
        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-surface-muted sm:h-28 sm:w-28"
      >
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="112px"
          loading={eager ? "eager" : "lazy"}
          className="object-cover"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 py-1 sm:flex-row">
        <div className="min-w-0 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{product.brand}</p>
          <Link href={`/products/${product.slug}`} className="font-semibold hover:underline">
            {product.name}
          </Link>
          <p className="text-sm text-muted">{formatCurrency(product.price)} each</p>
          {error && <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:flex-col sm:flex-nowrap sm:items-end">
          <p className="font-display text-lg font-bold tabular-nums">{formatCurrency(line.lineTotal)}</p>
          <div className="flex items-center gap-2">
            <QuantitySelector
              size="sm"
              value={line.quantity}
              max={Math.min(product.stock, MAX_QUANTITY_PER_ITEM)}
              disabled={isPending}
              onChange={(quantity) => run(() => updateQuantity(product.id, quantity))}
            />
            <button
              type="button"
              onClick={() => run(() => removeItem(product.id))}
              disabled={isPending}
              className="rounded-full px-2 py-1 text-sm font-medium text-muted transition hover:bg-red-50 hover:text-red-600 disabled:opacity-50 dark:hover:bg-red-500/10 dark:hover:text-red-400"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
});
