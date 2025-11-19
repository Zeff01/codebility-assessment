"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<Product | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus("loading");
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = (await response.json()) as Product[];
        setProducts(data);
        setStatus("idle");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const group = new Set(products.map((item) => item.category));
    return ["all", ...Array.from(group)];
  }, [products]);

  const filtered = useMemo(() => {
    const lowerQuery = search.trim().toLowerCase();
    return products.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesSearch =
        !lowerQuery ||
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery);
      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/70 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Assessment</p>
            <h1 className="text-2xl font-bold">Product Explorer</h1>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="w-full sm:w-64 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-2 ring-transparent transition focus:ring-blue-500 focus:border-blue-500"
              aria-label="Search products"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-2 ring-transparent transition focus:ring-blue-500 focus:border-blue-500"
              aria-label="Filter by category"
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option === "all"
                    ? "All categories"
                    : option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-14 pt-8">
        {status === "loading" ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-3 h-40 rounded-lg bg-slate-200" />
                <div className="mb-2 h-4 rounded bg-slate-200 w-3/4" />
                <div className="h-4 rounded bg-slate-200 w-1/2" />
              </div>
            ))}
          </div>
        ) : status === "error" ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            Something went wrong while loading products. Please try again later.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelected(product)}
                className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="relative flex items-center justify-center rounded-lg bg-slate-50 p-6 h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain transition duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="line-clamp-2 text-base font-semibold text-slate-900">
                      {product.title}
                    </h2>
                    <span className="whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                      {formatCurrency(product.price)}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm text-slate-600">
                    {product.description}
                  </p>
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {product.category}
                  </span>
                </div>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-slate-500">
                No products match your search.
              </p>
            )}
          </div>
        )}
      </main>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-20 flex items-end justify-center bg-black/40 px-4 pb-6 pt-16 sm:items-center"
          onClick={() => setSelected(null)}
        >
          <article
            className="relative max-w-3xl w-full rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close details"
            >
              ✕
            </button>
            <div className="grid gap-6 p-6 sm:grid-cols-[1.2fr_1fr] sm:p-8">
              <div className="flex items-center justify-center rounded-lg bg-slate-50 p-6 h-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      {selected.category}
                    </p>
                    <h2 className="text-2xl font-bold leading-tight text-slate-900">
                      {selected.title}
                    </h2>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                    {formatCurrency(selected.price)}
                  </span>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">
                  {selected.description}
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="font-semibold text-slate-800">Shipping</p>
                    <p>Free on orders over $50</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="font-semibold text-slate-800">Return</p>
                    <p>30-day return policy</p>
                  </div>
                </div>
                <button className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
