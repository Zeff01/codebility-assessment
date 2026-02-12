"use client";

import * as React from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { formatCurrency, getCartTotals } from "@/lib/cart";

export function CartItems() {
  const { cart, removeItem, updateItem, clearCart } = useCart();
  const totals = React.useMemo(() => getCartTotals(cart.items), [cart.items]);

  if (cart.items.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed bg-background p-6 text-sm text-muted-foreground">
        Your cart is empty. Add something you love.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {cart.items.map((item) => (
          <div
            key={item.productId}
            className="flex flex-col gap-4 rounded-2xl border bg-background p-4 sm:flex-row sm:items-center"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {formatCurrency(item.price)}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.productId)}
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => updateItem(item.productId, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <MinusIcon className="h-4 w-4" />
                </Button>
                <div className="min-w-10 text-center text-sm">
                  {item.quantity}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => updateItem(item.productId, item.quantity + 1)}
                >
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-background p-4">
        <div>
          <div className="text-xs text-muted-foreground">Subtotal</div>
          <div className="text-lg font-semibold">
            {formatCurrency(totals.total)}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" onClick={clearCart}>
            Clear cart
          </Button>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
}
