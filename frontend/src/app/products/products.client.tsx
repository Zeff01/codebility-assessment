"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/motion";
import { useRouter, useSearchParams } from "next/navigation";
import { Select } from "@/components/ui/select";
import { FaTshirt, FaGem, FaBolt, FaFemale, FaMale, FaFilter } from "react-icons/fa";

export default function ProductsClient({ initialProducts }: { initialProducts: Product[] }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string>("all");
  const [sort, setSort] = React.useState<string>("featured");
  const router = useRouter();
  const searchParams = useSearchParams();

  // initialize from URL
  React.useEffect(() => {
    const q = searchParams.get("q") ?? "";
    const c = searchParams.get("c") ?? "all";
    const s = searchParams.get("s") ?? "featured";
    setQuery(q);
    setCategory(c);
    setSort(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // sync to URL
  React.useEffect(() => {
    const sp = new URLSearchParams();
    if (query) sp.set("q", query);
    if (category && category !== "all") sp.set("c", category);
    if (sort && sort !== "featured") sp.set("s", sort);
    const qs = sp.toString();
    router.replace(`/products${qs ? `?${qs}` : ""}`);
  }, [query, category, sort, router]);

  const categories = React.useMemo(() => {
    return Array.from(new Set(initialProducts.map((p) => p.category)));
  }, [initialProducts]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let base = initialProducts;
    if (category !== "all") base = base.filter((p) => p.category === category);
    if (sort === "price-asc") base = [...base].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") base = [...base].sort((a, b) => b.price - a.price);
    if (!q) return base;
    return base.filter((p) => p.title.toLowerCase().includes(q));
  }, [initialProducts, query, category, sort]);

  return (
    <div className="mx-auto max-w-7xl w-full px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-16 h-fit lg:col-span-3">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium"><FaFilter /> Filters</div>
        <div className="space-y-4 p-4 rounded-xl border border-black/10 dark:border-white/10">
          <div className="space-y-2">
            <label htmlFor="search" className="text-sm font-medium">Search</label>
            <Input id="search" placeholder="Search products" value={query} onChange={(e) => setQuery(e.target.value)} />
            <Button variant="outline" onClick={() => setQuery("")} className="w-full">Clear</Button>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Category</div>
            <div className="flex flex-wrap gap-2">
              <button aria-pressed={category==="all"} onClick={() => setCategory("all")} className={`px-3 py-2 rounded-full text-sm border flex items-center gap-2 ${category==="all"?"bg-black text-white dark:bg-white dark:text-black border-transparent":"bg-transparent text-foreground hover:bg-black/5 dark:hover:bg-white/10"}`}>All</button>
              {categories.map((c) => {
                const icon = c.includes("women") ? <FaFemale /> : c.includes("men") ? <FaMale /> : c.includes("elect") ? <FaBolt /> : c.includes("jewel") ? <FaGem /> : <FaTshirt />;
                return (
                  <button key={c} aria-pressed={category===c} onClick={() => setCategory(c)} className={`px-3 py-2 rounded-full text-sm border flex items-center gap-2 ${category===c?"bg-black text-white dark:bg-white dark:text-black border-transparent":"bg-transparent text-foreground hover:bg-black/5 dark:hover:bg-white/10"}`}>{icon}<span className="capitalize">{c}</span></button>
                );
              })}
            </div>
          </div>
          <div className="space-y-2 pt-3 border-t border-black/10 dark:border-white/10">
            <label className="text-sm font-medium" htmlFor="sort">Sort</label>
            <Select id="sort" value={sort} onChange={(e) => setSort(e.target.value)} className="w-full">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </Select>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="lg:col-span-9">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Collection</h2>
          <p className="text-foreground/70 mt-1 text-sm md:text-base">Handpicked pieces that define modern luxury and timeless style.</p>
        </motion.div>

      {filtered.length === 0 && (
        <div className="text-center text-foreground/70 border border-black/10 dark:border-white/10 rounded-md p-10">No products match your filters.</div>
      )}

      {filtered.length > 0 && (
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <motion.div key={p.id} variants={slideUp} initial="hidden" animate="visible" transition={{ delay: idx * 0.04 }}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="font-medium truncate text-sm md:text-base" title={p.title}>{p.title}</div>
              </CardHeader>
              <CardContent>
                <Link href={`/products/${p.id}`} className="block cursor-pointer">
                  <div className="relative aspect-square w-full mb-3">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain rounded-md bg-black/5 dark:bg-white/10"
                    />
                  </div>
                </Link>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">${p.price.toFixed(2)}</div>
                  <Link href={`/products/${p.id}`}>
                    <Button size="sm">View</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
    </div>
  );
}


