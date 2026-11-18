import { describe, expect, it } from "vitest";
import catalog from "@/data/products.json";
import type { Product } from "../types";
import {
  getProductBySlug,
  getProductMap,
  getProducts,
  getProductSlugs,
  getRelatedProducts,
  toSummary,
} from "./product.service";

const products = catalog as Product[];

describe("getProducts", () => {
  it("returns summaries for the whole catalog by default", async () => {
    const result = await getProducts();

    expect(result).toHaveLength(products.length);
    expect(result[0]).toEqual(toSummary(products[0]));
    expect(result[0]).not.toHaveProperty("description");
  });

  it("filters by category and respects the limit", async () => {
    const audio = await getProducts({ category: "audio" });
    expect(audio.length).toBeGreaterThan(0);
    expect(audio.every((item) => products.find((p) => p.id === item.id)?.category === "audio")).toBe(true);

    expect(await getProducts({ limit: 3 })).toHaveLength(3);
  });
});

describe("getProductBySlug", () => {
  it("finds a product", async () => {
    const product = await getProductBySlug("aurora-wireless-headphones");
    expect(product?.id).toBe("prd_001");
  });

  it("returns null for unknown slugs", async () => {
    expect(await getProductBySlug("does-not-exist")).toBeNull();
  });
});

describe("getRelatedProducts", () => {
  it("excludes the product itself and ranks the same category first", async () => {
    const current = products[0];
    const related = await getRelatedProducts(current, 4);

    expect(related).toHaveLength(4);
    expect(related.some((item) => item.id === current.id)).toBe(false);

    const categoryOf = (id: string) => products.find((p) => p.id === id)?.category;
    expect(categoryOf(related[0].id)).toBe(current.category);
  });
});

describe("getProductMap", () => {
  it("indexes products by id", async () => {
    const map = await getProductMap();
    expect(map.size).toBe(products.length);
    expect(map.get("prd_003")?.slug).toBe("orbit-smartwatch");
  });
});

describe("getProductSlugs", () => {
  it("returns every slug", async () => {
    expect(await getProductSlugs()).toEqual(products.map((p) => p.slug));
  });
});
