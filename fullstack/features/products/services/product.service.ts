import { cacheLife, cacheTag } from "next/cache";
import { readTable } from "@/lib/db/json-store";
import { catalogSchema } from "../schemas";
import type { Product, ProductQuery, ProductSummary } from "../types";

const parseCatalog = (raw: unknown) => catalogSchema.parse(raw ?? []);

async function getCatalog(): Promise<Product[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("products");

  // Validated on read so a bad edit to products.json fails loudly instead of rendering broken data.
  return readTable("products", parseCatalog);
}

export function toSummary(product: Product): ProductSummary {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    brand: product.brand,
    price: product.price,
    compareAtPrice: product.compareAtPrice,
    rating: product.rating,
    stock: product.stock,
    image: product.images[0],
  };
}

export async function getProducts(query: ProductQuery = {}): Promise<ProductSummary[]> {
  const catalog = await getCatalog();
  const filtered = query.category
    ? catalog.filter((product) => product.category === query.category)
    : catalog;

  return filtered.slice(0, query.limit).map(toSummary);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const catalog = await getCatalog();
  return catalog.find((product) => product.slug === slug) ?? null;
}

export async function getProductMap(): Promise<Map<string, Product>> {
  const catalog = await getCatalog();
  return new Map(catalog.map((product) => [product.id, product]));
}

export async function getRelatedProducts(
  product: Pick<Product, "id" | "category">,
  limit = 4,
): Promise<ProductSummary[]> {
  const catalog = await getCatalog();
  const candidates = catalog.filter((item) => item.id !== product.id);
  const ranked = [
    ...candidates.filter((item) => item.category === product.category),
    ...candidates.filter((item) => item.category !== product.category),
  ];

  return ranked.slice(0, limit).map(toSummary);
}

export async function getProductSlugs(): Promise<string[]> {
  const catalog = await getCatalog();
  return catalog.map((product) => product.slug);
}
