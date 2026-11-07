import {
  mergeCartItem,
  removeCartItem,
  summarizeCart,
  updateCartQuantity,
} from "@/lib/cart";
import { getProductById, toCartLineItem } from "@/lib/products";
import type { CartLineItem } from "@/types/product";
import { NextResponse } from "next/server";

type CartActionBody = {
  action: "add" | "update" | "remove";
  productId: string;
  quantity?: number;
  items?: CartLineItem[];
};

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let body: CartActionBody;
  try {
    body = (await request.json()) as CartActionBody;
  } catch {
    return badRequest("Invalid JSON body");
  }

  const { action, productId, quantity = 1, items = [] } = body;

  if (!productId?.trim()) {
    return badRequest("productId is required");
  }

  const product = await getProductById(productId);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  let nextItems: CartLineItem[];

  switch (action) {
    case "add": {
      if (quantity < 1) {
        return badRequest("quantity must be at least 1");
      }
      const inCart = items.find((item) => item.productId === productId);
      const nextQuantity = (inCart?.quantity ?? 0) + quantity;
      if (nextQuantity > product.stock) {
        return badRequest(`Only ${product.stock} units available`);
      }
      nextItems = mergeCartItem(items, toCartLineItem(product, quantity));
      break;
    }
    case "update": {
      if (quantity === undefined) {
        return badRequest("quantity is required for update");
      }
      if (quantity > product.stock) {
        return badRequest(`Only ${product.stock} units available`);
      }
      nextItems = updateCartQuantity(items, productId, quantity);
      break;
    }
    case "remove":
      nextItems = removeCartItem(items, productId);
      break;
    default:
      return badRequest("Unknown cart action");
  }

  return NextResponse.json({ cart: summarizeCart(nextItems) });
}
