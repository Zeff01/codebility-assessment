"use client";
import { useProducts } from "../context/ProductContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useProducts();

  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full border border-gray-300 py-3 px-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
      />
      <span className="absolute right-4 top-3 text-gray-400">🔍</span>
    </div>
  );
}
