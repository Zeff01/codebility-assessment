/**
 * Server-side cart core.
 *
 * Persistence choice: the cart lives in an httpOnly, SameSite=Lax cookie.
 * Reasons (documented in the README as an architecture decision):
 *   - the server stays authoritative: the client can only ever *request*
 *     mutations, snapshots are recomputed from the catalog on every call, so
 *     a tampered client cannot produce a discounted total;
 *   - it survives reloads, tabs and restarts like localStorage would, but
 *     XSS cannot read it, and no local storage schema migration is needed;
 *   - the snapshot is small (a handful of ids + counts), which keeps it far
 *     under browser cookie limits.
 *
 * Only route handlers and other server contexts may import this module.
 */

import type { Product } from "@/lib/catalog";
import { CURRENCY } from "@/lib/catalog";

const CART_COOKIE = "cart_v1";
export const MAX_QTY_PER_LINE = 99;
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

export type CartLine = {
  productId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
  /** Units currently in stock, for client-side clamp hints. */
  inStock: number;
};

export type CartSnapshot = {
  items: CartLine[];
  itemCount: number;
  subtotal: number;
  currency: string;
};

export type ParsedCartLine = {
  productId: string;
  quantity: number;
};

export const CART_ERROR_CODES = {
  INVALID_BODY: "invalid_body",
  INVALID_QUANTITY: "invalid_quantity",
  PRODUCT_NOT_FOUND: "product_not_found",
  ITEM_NOT_IN_CART: "item_not_in_cart",
} as const;

export class CartRequestError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    readonly detail: string,
  ) {
    super(detail);
  }
}

export const emptyCart = (currency: string = CURRENCY): CartSnapshot => ({
  items: [],
  itemCount: 0,
  subtotal: 0,
  currency,
});

/** Compact serialization for the cookie: ids + quantities only. */
export function serializeCart(lines: readonly ParsedCartLine[]): string {
  return JSON.stringify(lines.map(({ productId, quantity }) => ({ productId, quantity })));
}

export function cartCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
    secure: process.env.NODE_ENV === "production",
  };
}

export { CART_COOKIE };

/**
 * Parse + sanitize whatever is in the cookie. The cookie is client-supplied
 * state, so everything is re-validated from scratch: unknown SKUs are dropped,
 * quantities are forced to integer-safe bounds and lines are de-duplicated.
 */
export function sanitizeRawCart(raw: unknown, productsById: ReadonlyMap<string, Product>): ParsedCartLine[] {
  if (!Array.isArray(raw)) return [];

  const byId = new Map<string, number>();

  for (const entry of raw) {
    if (typeof entry !== "object" || entry === null) continue;
    const { productId, quantity } = entry as Record<string, unknown>;
    if (typeof productId !== "string") continue;
    const product = productsById.get(productId);
    if (!product) continue; // dead/unknown SKU — drop the line entirely

    if (typeof quantity !== "number" || !Number.isInteger(quantity) || quantity < 1) continue;

    // Over-cap quantities from a dirty cookie are clamped to the binding
    // limit (stock or per-line cap) rather than dropped, mirroring how
    // over-stock adds are treated on the API surface.
    byId.set(
      productId,
      Math.min((byId.get(productId) ?? 0) + quantity, product.stock, MAX_QTY_PER_LINE),
    );
  }

  return [...byId.entries()].map(([productId, quantity]) => ({ productId, quantity }));
}

export function buildSnapshot(lines: readonly ParsedCartLine[], productOf: (id: string) => Product | undefined): CartSnapshot {
  const items: CartLine[] = [];
  for (const line of lines) {
    const product = productOf(line.productId);
    if (!product) continue;
    items.push({
      productId: product.id,
      productName: product.name,
      unitPrice: product.price,
      quantity: line.quantity,
      lineTotal: product.price * line.quantity,
      inStock: product.stock,
    });
  }

  return {
    items,
    itemCount: items.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: items.reduce((sum, line) => sum + line.lineTotal, 0),
    currency: CURRENCY,
  };
}

function toSafeQuantity(value: unknown): number {
  if (typeof value !== "number" || !Number.isInteger(value)) return 0;
  if (value < 1 || value > MAX_QTY_PER_LINE) return 0;
  return value;
}

/**
 * Parse a mutation body; throws a typed error route handlers translate into
 * a response. Accepts only `{productId, quantity}` for adds (quantity must be
 * ≥ 1) and `{quantity}` for updates (must be ≥ 0; 0 removes the line).
 */
export function parseAddBody(body: unknown): { productId: string; quantity: number } {
  if (typeof body !== "object" || body === null || typeof (body as { productId?: unknown }).productId !== "string") {
    throw new CartRequestError(400, CART_ERROR_CODES.INVALID_BODY, "`productId` (string) is required.");
  }

  const { productId, quantity } = body as { productId: string; quantity: unknown };
  const qty = toSafeQuantity(quantity ?? 1); // default: add a single unit

  if (!qty) {
    throw new CartRequestError(
      400,
      CART_ERROR_CODES.INVALID_QUANTITY,
      `\`quantity\` must be an integer between 1 and ${MAX_QTY_PER_LINE}.`,
    );
  }

  return { productId, quantity: qty };
}

export function parseUpdateBody(body: unknown, productId: string, product: Product | undefined): { quantity: number } {
  if (!product) {
    throw new CartRequestError(404, CART_ERROR_CODES.PRODUCT_NOT_FOUND, `Unknown product "${productId}".`);
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !Number.isInteger((body as { quantity?: unknown }).quantity)
  ) {
    throw new CartRequestError(
      400,
      CART_ERROR_CODES.INVALID_QUANTITY,
      `\`quantity\` must be an integer between 0 and ${MAX_QTY_PER_LINE} (0 removes the line).`,
    );
  }

  const { quantity } = body as { quantity: number };

  if (quantity < 0 || quantity > MAX_QTY_PER_LINE) {
    throw new CartRequestError(
      400,
      CART_ERROR_CODES.INVALID_QUANTITY,
      `\`quantity\` must be an integer between 0 and ${MAX_QTY_PER_LINE} (0 removes the line).`,
    );
  }

  return { quantity };
}
