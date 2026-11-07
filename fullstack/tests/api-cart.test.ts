/**
 * Route-handler integration tests for the cart API. The handlers run as real
 * code paths — only `next/headers` cookies() is replaced with an in-memory
 * cookie store, mirroring what a browser would send. This pins the whole
 * status/contract matrix (200/201/400/404/409) without needing a live server.
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import type { Mock } from "vitest";

vi.mock("next/headers", () => ({ cookies: vi.fn() }));

import { cookies } from "next/headers";

import { GET as getCart } from "@/app/api/cart/route";
import { POST as addToCart } from "@/app/api/cart/items/route";
import { DELETE as removeFromCart, PATCH as updateCartItem } from "@/app/api/cart/items/[productId]/route";

const cookiesMock = cookies as unknown as Mock;

type Call = { name: string; value: string; options?: Record<string, unknown> };

let jar: Map<string, string>;
let cookieSets: Call[];

function useCookieStore(initialCookie?: string) {
  jar = new Map();
  cookieSets = [];
  if (initialCookie) jar.set("cart_v1", initialCookie);
  cookiesMock.mockResolvedValue({
    get: (name: string) => (jar.has(name) ? { name, value: jar.get(name) } : undefined),
    set: (name: string, value: string, options?: Record<string, unknown>) => {
      jar.set(name, value);
      cookieSets.push({ name, value, options });
    },
  });
}

const request = (url: string, init?: RequestInit) => new Request(`http://localhost:3000${url}`, init);
const jsonRequest = (url: string, body: unknown, init?: RequestInit) =>
  request(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    ...init,
  });

const ctx = (productId: string) => ({ params: Promise.resolve({ productId }) });

beforeEach(() => {
  cookiesMock.mockReset();
});

describe("GET /api/cart", () => {
  it("200 + no-store for a first visit", async () => {
    useCookieStore();
    const response = await getCart();
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ items: [], itemCount: 0, subtotal: 0, currency: "USD" });
    expect(response.headers.get("cache-control")).toBe("no-store");
  });

  it("repairs a dirty cookie into an empty cart instead of erroring", async () => {
    useCookieStore("zzz");
    const response = await getCart();
    expect(response.status).toBe(200);
    expect((await response.json()).itemCount).toBe(0);
  });

  it("returns the sanitized snapshot from the cookie", async () => {
    useCookieStore('[{"productId":"aurora-one","quantity":2}]');
    const snapshot = await (await getCart()).json();
    expect(snapshot.items).toHaveLength(1);
    expect(snapshot.itemCount).toBe(2);
    expect(snapshot.subtotal).toBe(69800);
  });
});

describe("POST /api/cart/items", () => {
  it("201 on a valid add; cookie is rewritten with httpOnly flag", async () => {
    useCookieStore();
    const response = await addToCart(jsonRequest("/api/cart/items", { productId: "aurora-one", quantity: 2 }));
    expect(response.status).toBe(201);

    const snapshot = await response.json();
    expect(snapshot.itemCount).toBe(2);
    expect(snapshot.subtotal).toBe(69800);

    expect(jar.get("cart_v1")).toBe(JSON.stringify([{ productId: "aurora-one", quantity: 2 }]));
    const persisted = cookieSets.find((call) => call.name === "cart_v1");
    expect(persisted?.options).toMatchObject({ httpOnly: true, sameSite: "lax", path: "/" });
  });

  it("merges a repeat add into the same line (2 + 1 = qty 3, subtotal 104700)", async () => {
    useCookieStore(JSON.stringify([{ productId: "aurora-one", quantity: 2 }]));
    const response = await addToCart(jsonRequest("/api/cart/items", { productId: "aurora-one", quantity: 1 }));
    expect(response.status).toBe(201);
    const snapshot = await response.json();
    expect(snapshot.items).toHaveLength(1);
    expect(snapshot.items[0].quantity).toBe(3);
    expect(snapshot.subtotal).toBe(104700);
  });

  it("caps a merged add at the 99-unit per-line limit even when stock is 120", async () => {
    useCookieStore();
    await addToCart(jsonRequest("/api/cart/items", { productId: "trail-cable", quantity: 99 }));
    const response = await addToCart(jsonRequest("/api/cart/items", { productId: "trail-cable", quantity: 99 }));
    const snapshot = await response.json();
    expect(snapshot.items[0].quantity).toBe(99); // NOT 120 or 198 — stock clamp + line cap
  });

  it("404 product_not_found on an unknown product", async () => {
    useCookieStore();
    const response = await addToCart(jsonRequest("/api/cart/items", { productId: "ghost", quantity: 1 }));
    expect(response.status).toBe(404);
    expect((await response.json()).error).toBe("product_not_found");
  });

  it("409 out_of_stock for a sold-out product", async () => {
    useCookieStore();
    const response = await addToCart(jsonRequest("/api/cart/items", { productId: "drift-buds", quantity: 1 }));
    expect(response.status).toBe(409);
    expect((await response.json()).error).toBe("out_of_stock");
  });

  it("400 invalid_quantity when quantity > 99", async () => {
    useCookieStore();
    const response = await addToCart(jsonRequest("/api/cart/items", { productId: "trail-cable", quantity: 200 }));
    expect(response.status).toBe(400);
    expect((await response.json()).error).toBe("invalid_quantity");
  });

  it("400 invalid_body on malformed JSON", async () => {
    useCookieStore();
    const response = await addToCart(request("/api/cart/items", { method: "POST", body: "not-json" }));
    expect(response.status).toBe(400);
    expect((await response.json()).error).toBe("invalid_body");
  });
});

describe("PATCH /api/cart/items/:id", () => {
  const seed = JSON.stringify([{ productId: "aurora-one", quantity: 3 }]);

  it("200 and removes the line on quantity 0", async () => {
    useCookieStore(seed);
    const response = await updateCartItem(jsonRequest("/api/cart/items/aurora-one", { quantity: 0 }), ctx("aurora-one"));
    expect(response.status).toBe(200);
    const snapshot = await response.json();
    expect(snapshot.items).toEqual([]);
    expect(jar.get("cart_v1")).toBe("[]");
  });

  it("400 with the stock limit when quantity exceeds available stock (42)", async () => {
    useCookieStore(seed);
    const response = await updateCartItem(jsonRequest("/api/cart/items/aurora-one", { quantity: 50 }), ctx("aurora-one"));
    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.error).toBe("invalid_quantity");
    expect(body.detail).toContain("stock limit (42)");
  });

  it("400 on over-cap quantities (strict — no silent clamp)", async () => {
    useCookieStore(seed);
    const response = await updateCartItem(jsonRequest("/api/cart/items/aurora-one", { quantity: 100 }), ctx("aurora-one"));
    expect(response.status).toBe(400);
    expect((await response.json()).error).toBe("invalid_quantity");
  });

  it("404 item_not_in_cart when the product is not in the cart", async () => {
    useCookieStore(seed);
    const response = await updateCartItem(jsonRequest("/api/cart/items/loop-stand", { quantity: 1 }), ctx("loop-stand"));
    expect(response.status).toBe(404);
    expect((await response.json()).error).toBe("item_not_in_cart");
  });
});

describe("DELETE /api/cart/items/:id", () => {
  const seed = JSON.stringify([
    { productId: "aurora-one", quantity: 3 },
    { productId: "trail-cable", quantity: 1 },
  ]);

  it("200 with the post-removal snapshot", async () => {
    useCookieStore(seed);
    const response = await removeFromCart(request("/api/cart/items/aurora-one", { method: "DELETE" }), ctx("aurora-one"));
    expect(response.status).toBe(200);
    const snapshot = await response.json();
    expect(snapshot.itemCount).toBe(1);
    expect(snapshot.items[0].productId).toBe("trail-cable");
  });

  it("404 product_not_found on an unknown product", async () => {
    useCookieStore(seed);
    const response = await removeFromCart(request("/api/cart/items/ghost", { method: "DELETE" }), ctx("ghost"));
    expect(response.status).toBe(404);
    expect((await response.json()).error).toBe("product_not_found");
  });

  it("404 item_not_in_cart for a known product that isn't in the cart", async () => {
    useCookieStore(seed);
    const response = await removeFromCart(request("/api/cart/items/loop-stand", { method: "DELETE" }), ctx("loop-stand"));
    expect(response.status).toBe(404);
    expect((await response.json()).error).toBe("item_not_in_cart");
  });
});
