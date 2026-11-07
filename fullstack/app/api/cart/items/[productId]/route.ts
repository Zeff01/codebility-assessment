/**
 * Cart API — update/remove a single line.
 *
 * PATCH  /api/cart/items/:productId  { quantity: number }   (0 removes the line)
 * DELETE /api/cart/items/:productId
 *
 * → 200 { snapshot }           cart state after the mutation
 * → 400 { error, detail }      quantity not an integer / negative
 * → 404 { error, detail }      unknown productId, or productId not currently in the cart
 *
 * `no-store` everywhere: cart responses vary with the visitor's cookie.
 */

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  buildSnapshot,
  CART_COOKIE,
  cartCookieOptions,
  CART_ERROR_CODES,
  CartRequestError,
  parseUpdateBody,
  sanitizeRawCart,
  serializeCart,
} from "@/lib/cart";
import { getProduct, PRODUCTS } from "@/lib/catalog";

import type { Product } from "@/lib/catalog";
import type { ParsedCartLine } from "@/lib/cart";

const productsById = new Map<string, Product>(PRODUCTS.map((p) => [p.id, p]));

type RouteContext = { params: Promise<{ productId: string }> };

/** Shared: load + sanitize the current cart. */
async function loadCartLines(): Promise<ParsedCartLine[]> {
  const cookieStore = await cookies();
  let cookieValue: unknown = [];
  try {
    cookieValue = JSON.parse(cookieStore.get(CART_COOKIE)?.value ?? "[]");
  } catch {
    // fall through with empty — 404s below communicate the actual miss
  }
  return sanitizeRawCart(cookieValue, productsById);
}

function errorResponse(error: unknown) {
  if (error instanceof CartRequestError) {
    return NextResponse.json({ error: error.code, detail: error.detail }, { status: error.status });
  }
  throw error;
}

export async function PATCH(request: Request, { params }: RouteContext) {
  const { productId } = await params;
  const cookieStore = await cookies();

  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  try {
    const product = getProduct(productId);
    const { quantity } = parseUpdateBody(body, productId, product);

    const lines = await loadCartLines();
    if (!lines.some((line) => line.productId === productId)) {
      return NextResponse.json(
        { error: CART_ERROR_CODES.ITEM_NOT_IN_CART, detail: `"${productId}" is not in the cart.` },
        { status: 404 },
      );
    }

    if (product) {
      const clampedMax = Math.min(product.stock, 99);
      if (quantity > clampedMax) {
        throw new CartRequestError(
          400,
          CART_ERROR_CODES.INVALID_QUANTITY,
          `Quantity above stock limit (${clampedMax}).`,
        );
      }
    }

    const next = quantity === 0 ? lines.filter((line) => line.productId !== productId) : lines.map((line) => (line.productId === productId ? { ...line, quantity } : line));

    const snapshot = buildSnapshot(next, getProduct);
    cookieStore.set(CART_COOKIE, serializeCart(next), cartCookieOptions());

    return NextResponse.json(snapshot);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(_request: Request, { params }: RouteContext) {
  const { productId } = await params;
  const cookieStore = await cookies();

  try {
    if (!getProduct(productId)) {
      return NextResponse.json(
        { error: CART_ERROR_CODES.PRODUCT_NOT_FOUND, detail: `Unknown product "${productId}".` },
        { status: 404 },
      );
    }

    const lines = await loadCartLines();
    if (!lines.some((line) => line.productId === productId)) {
      return NextResponse.json(
        { error: CART_ERROR_CODES.ITEM_NOT_IN_CART, detail: `"${productId}" is not in the cart.` },
        { status: 404 },
      );
    }

    const next = lines.filter((line) => line.productId !== productId);
    const snapshot = buildSnapshot(next, getProduct);
    cookieStore.set(CART_COOKIE, serializeCart(next), cartCookieOptions());

    return NextResponse.json(snapshot);
  } catch (error) {
    return errorResponse(error);
  }
}
