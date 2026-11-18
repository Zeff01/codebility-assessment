import "server-only";

import { readTable, updateTable } from "@/lib/db/json-store";
import { CART_TTL_SECONDS, MAX_STORED_CARTS } from "../constants";
import { cartTableSchema } from "../schemas";
import type { StoredCartItem } from "../types";

const TABLE = "carts";

type CartTable = Record<string, { items: StoredCartItem[]; updatedAt: string }>;

// A corrupt table throws (500) rather than silently resetting every customer's cart.
const parseTable = (raw: unknown): CartTable => cartTableSchema.parse(raw ?? {});

function prune(table: CartTable, now: number): CartTable {
  const cutoff = now - CART_TTL_SECONDS * 1000;
  const live = Object.entries(table)
    .filter(([, cart]) => Date.parse(cart.updatedAt) > cutoff)
    .sort(([, a], [, b]) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
    .slice(0, MAX_STORED_CARTS);

  return Object.fromEntries(live);
}

export async function findCartItems(cartId: string): Promise<StoredCartItem[] | null> {
  const table = await readTable(TABLE, parseTable);
  return table[cartId]?.items ?? null;
}

// Applies `change` to the stored items inside the table lock. Throwing from `change`
// aborts without writing. An empty result removes the cart.
export function updateCartItems(
  cartId: string,
  change: (items: StoredCartItem[]) => StoredCartItem[],
  now = Date.now(),
): Promise<StoredCartItem[]> {
  return updateTable(TABLE, parseTable, (table) => {
    const items = change(table[cartId]?.items ?? []);
    const next = { ...table };

    if (items.length === 0) {
      delete next[cartId];
    } else {
      next[cartId] = { items, updatedAt: new Date(now).toISOString() };
    }

    return { data: prune(next, now), result: items };
  });
}

export function deleteCart(cartId: string): Promise<void> {
  return updateTable(TABLE, parseTable, (table) => {
    const next = { ...table };
    delete next[cartId];
    return { data: next, result: undefined };
  });
}
