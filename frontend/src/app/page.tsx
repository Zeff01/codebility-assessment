"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import SkeletonCard from "@/components/SkeletonCard";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    async function load() {
      const res = await fetch(
        "https://fakestoreapi.com/products"
      );
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    load();
  }, []);

  const categories = [
    ...new Set(products.map((p) => p.category)),
  ];

  const filtered =
    category === "all"
      ? products
      : products.filter(
          (p) => p.category === category
        );

  return (
    <main>
      <Header />

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-6">
        <CategoryFilter
          categories={categories}
          active={category}
          setActive={setCategory}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map(
                (_, i) => <SkeletonCard key={i} />
              )
            : filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
        </div>
      </section>
    </main>
  );
}
