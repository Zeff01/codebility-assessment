"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/app/store/cart";
import { toast } from "sonner";

export function CartPage() {
  const { items, itemCount, fetchCart, remove, updateQuantity } =
    useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground mb-6">
          Add items to get started shopping
        </p>
        <Link href="/">
          <Button size="lg">Browse Products</Button>
        </Link>
      </div>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const finalTotal = subtotal + shipping;

  const handleRemove = async (id: string, name: string) => {
    await remove(id);
    toast.error(`Removed ${name} from cart`);
  };

  const handleUpdateQuantity = async (
    id: string,
    qty: number,
    name: string
  ) => {
    await updateQuantity(id, qty);
    toast.success(`${name} quantity updated to ${qty}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="p-4 flex gap-4">
              {/* Product Image */}
              <div className="relative w-24 h-24 shrink-0 bg-muted rounded-lg overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`Image of ${item.name || "product"}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-lg font-bold text-primary">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  {/* Quantity */}
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.id,
                          item.quantity - 1,
                          item.name
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="cursor-pointer bg-transparent text-black hover:bg-muted disabled:opacity-50"
                      size="icon"
                    >
                      −
                    </Button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <Button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.id,
                          item.quantity + 1,
                          item.name
                        )
                      }
                      className="cursor-pointer bg-transparent text-black hover:bg-muted disabled:opacity-50"
                      size="icon"
                    >
                      +
                    </Button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Subtotal</p>
                    <p className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove */}
                  <Button
                    onClick={() => handleRemove(item.id, item.name)}
                    size="icon"
                    variant="destructive"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-4 space-y-4">
            <h2 className="text-xl font-bold">Order Summary</h2>

            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal ({itemCount} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span
                className={shipping === 0 ? "text-primary font-medium" : ""}
              >
                {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="border-t pt-3">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-xl">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
