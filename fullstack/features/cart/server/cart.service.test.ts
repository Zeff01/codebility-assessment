import { randomUUID } from "node:crypto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ApiError } from "@/lib/api";
import { createCookieStore, type TestCookieStore } from "@/test/cookie-store";
import { useTempDataDir } from "@/test/data-dir";
import { CART_COOKIE, MAX_CART_LINES } from "../constants";
import { addItem, clearCart, getCart, removeItem, updateItem } from "./cart.service";

let cookieStore: TestCookieStore;
let store: Awaited<ReturnType<typeof useTempDataDir>>;

vi.mock("next/headers", () => ({
  cookies: async () => cookieStore,
}));

async function seedCart(items: { productId: string; quantity: number }[]) {
  const id = randomUUID();
  await store.writeJson("carts.json", { [id]: { items, updatedAt: new Date().toISOString() } });
  cookieStore.values.set(CART_COOKIE, id);
  return id;
}

async function storedItems() {
  const id = cookieStore.values.get(CART_COOKIE);
  if (!id) return null;
  const table = await store.readJson("carts.json");
  return table[id]?.items ?? null;
}

async function expectApiError(promise: Promise<unknown>, status: number) {
  const error = await promise.catch((e: unknown) => e);
  expect(error).toBeInstanceOf(ApiError);
  expect((error as ApiError).status).toBe(status);
}

beforeEach(async () => {
  cookieStore = createCookieStore();
  store = await useTempDataDir();
});

afterEach(async () => {
  await store.cleanup();
});

describe("getCart", () => {
  it("returns an empty cart without creating anything", async () => {
    const cart = await getCart();

    expect(cart.lines).toEqual([]);
    expect(cookieStore.setCalls).toEqual([]);
  });

  it("ignores cookies that aren't a known cart id", async () => {
    cookieStore.values.set(CART_COOKIE, "../../etc/passwd");
    expect((await getCart()).lines).toEqual([]);

    cookieStore.values.set(CART_COOKIE, randomUUID());
    expect((await getCart()).lines).toEqual([]);
  });

  it("prices lines from the catalog", async () => {
    await seedCart([{ productId: "prd_001", quantity: 2 }]);

    const cart = await getCart();
    expect(cart.lines[0].product.price).toBe(249);
    expect(cart.subtotal).toBe(498);
  });

  it("drops unknown and out of stock products and clamps quantity to stock", async () => {
    await seedCart([
      { productId: "prd_999", quantity: 1 },
      { productId: "prd_004", quantity: 1 },
      { productId: "prd_007", quantity: 9 },
    ]);

    const cart = await getCart();
    expect(cart.lines).toHaveLength(1);
    expect(cart.lines[0]).toMatchObject({ productId: "prd_007", quantity: 5 });
  });
});

describe("addItem", () => {
  it("creates a cart, stores it server-side and sets an id-only cookie", async () => {
    const cart = await addItem({ productId: "prd_001", quantity: 2 });
    const { value, options } = cookieStore.setCalls[0];

    expect(cart.itemCount).toBe(2);
    expect(value).toMatch(/^[0-9a-f-]{36}$/);
    expect(options).toMatchObject({ httpOnly: true, sameSite: "lax", path: "/" });
    expect(await storedItems()).toEqual([{ productId: "prd_001", quantity: 2 }]);
  });

  it("issues a new id instead of trusting an unknown one from the client", async () => {
    const forged = randomUUID();
    cookieStore.values.set(CART_COOKIE, forged);

    await addItem({ productId: "prd_001", quantity: 1 });

    expect(cookieStore.values.get(CART_COOKIE)).not.toBe(forged);
    expect(Object.keys(await store.readJson("carts.json"))).not.toContain(forged);
  });

  it("merges quantities for a product already in the cart", async () => {
    await seedCart([{ productId: "prd_001", quantity: 2 }]);
    await addItem({ productId: "prd_001", quantity: 3 });

    expect(await storedItems()).toEqual([{ productId: "prd_001", quantity: 5 }]);
  });

  it("doesn't lose concurrent adds to the same cart", async () => {
    await seedCart([{ productId: "prd_001", quantity: 1 }]);

    await Promise.all([1, 2, 3, 4].map(() => addItem({ productId: "prd_001", quantity: 1 })));

    expect(await storedItems()).toEqual([{ productId: "prd_001", quantity: 5 }]);
  });

  it("rejects unknown products with 404", async () => {
    await expectApiError(addItem({ productId: "prd_999", quantity: 1 }), 404);
  });

  it("rejects out of stock products with 409", async () => {
    await expectApiError(addItem({ productId: "prd_004", quantity: 1 }), 409);
  });

  it("rejects quantities above available stock and leaves the cart unchanged", async () => {
    await seedCart([{ productId: "prd_007", quantity: 4 }]);

    await expectApiError(addItem({ productId: "prd_007", quantity: 2 }), 409);
    expect(await storedItems()).toEqual([{ productId: "prd_007", quantity: 4 }]);
  });

  it("limits the number of distinct products", async () => {
    await seedCart(
      Array.from({ length: MAX_CART_LINES }, (_, index) => ({ productId: `prd_x${index}`, quantity: 1 })),
    );

    await expectApiError(addItem({ productId: "prd_001", quantity: 1 }), 409);
  });
});

describe("updateItem", () => {
  it("sets the quantity", async () => {
    await seedCart([{ productId: "prd_001", quantity: 1 }]);
    const cart = await updateItem("prd_001", 4);

    expect(cart.lines[0].quantity).toBe(4);
    expect(cart.subtotal).toBe(996);
  });

  it("returns 404 without a cart or when the item isn't in it", async () => {
    await expectApiError(updateItem("prd_001", 1), 404);

    await seedCart([{ productId: "prd_005", quantity: 1 }]);
    await expectApiError(updateItem("prd_001", 1), 404);
  });

  it("returns 409 when quantity exceeds stock", async () => {
    await seedCart([{ productId: "prd_007", quantity: 1 }]);
    await expectApiError(updateItem("prd_007", 6), 409);
  });
});

describe("removeItem", () => {
  it("removes the line", async () => {
    await seedCart([
      { productId: "prd_001", quantity: 1 },
      { productId: "prd_005", quantity: 1 },
    ]);

    const cart = await removeItem("prd_001");
    expect(cart.lines.map((line) => line.productId)).toEqual(["prd_005"]);
  });

  it("deletes the stored cart and cookie when the cart becomes empty", async () => {
    await seedCart([{ productId: "prd_001", quantity: 1 }]);
    await removeItem("prd_001");

    expect(await store.readJson("carts.json")).toEqual({});
    expect(cookieStore.values.has(CART_COOKIE)).toBe(false);
  });

  it("returns 404 for items that are not in the cart", async () => {
    await expectApiError(removeItem("prd_001"), 404);
  });
});

describe("clearCart", () => {
  it("empties the cart", async () => {
    await seedCart([{ productId: "prd_001", quantity: 1 }]);
    const cart = await clearCart();

    expect(cart.lines).toEqual([]);
    expect(await store.readJson("carts.json")).toEqual({});
    expect(cookieStore.values.has(CART_COOKIE)).toBe(false);
  });
});
