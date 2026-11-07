"use client";

import {
  CART_STORAGE_KEY,
  parseStoredCart,
  summarizeCart,
} from "@/lib/cart";
import type { CartLineItem, CartState } from "@/types/product";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type CartContextValue = {
  cart: CartState;
  isHydrated: boolean;
  isPending: boolean;
  error: string | null;
  addItem: (
    productId: string,
    quantity?: number,
    stockLimit?: number,
  ) => Promise<boolean>;
  getCartQuantity: (productId: string) => number;
  updateQuantity: (productId: string, quantity: number) => Promise<boolean>;
  removeItem: (productId: string) => Promise<boolean>;
  clearError: () => void;
};

const emptyCart = summarizeCart([]);

const CartContext = createContext<CartContextValue | null>(null);

async function applyCartAction(
  payload: {
    action: "add" | "update" | "remove";
    productId: string;
    quantity?: number;
    items: CartLineItem[];
  },
): Promise<CartState> {
  const response = await fetch("/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as {
    cart?: CartState;
    error?: string;
  };

  if (!response.ok) {
    throw new Error(data.error ?? "Could not update cart");
  }

  if (!data.cart) {
    throw new Error("Invalid cart response");
  }

  return data.cart;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLineItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const itemsRef = useRef(items);
  const actionInFlightRef = useRef(false);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    // Hydrate persisted cart on the client without SSR mismatch.
    /* eslint-disable react-hooks/set-state-in-effect -- localStorage is client-only */
    setItems(parseStoredCart(localStorage.getItem(CART_STORAGE_KEY)));
    setIsHydrated(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const runAction = useCallback(
    async (payload: Parameters<typeof applyCartAction>[0]): Promise<boolean> => {
      if (actionInFlightRef.current) {
        return false;
      }
      actionInFlightRef.current = true;
      setIsPending(true);
      setError(null);
      try {
        const cart = await applyCartAction(payload);
        setItems(cart.items);
        itemsRef.current = cart.items;
        return true;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Cart update failed");
        return false;
      } finally {
        actionInFlightRef.current = false;
        setIsPending(false);
      }
    },
    [],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      cart: isHydrated ? summarizeCart(items) : emptyCart,
      isHydrated,
      isPending,
      error,
      getCartQuantity: (productId) =>
        items.find((item) => item.productId === productId)?.quantity ?? 0,
      addItem: (productId, quantity = 1, stockLimit) => {
        const inCart =
          itemsRef.current.find((item) => item.productId === productId)
            ?.quantity ?? 0;
        if (stockLimit !== undefined && inCart + quantity > stockLimit) {
          setError(`Only ${stockLimit} units available`);
          return Promise.resolve(false);
        }
        return runAction({
          action: "add",
          productId,
          quantity,
          items: itemsRef.current,
        });
      },
      updateQuantity: (productId, quantity) =>
        runAction({
          action: "update",
          productId,
          quantity,
          items: itemsRef.current,
        }),
      removeItem: (productId) =>
        runAction({
          action: "remove",
          productId,
          items: itemsRef.current,
        }),
      clearError: () => setError(null),
    }),
    [error, isHydrated, isPending, items, runAction],
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
