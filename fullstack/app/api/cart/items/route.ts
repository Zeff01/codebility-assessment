/**
 * Cart API — add a line.
 *
 * POST /api/cart/items  { productId: string, quantity?: number }
 *
 * → 201 { snapshot }           on success (line merged if the product is already in cart)
 * → 400 { error, detail }      malformed body / quantity out of range
 * → 404 { error, detail }      unknown productId
 * → 409 { error, detail }      product is out of stock entirely
 *
 * Quantities are clamped to the catalog's stock level: the server has the
 * final word on what ends up in the cart. The snapshot is always recomputed
 * from the catalog, so a tampered client token can never fabricate a price.
 */

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  buildSnapshot,
  CART_COOKIE,
  cartCookieOptions,
  CartRequestError,
  MAX_QTY_PER_LINE,
  parseAddBody,
  sanitizeRawCart,
  serializeCart,
} from "@/lib/cart";
import { getProduct, PRODUCTS } from "@/lib/catalog";

import type { Product } from "@/lib/catalog";

const productsById = new Map<string, Product>(PRODUCTS.map((p) => [p.id, p]));

export async function POST(request: Request) {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null; // malformed JSON → handled below
  }

  const cookieStore = await cookies();

  try {
    const { productId, quantity } = parseAddBody(body);

    const product = getProduct(productId);
    if (!product) {
      return NextResponse.json(
        { error: "product_not_found", detail: `Unknown product "${productId}".` },
        { status: 404 },
      );
    }

    if (product.stock === 0) {
      return NextResponse.json(
        { error: "out_of_stock", detail: `${product.name} is out of stock.` },
        { status: 409 },
      );
    }

    let cookieValue: unknown = [];
    try {
      cookieValue = JSON.parse(cookieStore.get(CART_COOKIE)?.value ?? "[]");
    } catch {
      cookieValue = []; // dirty cookie → start clean, next mutation persists the repair
    }

    const lines = sanitizeRawCart(cookieValue, productsById);
    const existing = lines.find((line) => line.productId === productId);
    // Clamp to BOTH the per-line cap and actual stock — repeated adds must not
    // walk a line past the 99-unit per-line limit.
    const targetQuantity = Math.min(
      product.stock,
      MAX_QTY_PER_LINE,
      existing ? existing.quantity + quantity : quantity,
    );

    if (existing) {
      existing.quantity = targetQuantity;
    } else {
      lines.push({ productId, quantity: targetQuantity });
    }

    const snapshot = buildSnapshot(lines, getProduct);

    cookieStore.set(CART_COOKIE, serializeCart(lines), cartCookieOptions());

    return NextResponse.json(snapshot, { status: 201 });
  } catch (error) {
    if (error instanceof CartRequestError) {
      return NextResponse.json({ error: error.code, detail: error.detail }, { status: error.status });
    }
    throw error;
  }
}
