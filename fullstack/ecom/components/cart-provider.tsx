"use client";

import * as React from "react";
import type { Cart, CartItem } from "@/lib/cart";
import { emptyCart, normalizeCart } from "@/lib/cart";

type CartAction =
  | { type: "hydrate"; payload: Cart }
  | { type: "add"; payload: CartItem }
  | { type: "remove"; payload: { productId: string } }
  | { type: "update"; payload: { productId: string; quantity: number } }
  | { type: "clear" };

type CartContextValue = {
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateItem: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = React.createContext<CartContextValue | null>(null);

function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case "hydrate": {
      return normalizeCart(action.payload);
    }
    case "add": {
      const existing = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      const nextItems = existing
        ? state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
        : [...state.items, action.payload];

      return {
        items: nextItems,
        updatedAt: new Date().toISOString(),
      };
    }
    case "remove": {
      return {
        items: state.items.filter(
          (item) => item.productId !== action.payload.productId
        ),
        updatedAt: new Date().toISOString(),
      };
    }
    case "update": {
      const nextItems = state.items
        .map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        items: nextItems,
        updatedAt: new Date().toISOString(),
      };
    }
    case "clear": {
      return {
        items: [],
        updatedAt: new Date().toISOString(),
      };
    }
    default:
      return state;
  }
}

export function CartProvider({
  children,
  initialCart,
}: {
  children: React.ReactNode;
  initialCart?: Cart;
}) {
  const [cart, dispatch] = React.useReducer(
    cartReducer,
    normalizeCart(initialCart ?? emptyCart)
  );
  const hasHydrated = React.useRef(false);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem("cart");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Cart;
        dispatch({ type: "hydrate", payload: parsed });
      } catch {
        window.localStorage.removeItem("cart");
      }
    }
    hasHydrated.current = true;
  }, []);

  React.useEffect(() => {
    if (!hasHydrated.current) {
      return;
    }

    window.localStorage.setItem("cart", JSON.stringify(cart));
    fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "replace", cart }),
    }).catch(() => null);
  }, [cart]);

  const value = React.useMemo(
    () => ({
      cart,
      addItem: (item: CartItem) => dispatch({ type: "add", payload: item }),
      removeItem: (productId: string) =>
        dispatch({ type: "remove", payload: { productId } }),
      updateItem: (productId: string, quantity: number) =>
        dispatch({ type: "update", payload: { productId, quantity } }),
      clearCart: () => dispatch({ type: "clear" }),
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
