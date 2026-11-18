import type { ProductSummary } from "@/features/products/types";

export function makeProductSummary(overrides: Partial<ProductSummary> = {}): ProductSummary {
  return {
    id: "prd_test",
    slug: "test-product",
    name: "Test Product",
    brand: "Acme",
    price: 50,
    rating: 4.5,
    stock: 10,
    image: { src: "https://picsum.photos/seed/test/800/800", alt: "Test product" },
    ...overrides,
  };
}
