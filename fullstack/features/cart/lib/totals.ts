import type { ProductSummary } from "@/features/products/types";
import { FLAT_SHIPPING_RATE, FREE_SHIPPING_THRESHOLD } from "../constants";
import type { Cart, CartLine } from "../types";

export const roundMoney = (value: number) => Math.round(value * 100) / 100;

export function createCartLine(product: ProductSummary, quantity: number): CartLine {
  return {
    productId: product.id,
    product,
    quantity,
    lineTotal: roundMoney(product.price * quantity),
  };
}

export function setLineQuantity(line: CartLine, quantity: number): CartLine {
  return createCartLine(line.product, quantity);
}

export function buildCart(lines: CartLine[]): Cart {
  let itemCount = 0;
  let subtotal = 0;

  for (const line of lines) {
    itemCount += line.quantity;
    subtotal += line.lineTotal;
  }

  subtotal = roundMoney(subtotal);
  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING_RATE;

  return {
    lines,
    itemCount,
    subtotal,
    shipping,
    total: roundMoney(subtotal + shipping),
  };
}

export const emptyCart: Cart = buildCart([]);
