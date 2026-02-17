'use client';

import { useAppSelector } from '@/store/hooks';
import { Product } from '@/types';
import AddToCartButton from './AddToCartButton';

interface ProductDetailsProps {
  productId: string;
  fallbackProduct: Product;
}

export default function ProductDetails({ productId, fallbackProduct }: ProductDetailsProps) {
  const products = useAppSelector((state) => state.products.items);
  const product = products.find((p) => p.id === productId) || fallbackProduct;

  return (
    <>
      {/* Stock Status */}
      <div id="product-stock-status" className="mt-6">
        {product.stock > 0 ? (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span id="stock-in-stock" className="text-sm text-green-600 dark:text-green-400 font-medium">
              In Stock
            </span>
            <span id="stock-count" className="text-sm text-gray-500 dark:text-gray-400">
              ({product.stock} available)
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span id="stock-out-of-stock" className="text-sm text-red-600 dark:text-red-400 font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Add to Cart - Client Component */}
      <div className="mt-8">
        <AddToCartButton product={product} />
      </div>
    </>
  );
}
