"use client";

import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "../hooks/use-cart";
import { CartLineItem } from "./cart-line-item";
import { CartSummary } from "./cart-summary";

export function CartView() {
  const { cart, isLoaded, loadError, reload } = useCart();

  if (!isLoaded) return <CartViewSkeleton />;

  if (loadError) {
    return (
      <div className="space-y-4 rounded-3xl bg-red-50 p-6 ring-1 ring-red-200 dark:bg-red-500/10 dark:ring-red-900">
        <p className="font-medium text-red-700 dark:text-red-300">We couldn&apos;t load your cart. {loadError}</p>
        <Button variant="secondary" onClick={() => reload()}>
          Try again
        </Button>
      </div>
    );
  }

  if (cart.lines.length === 0) {
    return (
      <EmptyState
        title="Your cart is empty"
        description="Looks like you haven't added anything yet."
        action={{ href: "/", label: "Continue shopping" }}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
      <ul className="space-y-4">
        {cart.lines.map((line, index) => (
          <CartLineItem key={line.productId} line={line} eager={index < 3} />
        ))}
      </ul>
      <div className="lg:sticky lg:top-24 lg:self-start">
        <CartSummary cart={cart} />
      </div>
    </div>
  );
}

function CartViewSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-4">
        {Array.from({ length: 2 }, (_, index) => (
          <div key={index} className="flex gap-4 rounded-3xl bg-surface p-4 ring-1 ring-border">
            <Skeleton className="h-28 w-28 rounded-2xl" />
            <div className="flex-1 space-y-2 py-1">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        ))}
      </div>
      <Skeleton className="h-80 rounded-3xl" />
    </div>
  );
}
