"use client";

import type { Product } from "@/lib/types";
import { useCart } from "./CartProvider";

export default function AddToCartButton({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <button className="buttonPrimary" onClick={() => add(product, 1)}>
      Add to cart
    </button>
  );
}
