import { CartProduct } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface CartState {
  products: CartProduct[];

  addProduct: (product: CartProduct, quantity?: number) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;

  totalItems: () => number;
  productCount: () => number;
  getTotalPrice: () => number;

  loadCart: () => Promise<void>;
  saveCart: () => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  products: [],

  addProduct: (
    product: Omit<CartProduct, "quantity">,
    quantity: number = 1
  ) => {
    const { products } = get();
    const existingIndex = products.findIndex((p) => p.id === product.id);

    let updated: CartProduct[];
    if (existingIndex !== -1) {
      updated = [...products];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + quantity,
      };
    } else {
      updated = [...products, { ...product, quantity }];
    }

    set({ products: updated });
    get().saveCart();
  },

  removeProduct: (id) => {
    const updated = get().products.filter((p) => p.id !== id);
    set({ products: updated });
    get().saveCart();
  },

  updateQuantity: (id, quantity) => {
    const updated = get().products.map((p) =>
      p.id === id ? { ...p, quantity } : p
    );
    set({ products: updated });
    get().saveCart();
  },

  clearCart: () => {
    set({ products: [] });
    get().saveCart();
  },

  totalItems: () =>
    get().products.reduce((sum, item) => sum + item.quantity, 0),

  productCount: () => get().products.length,

  getTotalPrice: () =>
    get().products.reduce((sum, item) => sum + item.price * item.quantity, 0),

  loadCart: async () => {
    try {
      const data = await AsyncStorage.getItem("cart");
      if (data) {
        const parsed = JSON.parse(data);
        set(parsed);
      }
    } catch (err) {
      console.error("Failed to load cart", err);
    }
  },

  saveCart: async () => {
    try {
      const { products } = get();
      await AsyncStorage.setItem("cart", JSON.stringify({ products }));
    } catch (err) {
      console.error("Failed to save cart", err);
    }
  },
}));
