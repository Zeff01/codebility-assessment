import { getRelatedProducts } from "../services/product.service";
import type { Product } from "../types";
import { ProductGrid } from "./product-grid";

export async function RelatedProducts({ product }: { product: Pick<Product, "id" | "category"> }) {
  const related = await getRelatedProducts(product);
  if (related.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="space-y-6">
      <h2 id="related-heading" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        You may also like
      </h2>
      <ProductGrid products={related} />
    </section>
  );
}
