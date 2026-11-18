import type { Metadata } from "next";
import Link from "next/link";
import { CartView } from "@/features/cart/components/cart-view";

export const metadata: Metadata = {
  title: "Your cart",
};

export default function CartPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-4xl font-bold tracking-tight">Your cart</h1>
        <Link href="/" className="text-sm font-semibold text-accent hover:underline">
          ← Keep shopping
        </Link>
      </div>
      {/* Reserve space while the cart loads so the footer doesn't jump */}
      <div className="min-h-[70vh]">
        <CartView />
      </div>
    </div>
  );
}
