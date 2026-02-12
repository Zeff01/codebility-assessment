"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { formatCurrency, getCartTotals } from "@/lib/cart";
import { Button } from "@/components/ui/button";

export function CartSummary() {
  const { cart } = useCart();
  const totals = React.useMemo(() => getCartTotals(cart.items), [cart.items]);

  return (
    <div className="flex items-center gap-3">
      <div className="text-xs text-muted-foreground">
        <div>{totals.itemCount} items</div>
        <div className="font-medium text-foreground">
          {formatCurrency(totals.total)}
        </div>
      </div>
      <Button asChild size="sm" className="gap-2">
        <Link href="/cart">
          <ShoppingBagIcon className="h-4 w-4" />
          Cart
        </Link>
      </Button>
    </div>
  );
}
