/**
 * Cart API — read.
 *
 * GET /api/cart
 * Returns the authoritative snapshot for the current visitor. Always 200:
 * "no cookie yet" is a valid empty cart, not an error. `no-store` because the
 * response varies per visitor's cookie.
 */

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  buildSnapshot,
  CART_COOKIE,
  emptyCart,
  sanitizeRawCart,
} from "@/lib/cart";
import { PRODUCTS, getProduct } from "@/lib/catalog";

import type { Product } from "@/lib/catalog";

const productsById = new Map<string, Product>(PRODUCTS.map((p) => [p.id, p]));

export async function GET() {
  try {
    const cookieStore = await cookies();
    const raw = cookieStore.get(CART_COOKIE)?.value;

    if (!raw) {
      return NextResponse.json(emptyCart(), { headers: { "Cache-Control": "no-store" } });
    }

    const lines = sanitizeRawCart(JSON.parse(raw), productsById);
    const snapshot = buildSnapshot(lines, getProduct);
    return NextResponse.json(snapshot, { headers: { "Cache-Control": "no-store" } });
  } catch {
    // Corrupt or hand-modified cookie: treat as empty rather than erroring.
    // The next mutation rewrites it with a clean value.
    return NextResponse.json(emptyCart(), { headers: { "Cache-Control": "no-store" } });
  }
}
