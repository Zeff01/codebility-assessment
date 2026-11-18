"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useOptimistic,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { ProductSummary } from "@/features/products/types";
import { cartClient } from "../api/cart-client";
import { emptyCart } from "../lib/totals";
import type { Cart } from "../types";
import { cartReducer } from "./cart-reducer";

export type MutationResult = { ok: true } | { ok: false; error: string };

export type CartState = {
  cart: Cart;
  isLoaded: boolean;
  loadError: string | null;
};

export type CartActions = {
  addItem: (product: ProductSummary, quantity: number) => Promise<MutationResult>;
  updateQuantity: (productId: string, quantity: number) => Promise<MutationResult>;
  removeItem: (productId: string) => Promise<MutationResult>;
  reload: () => Promise<void>;
};

export const CartStateContext = createContext<CartState | null>(null);
export const CartActionsContext = createContext<CartActions | null>(null);

const toMessage = (error: unknown) =>
  error instanceof Error ? error.message : "Something went wrong";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>(emptyCart);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [optimisticCart, applyOptimistic] = useOptimistic(cart, cartReducer);

  // The cart lives in a cookie, so requests are sent one at a time.
  // Parallel requests would each read the same cookie and overwrite each other.
  const queue = useRef<Promise<unknown>>(Promise.resolve());

  const enqueue = useCallback(<T,>(task: () => Promise<T>) => {
    const next = queue.current.then(task, task);
    queue.current = next.catch(() => undefined);
    return next;
  }, []);

  const load = useCallback(
    () =>
      enqueue(() => cartClient.get())
        .then((next) => {
          setCart(next);
          setLoadError(null);
        })
        .catch((error) => setLoadError(toMessage(error)))
        .finally(() => setIsLoaded(true)),
    [enqueue],
  );

  useEffect(() => {
    load();
  }, [load]);

  const actions = useMemo<CartActions>(() => {
    const mutate = async (request: () => Promise<Cart>): Promise<MutationResult> => {
      try {
        setCart(await enqueue(request));
        return { ok: true };
      } catch (error) {
        return { ok: false, error: toMessage(error) };
      }
    };

    // Called inside a transition so the optimistic state holds until the request settles.
    return {
      addItem(product, quantity) {
        applyOptimistic({ type: "add", product, quantity });
        return mutate(() => cartClient.add(product.id, quantity));
      },
      updateQuantity(productId, quantity) {
        applyOptimistic({ type: "update", productId, quantity });
        return mutate(() => cartClient.update(productId, quantity));
      },
      removeItem(productId) {
        applyOptimistic({ type: "remove", productId });
        return mutate(() => cartClient.remove(productId));
      },
      async reload() {
        setIsLoaded(false);
        await load();
      },
    };
  }, [applyOptimistic, enqueue, load]);

  const state = useMemo<CartState>(
    () => ({ cart: optimisticCart, isLoaded, loadError }),
    [optimisticCart, isLoaded, loadError],
  );

  return (
    <CartActionsContext value={actions}>
      <CartStateContext value={state}>{children}</CartStateContext>
    </CartActionsContext>
  );
}
