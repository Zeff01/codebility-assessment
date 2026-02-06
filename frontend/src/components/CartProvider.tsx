"use client";

import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import type { Product } from "@/lib/types";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: Record<number, CartItem>;
};

type Action =
  | { type: "ADD"; product: Product; qty?: number }
  | { type: "REMOVE"; id: number }
  | { type: "SET_QTY"; id: number; qty: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; state: CartState };

const CART_KEY = "lunas_collection_cart_v1";

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "HYDRATE":
      return action.state;

    case "ADD": {
      const qty = action.qty ?? 1;
      const existing = state.items[action.product.id];
      const nextQty = (existing?.qty ?? 0) + qty;

      return {
        items: {
          ...state.items,
          [action.product.id]: {
            id: action.product.id,
            title: action.product.title,
            price: action.product.price,
            image: action.product.image,
            qty: nextQty,
          },
        },
      };
    }

    case "REMOVE": {
      const next = { ...state.items };
      delete next[action.id];
      return { items: next };
    }

    case "SET_QTY": {
      const item = state.items[action.id];
      if (!item) return state;

      const qty = Math.max(1, Math.min(99, action.qty));
      return { items: { ...state.items, [action.id]: { ...item, qty } } };
    }

    case "CLEAR":
      return { items: {} };

    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (product: Product, qty?: number) => void;
  remove: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: {} });

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as CartState;
      if (parsed?.items) dispatch({ type: "HYDRATE", state: parsed });
    } catch {
      // ignore
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const items = useMemo(() => Object.values(state.items), [state.items]);
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items]);

  const value: CartContextValue = {
    items,
    count,
    subtotal,
    add: (product, qty) => dispatch({ type: "ADD", product, qty }),
    remove: (id) => dispatch({ type: "REMOVE", id }),
    setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
