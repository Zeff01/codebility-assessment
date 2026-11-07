"use client";

/**
 * Client cart store.
 *
 * Deliberately a thin layer: the store holds the authoritative snapshot the
 * server hands back (it never recomputes totals locally) plus UI-only state
 * (drawer visibility, per-line pending flags, last error). Every mutation
 * round-trips through the cart API so what the user sees is always what the
 * server would ship. Persistence itself lives in the httpOnly cookie — the
 * store re-hydrates from `GET /api/cart` on mount.
 */

import { create } from "zustand";
import type { CartLine, CartSnapshot } from "@/lib/cart";

type SnapshotFields = Pick<CartSnapshot, "items" | "itemCount" | "subtotal" | "currency">;

type CartState = {
  items: CartLine[];
  itemCount: number;
  subtotal: number;
  currency: string;

  /** Drawer visibility. */
  open: boolean;
  /** True once the initial `GET /api/cart` round-trip has settled. */
  hydrated: boolean;
  /** Per-line busy flags while a PATCH/DELETE is in flight. */
  busy: Record<string, boolean>;
  /** True while the add-to-cart POST is in flight. */
  adding: boolean;
  /** Set after a successful add; drives the "View cart" affordance. */
  lastAddedProductId: string | null;
  error: string | null;

  hydrate: () => Promise<void>;
  refresh: () => Promise<void>;
  addItem: (productId: string, quantity: number) => Promise<boolean>;
  updateQuantity: (productId: string, quantity: number) => Promise<boolean>;
  removeItem: (productId: string) => Promise<boolean>;
  openCart: () => void;
  closeCart: () => void;
  clearError: () => void;
};

const EMPTY: SnapshotFields = { items: [], itemCount: 0, subtotal: 0, currency: "USD" };

function snapshotFields(snap: CartSnapshot): SnapshotFields {
  return { items: snap.items ?? EMPTY.items, itemCount: snap.itemCount ?? 0, subtotal: snap.subtotal ?? 0, currency: snap.currency ?? "USD" };
}

async function readSnapshot(res: Response): Promise<CartSnapshot> {
  return (await res.json()) as CartSnapshot;
}

async function mutate(
  url: string,
  init: RequestInit,
  applyResult: (set: (partial: Partial<CartState>) => void) => void,
  set: (partial: Partial<CartState>) => void,
): Promise<boolean> {
  try {
    const res = await fetch(url, { credentials: "same-origin", ...init });

    if (!res.ok) {
      const body = (await res.json().catch(() => null)) as { error?: string; detail?: string } | null;
      set({
        error:
          body?.error === "invalid_quantity" || body?.error === "invalid_body"
            ? "That update isn't valid — adjust the quantity and try again."
            : body?.error === "product_not_found"
              ? "That product isn't available."
              : `Cart update failed (${res.status}). Please retry.`,
      });
      return false;
    }

    const snap = await readSnapshot(res);
    applyResult(set);
    set({ ...snapshotFields(snap), error: null });
    return true;
  } catch {
    set({ error: "Network error — check your connection and retry." });
    return false;
  }
}

export const useCart = create<CartState>((set, get) => ({
  ...EMPTY,

  open: false,
  hydrated: false,
  busy: {},
  adding: false,
  lastAddedProductId: null,
  error: null,

  hydrate: async () => {
    if (get().hydrated) return;
    await get().refresh();
  },

  refresh: async () => {
    try {
      const res = await fetch("/api/cart", { credentials: "same-origin" });
      if (!res.ok) throw new Error(String(res.status));
      const snap = await readSnapshot(res);
      set({ ...snapshotFields(snap), hydrated: true });
    } catch {
      // Cart API unavailable: render the empty state rather than blocking the UI.
      set({ ...EMPTY, hydrated: true });
    }
  },

  addItem: async (productId, quantity) => {
    set({ adding: true, error: null });
    const ok = await mutate(
      "/api/cart/items",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
      },
      (apply) => apply({ lastAddedProductId: productId }),
      set,
    );
    set({ adding: false });
    return ok;
  },

  updateQuantity: async (productId, quantity) => {
    set((state) => ({ busy: { ...state.busy, [productId]: true }, error: null }));
    const ok = await mutate(
      `/api/cart/items/${encodeURIComponent(productId)}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      },
      () => undefined,
      set,
    );
    set((state) => ({ busy: { ...state.busy, [productId]: false } }));
    return ok;
  },

  removeItem: async (productId) => {
    set((state) => ({ busy: { ...state.busy, [productId]: true }, error: null }));
    const ok = await mutate(
      `/api/cart/items/${encodeURIComponent(productId)}`,
      { method: "DELETE", credentials: "same-origin" },
      () => undefined,
      set,
    );
    set((state) => ({ busy: { ...state.busy, [productId]: false } }));
    return ok;
  },

  openCart: () => set({ open: true }),
  closeCart: () => set({ open: false }),
  clearError: () => set({ error: null }),
}));
