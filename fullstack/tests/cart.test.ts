/**
 * Unit tests for the cart domain rules in lib/cart — the logic that actually
 * guards money and inventory. Every clamp/merge/reject rule asserted one way
 * and the other; run against the real catalog fixtures.
 */

import { afterEach, describe, expect, it, vi } from "vitest";

import {
  buildSnapshot,
  CART_COOKIE,
  CART_ERROR_CODES,
  cartCookieOptions,
  CartRequestError,
  emptyCart,
  MAX_QTY_PER_LINE,
  parseAddBody,
  parseUpdateBody,
  sanitizeRawCart,
  serializeCart,
} from "@/lib/cart";
import { formatPrice, getProduct, PRODUCTS } from "@/lib/catalog";

import type { ParsedCartLine } from "@/lib/cart";
import type { Product } from "@/lib/catalog";

const productsById = new Map<string, Product>(PRODUCTS.map((p) => [p.id, p]));
const joint = (id: string) => getProduct(id);

describe("sanitizeRawCart — the cookie is untrusted input", () => {
  it("keeps a well-formed line", () => {
    expect(
      sanitizeRawCart([{ productId: "aurora-one", quantity: 2 }], productsById),
    ).toEqual([{ productId: "aurora-one", quantity: 2 }]);
  });

  it("drops unknown SKUs (dead catalog entries)", () => {
    expect(sanitizeRawCart([{ productId: "ghost", quantity: 3 }], productsById)).toEqual([]);
  });

  it("drops non-integers, negatives and zero; clamps over-cap to the binding limit", () => {
    const raw = [
      { productId: "aurora-one", quantity: 1.5 }, // float → dropped
      { productId: "aurora-one", quantity: 0 }, // zero → dropped
      { productId: "aurora-one", quantity: -3 }, // negative → dropped
      { productId: "aurora-one", quantity: 100 }, // clamped to stock (42)
      { productId: "trail-cable", quantity: 120 }, // clamped to line cap (99, stock 120)
    ];
    expect(sanitizeRawCart(raw, productsById)).toEqual([
      { productId: "aurora-one", quantity: 42 },
      { productId: "trail-cable", quantity: 99 },
    ]);
  });

  it("merges duplicate lines instead of stacking them", () => {
    const result = sanitizeRawCart(
      [
        { productId: "aurora-one", quantity: 2 },
        { productId: "aurora-one", quantity: 3 },
      ],
      productsById,
    );
    expect(result).toEqual([{ productId: "aurora-one", quantity: 5 }]);
  });

  it("clamps merged quantities to actual stock (aurora-one has 42 units)", () => {
    const result = sanitizeRawCart(
      [
        { productId: "aurora-one", quantity: 30 },
        { productId: "aurora-one", quantity: 30 },
      ],
      productsById,
    );
    expect(result).toEqual([{ productId: "aurora-one", quantity: 42 }]);
  });

  it("keeps the per-line cap even when stock is higher (trail-cable has 120)", () => {
    const result = sanitizeRawCart([{ productId: "trail-cable", quantity: 120 }], productsById);
    expect(result).toEqual([{ productId: "trail-cable", quantity: MAX_QTY_PER_LINE }]);
  });

  it("tolerates garbage: non-array, null entries, malformed quantities", () => {
    expect(sanitizeRawCart("zzz", productsById)).toEqual([]);
    expect(sanitizeRawCart(null, productsById)).toEqual([]);
    expect(
      sanitizeRawCart([null, "x", { quantity: 2 }, { productId: "aurora-one" }, 7], productsById),
    ).toEqual([]);
  });
});

describe("buildSnapshot — totals are the server's job", () => {
  it("joins catalog data and computes cents-exact totals", () => {
    const snapshot = buildSnapshot(
      [
        { productId: "aurora-one", quantity: 2 },
        { productId: "trail-cable", quantity: 3 },
      ],
      joint,
    );

    expect(snapshot.items).toEqual([
      {
        productId: "aurora-one",
        productName: "Aurora One",
        unitPrice: 34900,
        quantity: 2,
        lineTotal: 69800,
        inStock: 42,
      },
      {
        productId: "trail-cable",
        productName: "Trail Cable",
        unitPrice: 3900,
        quantity: 3,
        lineTotal: 11700,
        inStock: 120,
      },
    ]);
    expect(snapshot.itemCount).toBe(5);
    expect(snapshot.subtotal).toBe(81500); // $815.00 in cents, no float drift
    expect(snapshot.currency).toBe("USD");
  });

  it("drops a line whose product vanished between cookie write and read", () => {
    const snapshot = buildSnapshot([{ productId: "ghost", quantity: 1 }], joint);
    expect(snapshot.items).toEqual([]);
    expect(snapshot.itemCount).toBe(0);
    expect(snapshot.subtotal).toBe(0);
  });
});

describe("serializeCart / parse round-trip", () => {
  it("emits compact id+quantity pairs in order", () => {
    const lines: ParsedCartLine[] = [
      { productId: "aurora-one", quantity: 2 },
      { productId: "trail-cable", quantity: 1 },
    ];
    const serialized = serializeCart(lines);

    expect(JSON.parse(serialized)).toEqual([
      { productId: "aurora-one", quantity: 2 },
      { productId: "trail-cable", quantity: 1 },
    ]);
    // Round-trip stays identical through the sanitizer.
    expect(sanitizeRawCart(JSON.parse(serialized), productsById)).toEqual(lines);
  });
});

describe("parseAddBody — POST /api/cart/items contract", () => {
  it("accepts a valid body and defaults quantity to 1", () => {
    expect(parseAddBody({ productId: "aurora-one" })).toEqual({ productId: "aurora-one", quantity: 1 });
    expect(parseAddBody({ productId: "trail-cable", quantity: 99 })).toEqual({
      productId: "trail-cable",
      quantity: 99,
    });
  });

  it("rejects a malformed body with 400 invalid_body", () => {
    const attempt = () => parseAddBody(null);
    const error = expectRejected(attempt);
    expect(error.status).toBe(400);
    expect(error.code).toBe(CART_ERROR_CODES.INVALID_BODY);
  });

  it("rejects quantity of 0, 200 and 1.5 with 400 invalid_quantity (adds must be ≥ 1)", () => {
    for (const quantity of [0, 200, 1.5]) {
      const attempt = () => parseAddBody({ productId: "aurora-one", quantity });
      expectRejected(attempt, CART_ERROR_CODES.INVALID_QUANTITY, 400);
    }
  });
});

describe("parseUpdateBody — PATCH contract is strict", () => {
  const product = getProduct("aurora-one");

  it("accepts quantity 0 (removes the line) and valid quantities", () => {
    expect(parseUpdateBody({ quantity: 0 }, "aurora-one", product)).toEqual({ quantity: 0 });
    expect(parseUpdateBody({ quantity: 42 }, "aurora-one", product)).toEqual({ quantity: 42 });
  });

  it("404s an unknown product before validating the body", () => {
    expectRejected(() => parseUpdateBody({ quantity: 1 }, "ghost", undefined), CART_ERROR_CODES.PRODUCT_NOT_FOUND, 404);
  });

  it("rejects negative, fractional and over-cap quantities with 400 (no silent clamp)", () => {
    for (const quantity of [-1, 2.5, MAX_QTY_PER_LINE + 1]) {
      expectRejected(
        () => parseUpdateBody({ quantity }, "aurora-one", product),
        CART_ERROR_CODES.INVALID_QUANTITY,
        400,
      );
    }
  });
});

describe("cartCookieOptions — the persistence flags", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("is httpOnly, SameSite=Lax, scoped to /, 30-day TTL", () => {
    const options = cartCookieOptions();
    expect(options.httpOnly).toBe(true);
    expect(options.sameSite).toBe("lax");
    expect(options.path).toBe("/");
    expect(options.maxAge).toBe(60 * 60 * 24 * 30);
    expect(CART_COOKIE).toBe("cart_v1");
  });

  it("turns on Secure in production, off in dev", () => {
    vi.stubEnv("NODE_ENV", "production");
    expect(cartCookieOptions().secure).toBe(true);

    vi.stubEnv("NODE_ENV", "test");
    expect(cartCookieOptions().secure).toBe(false);
  });
});

describe("emptyCart", () => {
  it("is a zeroed USD snapshot", () => {
    expect(emptyCart()).toEqual({ items: [], itemCount: 0, subtotal: 0, currency: "USD" });
  });
});

describe("money formatting edge", () => {
  it("formats cents without drift", () => {
    expect(formatPrice(34900)).toBe("$349.00");
    expect(formatPrice(81500)).toBe("$815.00");
  });
});

function expectRejected(
  attempt: () => unknown,
  code?: string,
  status?: number,
): CartRequestError {
  let error: unknown;
  try {
    attempt();
  } catch (caught) {
    error = caught;
  }
  expect(error).toBeInstanceOf(CartRequestError);
  const requestError = error as CartRequestError;
  if (code) expect(requestError.code).toBe(code);
  if (status) expect(requestError.status).toBe(status);
  return requestError;
}
