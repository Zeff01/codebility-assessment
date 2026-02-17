'use client';

import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import ProductCard from './ProductCard';

interface ProductsFilterProps {
  categories: string[];
}

export default function ProductsFilter({ categories }: ProductsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const products = useAppSelector((state) => state.products.items);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      {/* Categories */}
      <section id="categories-section" className="mb-8">
        <div id="categories-list" className="flex flex-wrap items-center justify-center gap-2">
          <button
            id="category-all"
            onClick={() => setSelectedCategory(null)}
            className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedCategory === null
                ? 'text-white bg-indigo-600 dark:bg-indigo-500'
                : 'text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category
                  ? 'text-white bg-indigo-600 dark:bg-indigo-500'
                  : 'text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-section">
        <div id="products-grid" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p id="no-products" className="text-center text-gray-500 dark:text-gray-400 py-8">
            No products found in this category.
          </p>
        )}
      </section>
    </>
  );
}
