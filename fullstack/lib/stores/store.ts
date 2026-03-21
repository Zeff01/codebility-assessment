import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types/types';


interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  // Actions (local-only — server sync is handled by TanStack Query in useCart hook)
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItem: (productId: string) => CartItem | undefined;
}

/**
 * Zustand Cart Store
 *
 * Local state only — items, totals, localStorage persistence.
 * All server sync (optimistic updates, rollback, loading states)
 * is handled by TanStack Query mutations in `hooks/useCart.ts`.
 *
 * `persist` middleware = auto-save to localStorage
 */
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      /**
       * Add product to cart
       * If product already in cart, increase quantity
       * Otherwise, add as new item
       */
      addItem: (product: Product, quantity: number) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.productId === product.id
          );

          let newItems: CartItem[];
          if (existingItem) {
            // Product already in cart - increase quantity
            newItems = state.items.map((item) =>
              item.productId === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          } else {
            // New product - add to cart
            newItems = [
              ...state.items,
              { productId: product.id, quantity, product },
            ];
          }

          // Calculate totals
          return {
            items: newItems,
            totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: newItems.reduce((sum, item) => {
              const price = item.product?.price || 0;
              return sum + price * item.quantity;
            }, 0),
          };
        });
      },

      /**
       * Remove product from cart
       */
      removeItem: (productId: string) => {
        set((state) => {
          const newItems = state.items.filter(
            (item) => item.productId !== productId
          );
          return {
            items: newItems,
            totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: newItems.reduce((sum, item) => {
              const price = item.product?.price || 0;
              return sum + price * item.quantity;
            }, 0),
          };
        });
      },

      /**
       * Update product quantity
       * If quantity becomes 0, remove the item
       */
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => {
          const newItems = state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity }
              : item
          );

          return {
            items: newItems,
            totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: newItems.reduce((sum, item) => {
              const price = item.product?.price || 0;
              return sum + price * item.quantity;
            }, 0),
          };
        });
      },

      /**
       * Clear entire cart
       */
      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },

      /**
       * Find item in cart by product ID
       */
      getItem: (productId: string) => {
        return get().items.find((item) => item.productId === productId);
      },
    }),
    {
      name: 'cart-store', // localStorage key name
      version: 1,
    }
  )
);
