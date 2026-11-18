import type { ProductSummary } from "../types";
import { ProductCard, type ImagePriority } from "./product-card";

type ProductGridProps = {
  products: ProductSummary[];
  // Number of images likely above the fold. Only the first is preloaded,
  // since on mobile it's the only one in view and preloading more competes with it.
  eagerCount?: number;
  headingLevel?: "h2" | "h3";
};

function imagePriority(index: number, eagerCount: number): ImagePriority {
  if (index >= eagerCount) return "lazy";
  return index === 0 ? "preload" : "eager";
}

export function ProductGrid({ products, eagerCount = 0, headingLevel = "h3" }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="text-muted">No products found.</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            imagePriority={imagePriority(index, eagerCount)}
            headingLevel={headingLevel}
          />
        </li>
      ))}
    </ul>
  );
}
