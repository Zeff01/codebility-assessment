"use client";

import { useState, useEffect, useRef } from "react";

// ---- Types ----
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

// ---- Main Page ----
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Network response was not ok");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {loading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Product Card ----
function ProductCard({ product }: { product: Product }) {
  const [showDetail, setShowDetail] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowDetail(false);
      }
    };

    if (showDetail) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDetail]);

  return (
    <>
      {/* Product Card */}
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer overflow-hidden">
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-contain p-4 bg-gray-50"
          />
          <span className="absolute top-2 right-2 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
            ${product.price}
          </span>
        </div>

        <div className="p-4 flex flex-col items-center text-center">
          <h2 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
            {product.title}
          </h2>
          <button
            onClick={() => setShowDetail(true)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {showDetail && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4 animate-fade-in">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl transform transition-all duration-300 scale-95 animate-scale-up"
          >
            <button
              onClick={() => setShowDetail(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-2xl font-bold"
            >
              ×
            </button>

            <img
              src={product.image}
              alt={product.title}
              className="h-60 mx-auto object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-green-600 font-bold text-xl mb-1">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        </div>
      )}
    </>
  );
}
