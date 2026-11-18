import type { ProductSummary } from "@/features/products/types";

export type StoredCartItem = {
  productId: string;
  quantity: number;
};

export type CartLine = {
  productId: string;
  quantity: number;
  product: ProductSummary;
  lineTotal: number;
};

export type Cart = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
};
