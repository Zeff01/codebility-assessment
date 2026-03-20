import { useCartStore } from "../lib/stores/store";


/**
 * Custom Hook: useCart
 * 
 * This is a convenient wrapper around the Zustand store.
 * Components import this hook instead of importing the store directly.
 * 
 * Benefits:
 * - Cleaner component code
 * - Easier to test
 * - Easier to refactor later
 */
export function useCart() {
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.totalItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getItem = useCartStore((state) => state.getItem);

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItem,
  };
}