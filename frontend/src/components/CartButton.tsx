"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartButton() {
  const { count } = useCart();

  return (
    <Link href="/cart" className="cartBtn" aria-label="Open cart">
      🛒
      {count > 0 ? <span className="cartBadge">{count}</span> : null}
    </Link>
  );
}
