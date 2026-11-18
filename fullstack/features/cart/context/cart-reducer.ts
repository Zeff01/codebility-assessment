import type { ProductSummary } from "@/features/products/types";
import { buildCart, createCartLine, setLineQuantity } from "../lib/totals";
import type { Cart } from "../types";

export type OptimisticCartAction =
  | { type: "add"; product: ProductSummary; quantity: number }
  | { type: "update"; productId: string; quantity: number }
  | { type: "remove"; productId: string };

export function cartReducer(cart: Cart, action: OptimisticCartAction): Cart {
  switch (action.type) {
    case "add": {
      const exists = cart.lines.some((line) => line.productId === action.product.id);
      const lines = exists
        ? cart.lines.map((line) =>
            line.productId === action.product.id
              ? setLineQuantity(line, line.quantity + action.quantity)
              : line,
          )
        : [...cart.lines, createCartLine(action.product, action.quantity)];
      return buildCart(lines);
    }
    case "update":
      return buildCart(
        cart.lines.map((line) =>
          line.productId === action.productId ? setLineQuantity(line, action.quantity) : line,
        ),
      );
    case "remove":
      return buildCart(cart.lines.filter((line) => line.productId !== action.productId));
  }
}
