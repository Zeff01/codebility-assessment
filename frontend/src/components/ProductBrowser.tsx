"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { useCart } from "@/components/CartProvider";
import Image from "next/image";

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export default function ProductBrowser({ products }: { products: Product[] }) {
  const { add } = useCart();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category))).sort();
    return ["all", ...unique];
  }, [products]);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return products.filter((p) => {
      const matchesQuery =
        q.length === 0 ||
        normalize(p.title).includes(q) ||
        normalize(p.category).includes(q);

      const matchesCategory = category === "all" || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  return (
    <section className="panel">
      <div className="controls">
        <input
          className="input"
          placeholder="Search products…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search products"
        />

        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All categories" : c}
            </option>
          ))}
        </select>

        <span className="badge">
          Showing <b>{filtered.length}</b> / {products.length}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="stateBox">
          <div style={{ fontWeight: 800 }}>No results found</div>
          <div className="muted">Try another keyword or category.</div>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <div key={p.id} className="card">
              <Link href={`/product/${p.id}`}>
                <div className="cardImgWrap">
                  <Image className="cardImg" src={p.image} alt={p.title} width={220} height={220} />
                </div>
              </Link>

              <div className="cardBody">
                <Link href={`/product/${p.id}`} className="title">
                  {p.title}
                </Link>

                <div className="row">
                  <div className="price">${p.price.toFixed(2)}</div>
                  <div className="category">{p.category}</div>
                </div>

                <button className="buttonPrimary" onClick={() => add(p, 1)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
