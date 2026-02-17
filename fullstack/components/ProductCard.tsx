'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, openCart } from '@/store/cartSlice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product: fallbackProduct }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);

  // Get current product from Redux store (with updated stock)
  const products = useAppSelector((state) => state.products.items);
  const product = products.find((p) => p.id === fallbackProduct.id) || fallbackProduct;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.stock <= 0) return;

    setIsAdding(true);
    dispatch(addToCart({ product }));

    // Brief visual feedback
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAdding(false);

    // Show cart sidebar
    dispatch(openCart());
  };

  return (
    <Link
      id={`product-card-${product.id}`}
      href={`/products/${product.id}`}
      className="group block rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md dark:shadow-gray-900 transition-shadow overflow-hidden"
    >
      {/* Image */}
      <div id={`product-image-${product.id}`} className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-1 flex items-center gap-2">
          <span id={`product-category-${product.id}`} className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        <h3 id={`product-name-${product.id}`} className="font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div id={`product-rating-${product.id}`} className="mt-1 flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-200 dark:text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span id={`product-reviews-${product.id}`} className="text-xs text-gray-500 dark:text-gray-400">
            ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="mt-3 flex items-center justify-between">
          <span id={`product-price-${product.id}`} className="text-lg font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <button
            id={`product-add-to-cart-${product.id}`}
            onClick={handleAddToCart}
            disabled={isAdding || product.stock <= 0}
            className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            {isAdding ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Adding...
              </>
            ) : product.stock <= 0 ? (
              'Out of Stock'
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
