import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  emptyCart,
  normalizeCart,
  readCartCookie,
  type Cart,
  type CartItem,
  writeCartCookie,
} from "@/lib/cart";

type CartAction =
  | { action: "add"; item: CartItem }
  | { action: "remove"; productId: string }
  | { action: "update"; productId: string; quantity: number }
  | { action: "replace"; cart: Cart };

function updateCart(cart: Cart, action: CartAction): Cart {
  switch (action.action) {
    case "add": {
      const existing = cart.items.find(
        (item) => item.productId === action.item.productId
      );
      const items = existing
        ? cart.items.map((item) =>
          item.productId === action.item.productId
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item
        )
        : [...cart.items, action.item];
      return { items, updatedAt: new Date().toISOString() };
    }
    case "remove": {
      return {
        items: cart.items.filter((item) => item.productId !== action.productId),
        updatedAt: new Date().toISOString(),
      };
    }
    case "update": {
      return {
        items: cart.items
          .map((item) =>
            item.productId === action.productId
              ? { ...item, quantity: Math.max(1, action.quantity) }
              : item
          )
          .filter((item) => item.quantity > 0),
        updatedAt: new Date().toISOString(),
      };
    }
    case "replace": {
      return normalizeCart(action.cart);
    }
    default:
      return cart;
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const cart = readCartCookie(cookieStore.get("cart")?.value);
  return NextResponse.json({ cart });
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const currentCart = readCartCookie(cookieStore.get("cart")?.value);
  let payload: CartAction | null = null;

  try {
    payload = (await request.json()) as CartAction;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!payload || typeof payload.action !== "string") {
    return NextResponse.json({ error: "Invalid cart action" }, { status: 400 });
  }

  const updated = updateCart(currentCart ?? emptyCart, payload);
  cookieStore.set("cart", writeCartCookie(updated), {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
  });

  return NextResponse.json({ cart: updated });
}
