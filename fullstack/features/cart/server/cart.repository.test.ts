import { randomUUID } from "node:crypto";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { useTempDataDir } from "@/test/data-dir";
import { CART_TTL_SECONDS } from "../constants";
import { deleteCart, findCartItems, updateCartItems } from "./cart.repository";

let store: Awaited<ReturnType<typeof useTempDataDir>>;

beforeEach(async () => {
  store = await useTempDataDir();
});

afterEach(async () => {
  await store.cleanup();
});

const item = (productId: string, quantity = 1) => ({ productId, quantity });

describe("cart repository", () => {
  it("returns null for carts that don't exist", async () => {
    expect(await findCartItems(randomUUID())).toBeNull();
  });

  it("stores items with a timestamp", async () => {
    const id = randomUUID();
    await updateCartItems(id, () => [item("prd_001", 2)], Date.UTC(2026, 0, 1));

    expect(await findCartItems(id)).toEqual([item("prd_001", 2)]);
    expect((await store.readJson("carts.json"))[id].updatedAt).toBe("2026-01-01T00:00:00.000Z");
  });

  it("removes the cart when it becomes empty", async () => {
    const id = randomUUID();
    await updateCartItems(id, () => [item("prd_001")]);
    await updateCartItems(id, () => []);

    expect(await store.readJson("carts.json")).toEqual({});
  });

  it("drops carts older than the TTL on write", async () => {
    const stale = randomUUID();
    const fresh = randomUUID();
    const now = Date.now();

    await updateCartItems(stale, () => [item("prd_001")], now - (CART_TTL_SECONDS + 60) * 1000);
    await updateCartItems(fresh, () => [item("prd_002")], now);

    const table = await store.readJson("carts.json");
    expect(Object.keys(table)).toEqual([fresh]);
  });

  it("keeps concurrent updates to the same cart", async () => {
    const id = randomUUID();

    await Promise.all(
      ["prd_001", "prd_002", "prd_003", "prd_005", "prd_006"].map((productId) =>
        updateCartItems(id, (items) => [...items, item(productId)]),
      ),
    );

    expect(await findCartItems(id)).toHaveLength(5);
  });

  it("refuses to work with a corrupt table instead of wiping it", async () => {
    await store.writeJson("carts.json", { "not-a-uuid": { items: "nope" } });

    await expect(findCartItems(randomUUID())).rejects.toThrow();
    await expect(updateCartItems(randomUUID(), () => [item("prd_001")])).rejects.toThrow();
    expect(await store.readJson("carts.json")).toEqual({ "not-a-uuid": { items: "nope" } });
  });

  it("deletes a cart", async () => {
    const id = randomUUID();
    await updateCartItems(id, () => [item("prd_001")]);
    await deleteCart(id);

    expect(await findCartItems(id)).toBeNull();
  });
});
