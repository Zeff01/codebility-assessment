'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/types';

interface SearchBarProps {
  initialProducts: Product[];
}

export default function SearchBar({ initialProducts }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return initialProducts;
    }

    const lowerCaseSearch = searchTerm.toLowerCase();
    
    return initialProducts.filter(product =>
      product.title.toLowerCase().includes(lowerCaseSearch) ||
      product.category.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchTerm, initialProducts]);

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products by name or category..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 shadow-sm transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No products found for "{searchTerm}".
          </p>
      )}
    </>
  );
}