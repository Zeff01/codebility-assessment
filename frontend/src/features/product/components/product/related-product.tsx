import { ProductCard } from "@/features/product/components/product-card";
import {
  useGetProductsSuspenseQuery
} from "@/features/product/hooks/query/use-get-products-query";
import type { Product } from "@/features/product/types/product";

type RelatedProductsProps = {
	product: Product;
};

export function RelatedProducts({ product }: RelatedProductsProps) {
  const { data: allProducts = [] } = useGetProductsSuspenseQuery();
  
  let displayProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  if (displayProducts.length === 0) {
    displayProducts = allProducts
      .filter(p => p.id !== product.id)
      .slice(0, 4);
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayProducts.map((relatedProduct) => (
        <ProductCard key={relatedProduct.id} product={relatedProduct} />
      ))}
    </div>
  );

}
