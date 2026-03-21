import { useMutation } from '@tanstack/react-query';
import { useCartStore } from '../lib/stores/store';
import {
  addToCartApi,
  removeFromCartApi,
  updateCartQuantityApi,
  clearCartApi,
} from '../lib/api/cartApi';
import { CartItem, Product } from '../lib/types/types';

/**
 * Custom Hook: useCart
 *
 * Combines:
 *  - Zustand for instant local state (items, totals, localStorage)
 *  - TanStack Query mutations for server sync with optimistic updates
 *
 * Components should import this hook, not useCartStore directly.
 */
export function useCart() {
  // ─── Local State (Zustand) ─────────────────────────────────────────────────
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.totalItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getItem = useCartStore((state) => state.getItem);

  // ─── Add to Cart Mutation ─────────────────────────────────────────────────
  const addToCartMutation = useMutation({
    mutationFn: ({ product, quantity }: { product: Product; quantity: number }) =>
      addToCartApi({ productId: product.id, quantity }),

    onMutate: ({ product, quantity }) => {
      // Snapshot state BEFORE optimistic update (for rollback)
      const previousItem = getItem(product.id);

      // 1. Optimistic update — instant local change
      addItem(product, quantity);

      // Return context so onError can rollback
      return { previousItem, product };
    },

    onError: (_error, _variables, context) => {
      if (!context) return;
      const { previousItem, product } = context;

      // 2. Rollback to the snapshot
      if (previousItem) {
        updateQuantity(product.id, previousItem.quantity);
      } else {
        removeItem(product.id);
      }
    },
  });

  // ─── Remove from Cart Mutation ─────────────────────────────────────────────
  const removeFromCartMutation = useMutation({
    mutationFn: (productId: string) => removeFromCartApi(productId),

    onMutate: (productId) => {
      const previousItem = getItem(productId);
      if (!previousItem) return;

      // 1. Optimistic update
      removeItem(productId);

      return { previousItem };
    },

    onError: (_error, _productId, context) => {
      if (!context?.previousItem?.product) return;

      // 2. Rollback
      addItem(context.previousItem.product, context.previousItem.quantity);
    },
  });

  // ─── Clear Cart Mutation ──────────────────────────────────────────────────
  const clearCartMutation = useMutation({
    mutationFn: () => clearCartApi(),
    onMutate: () => {
      const previousItems = items;
      clearCart();
      return { previousItems };
    },
    onError: (_error, _variables, context) => {
      if (!context) return;
      context.previousItems.forEach(item => {
        if (item.product) {
          addItem(item.product, item.quantity);
        }
      });
    },
  });

  // ─── Update Quantity Mutation ─────────────────────────────────────────────
  const updateCartQuantityMutation = useMutation({
    mutationFn: ({ productId, quantity }: { productId: string; quantity: number }) =>
      updateCartQuantityApi({ productId, quantity }),

    onMutate: ({ productId, quantity }) => {
      const previousItem = getItem(productId);
      const previousQuantity = previousItem?.quantity ?? 0;

      // 1. Optimistic update
      updateQuantity(productId, quantity);

      return { productId, previousQuantity };
    },

    onError: (_error, _variables, context) => {
      if (!context) return;

      // 2. Rollback
      updateQuantity(context.productId, context.previousQuantity);
    },
  });

  // ─── Public API ───────────────────────────────────────────────────────────
  return {
    // State
    items,
    totalItems,
    totalPrice,

    // Local-only actions
    clearCartLocal: clearCart,
    getItem,

    // Server-synced actions
    clearCart: () => clearCartMutation.mutateAsync(),
    addToCart: (product: Product, quantity: number) =>
      addToCartMutation.mutateAsync({ product, quantity }),
    removeFromCart: (productId: string) =>
      removeFromCartMutation.mutateAsync(productId),
    updateCartQuantity: (productId: string, quantity: number) =>
      updateCartQuantityMutation.mutateAsync({ productId, quantity }),

    // Per-mutation loading states (no more single global isSyncing)
    isClearingCart: clearCartMutation.isPending,
    isAddingToCart: addToCartMutation.isPending,
    isRemovingFromCart: (productId: string) =>
      removeFromCartMutation.isPending &&
      removeFromCartMutation.variables === productId,
    isUpdatingQuantity: (productId: string) =>
      updateCartQuantityMutation.isPending &&
      updateCartQuantityMutation.variables?.productId === productId,
  };
}

// Re-export CartItem type for convenience in components
export type { CartItem };