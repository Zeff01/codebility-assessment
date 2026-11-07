import type { CartLineItem, CartState } from "@/types/product";

export const CART_STORAGE_KEY = "shop-cart-v1";

export function summarizeCart(items: CartLineItem[]): CartState {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return { items, itemCount, subtotal };
}

export function mergeCartItem(
  items: CartLineItem[],
  incoming: CartLineItem,
): CartLineItem[] {
  const existing = items.find((item) => item.productId === incoming.productId);
  if (!existing) {
    return [...items, incoming];
  }
  return items.map((item) =>
    item.productId === incoming.productId
      ? {
          ...item,
          quantity: item.quantity + incoming.quantity,
          stock: incoming.stock,
        }
      : item,
  );
}

export function updateCartQuantity(
  items: CartLineItem[],
  productId: string,
  quantity: number,
): CartLineItem[] {
  if (quantity <= 0) {
    return items.filter((item) => item.productId !== productId);
  }
  return items.map((item) =>
    item.productId === productId ? { ...item, quantity } : item,
  );
}

export function removeCartItem(
  items: CartLineItem[],
  productId: string,
): CartLineItem[] {
  return items.filter((item) => item.productId !== productId);
}

export function parseStoredCart(raw: string | null): CartLineItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as CartLineItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter(
        (item) =>
          item &&
          typeof item.productId === "string" &&
          typeof item.quantity === "number" &&
          item.quantity > 0,
      )
      .map((item) => ({
        ...item,
        stock:
          typeof item.stock === "number" && item.stock > 0
            ? item.stock
            : Math.max(item.quantity, 1),
      }));
  } catch {
    return [];
  }
}
