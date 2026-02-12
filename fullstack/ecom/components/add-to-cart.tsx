"use client";

import * as React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import type { CartItem } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/components/cart-provider";

export function AddToCart({
  item,
  maxQuantity,
}: {
  item: CartItem;
  maxQuantity: number;
}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const outOfStock = maxQuantity <= 0;

  const handleChange = (value: number) => {
    const next = Math.max(1, Math.min(maxQuantity, value));
    setQuantity(next);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 rounded-full border bg-background px-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => handleChange(quantity - 1)}
          disabled={quantity <= 1}
        >
          <MinusIcon className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min={1}
          max={maxQuantity}
          value={quantity}
          onChange={(event) => handleChange(Number(event.target.value))}
          className="h-9 w-14 border-none bg-transparent text-center"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => handleChange(quantity + 1)}
          disabled={quantity >= maxQuantity}
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
      <Button
        type="button"
        className="h-11 px-6"
        onClick={() => addItem({ ...item, quantity })}
        disabled={outOfStock}
      >
        Add to cart
      </Button>
      <div className="text-xs text-muted-foreground">
        {outOfStock ? "Out of stock" : `${maxQuantity} in stock`}
      </div>
    </div>
  );
}
