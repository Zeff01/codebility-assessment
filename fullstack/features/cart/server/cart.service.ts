import "server-only";

import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { ApiError } from "@/lib/api";
import { getProductMap, toSummary } from "@/features/products/services/product.service";
import type { Product } from "@/features/products/types";
import { CART_COOKIE, CART_TTL_SECONDS, MAX_CART_LINES, MAX_QUANTITY_PER_ITEM } from "../constants";
import { buildCart, createCartLine } from "../lib/totals";
import { cartIdSchema, type AddItemInput } from "../schemas";
import type { Cart, CartLine, StoredCartItem } from "../types";
import { deleteCart, findCartItems, updateCartItems } from "./cart.repository";

type ProductMap = Map<string, Product>;

// The cookie only holds an opaque, server-issued id. Ids that are malformed or
// don't exist in the store are ignored, so a client can never pick its own cart id.
async function currentCart(): Promise<{ id: string; items: StoredCartItem[] } | null> {
  const id = (await cookies()).get(CART_COOKIE)?.value;
  if (!id || !cartIdSchema.safeParse(id).success) return null;

  const items = await findCartItems(id);
  return items ? { id, items } : null;
}

async function rememberCart(cartId: string, items: StoredCartItem[]) {
  const cookieStore = await cookies();

  if (items.length === 0) {
    cookieStore.delete(CART_COOKIE);
    return;
  }

  cookieStore.set(CART_COOKIE, cartId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: CART_TTL_SECONDS,
  });
}

function maxAllowed(product: Product) {
  return Math.min(product.stock, MAX_QUANTITY_PER_ITEM);
}

function hydrate(items: StoredCartItem[], productMap: ProductMap): Cart {
  const lines: CartLine[] = [];

  for (const item of items) {
    const product = productMap.get(item.productId);
    if (!product || product.stock === 0) continue;

    lines.push(createCartLine(toSummary(product), Math.min(item.quantity, maxAllowed(product))));
  }

  return buildCart(lines);
}

function requireProduct(productMap: ProductMap, productId: string) {
  const product = productMap.get(productId);
  if (!product) {
    throw ApiError.notFound(`Product "${productId}" not found`);
  }
  return product;
}

function assertStock(product: Product, quantity: number) {
  if (product.stock === 0) {
    throw ApiError.conflict(`${product.name} is out of stock`);
  }

  const available = maxAllowed(product);
  if (quantity > available) {
    throw ApiError.conflict(`Only ${available} of ${product.name} can be added`, { available });
  }
}

function requireLine(items: StoredCartItem[], productId: string) {
  if (!items.some((item) => item.productId === productId)) {
    throw ApiError.notFound("Item is not in the cart");
  }
}

export async function getCart() {
  const [cart, productMap] = await Promise.all([currentCart(), getProductMap()]);
  return hydrate(cart?.items ?? [], productMap);
}

export async function addItem({ productId, quantity }: AddItemInput) {
  const productMap = await getProductMap();
  const product = requireProduct(productMap, productId);
  const cartId = (await currentCart())?.id ?? randomUUID();

  const items = await updateCartItems(cartId, (items) => {
    const existing = items.find((item) => item.productId === productId);

    if (!existing && items.length >= MAX_CART_LINES) {
      throw ApiError.conflict(`A cart can hold up to ${MAX_CART_LINES} different products`);
    }

    const nextQuantity = (existing?.quantity ?? 0) + quantity;
    assertStock(product, nextQuantity);

    return existing
      ? items.map((item) => (item.productId === productId ? { ...item, quantity: nextQuantity } : item))
      : [...items, { productId, quantity }];
  });

  await rememberCart(cartId, items);
  return hydrate(items, productMap);
}

export async function updateItem(productId: string, quantity: number) {
  const [cart, productMap] = await Promise.all([currentCart(), getProductMap()]);
  if (!cart) throw ApiError.notFound("Item is not in the cart");

  const product = requireProduct(productMap, productId);

  const items = await updateCartItems(cart.id, (items) => {
    requireLine(items, productId);
    assertStock(product, quantity);
    return items.map((item) => (item.productId === productId ? { ...item, quantity } : item));
  });

  await rememberCart(cart.id, items);
  return hydrate(items, productMap);
}

export async function removeItem(productId: string) {
  const [cart, productMap] = await Promise.all([currentCart(), getProductMap()]);
  if (!cart) throw ApiError.notFound("Item is not in the cart");

  const items = await updateCartItems(cart.id, (items) => {
    requireLine(items, productId);
    return items.filter((item) => item.productId !== productId);
  });

  await rememberCart(cart.id, items);
  return hydrate(items, productMap);
}

export async function clearCart() {
  const cart = await currentCart();
  if (cart) await deleteCart(cart.id);

  (await cookies()).delete(CART_COOKIE);
  return buildCart([]);
}
