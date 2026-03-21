import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types/types';


interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;

  // State
  isSyncing: boolean;
  lastError: string | null;

  // Actions (things we can do)
  addItem: (product: Product, quantity: number) => void;
  addToCart: (product: Product, quantity: number) => Promise<void>;
  removeItem: (productId: string) => void;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => void;
  updateCartQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => void;
  getItem: (productId: string) => CartItem | undefined;
}

/**
 * Zustand Cart Store
 * 
 * This is our state management solution.
 * Think of it as "a place where cart data lives"
 * 
 * `persist` middleware = auto-save to localStorage
 */
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      isSyncing: false,
      lastError: null,

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
       * Add product to cart (Sync with backend)
       * Uses optimistic updates for better UX
       */
      addToCart: async (product: Product, quantity: number) => {
        const { addItem, updateQuantity, getItem } = get();
        
        // 1. Optimistic update
        addItem(product, quantity);
        set({ isSyncing: true, lastError: null });

        try {
          const response = await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: product.id, quantity }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to sync with server');
          }
          
          // API success! We're already updated locally.
          set({ isSyncing: false });
        } catch (error) {
          console.error('Error in addToCart action:', error);
          
          // 2. Rollback on failure
          const currentItem = getItem(product.id);
          if (currentItem) {
            // If the item existed and we added to it, subtract.
            // If it's a new item, updateQuantity to 0 will remove it.
            updateQuantity(product.id, currentItem.quantity - quantity);
          }
          
          set({ 
            isSyncing: false, 
            lastError: error instanceof Error ? error.message : 'Unknown error' 
          });
          
          // Throw so the component can handle UI errors (like alerts/toasts)
          throw error;
        }
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
       * Remove product from cart (Sync with backend)
       */
      removeFromCart: async (productId: string) => {
        const { removeItem, getItem, addItem } = get();
        const previousItem = getItem(productId);

        if (!previousItem) return;

        // 1. Optimistic update
        removeItem(productId);
        set({ isSyncing: true, lastError: null });

        try {
          const response = await fetch(`/api/cart?productId=${productId}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to remove item from server');
          }

          set({ isSyncing: false });
        } catch (error) {
          console.error('Error in removeFromCart action:', error);
          
          // 2. Rollback
          if (previousItem.product) {
            addItem(previousItem.product, previousItem.quantity);
          }

          set({ 
            isSyncing: false, 
            lastError: error instanceof Error ? error.message : 'Unknown error' 
          });
          throw error;
        }
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
       * Update product quantity (Sync with backend)
       */
      updateCartQuantity: async (productId: string, quantity: number) => {
        const { updateQuantity, getItem } = get();
        const previousItem = getItem(productId);
        const previousQuantity = previousItem?.quantity || 0;

        // 1. Optimistic update
        updateQuantity(productId, quantity);
        set({ isSyncing: true, lastError: null });

        try {
          const response = await fetch('/api/cart', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to update quantity on server');
          }

          set({ isSyncing: false });
        } catch (error) {
          console.error('Error in updateCartQuantity action:', error);
          
          // 2. Rollback
          updateQuantity(productId, previousQuantity);
          
          set({ 
            isSyncing: false, 
            lastError: error instanceof Error ? error.message : 'Unknown error' 
          });
          throw error;
        }
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
