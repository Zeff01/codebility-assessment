import { create } from "zustand";
import type { CartItem } from "@/lib/cart";

interface CartState {
  items: CartItem[];
  isLoading: boolean;
  fetchCart: () => Promise<void>;
  add: (id: string, qty: number) => Promise<void>;
  updateQuantity: (id: string, qty: number) => Promise<void>;
  remove: (id: string) => Promise<void>;
  itemCount: number;
  total: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isLoading: false,
  itemCount: 0,
  total: 0,

  fetchCart: async () => {
    set({ isLoading: true });
    const res = await fetch("/api/cart");
    const cart: CartItem[] = await res.json();
    set({
      items: cart,
      isLoading: false,
      itemCount: cart.reduce((sum, i) => sum + i.quantity, 0),
      total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    });
  },

  add: async (id, qty) => {
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, quantity: qty }),
    });
    await get().fetchCart();
  },

  remove: async (id) => {
    await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await get().fetchCart();
  },

  updateQuantity: async (id: string, qty: number) => {
    if (qty <= 0) {
      await get().remove(id);
      return;
    }

    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, quantity: qty, replace: true }),
    });

    await get().fetchCart();
  },
}));
