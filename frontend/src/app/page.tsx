"use client";

import ProductCard from "@/components/ProductCard";
import { ProductCardLoader } from "@/components/ProductCardLoader";
import SearchBar from "@/components/SearchBar";
import { useProducts } from "@/context/ProductContext";

export default function Home() {
  const { products, loading, error, searchTerm } = useProducts();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-6">
      <SearchBar />

      <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <ProductCardLoader key={idx} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>

      {filteredProducts.length === 0 && !loading && (
        <p className="text-center text-gray-500 mt-20">
          No products found. Try a different search term.
        </p>
      )}
    </main>
  );
}
