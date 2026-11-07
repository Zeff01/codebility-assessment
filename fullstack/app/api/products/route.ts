/**
 * Products API — list.
 *
 * GET /api/products?category=headphones|speakers|accessories&sort=featured|price-asc|price-desc|rating
 * → 200 { items, total }  |  400 { error, detail } for an unknown category or sort.
 */

import { NextResponse } from "next/server";

import { CURRENCY, listProducts } from "@/lib/catalog";

import type { ProductCategory, SortOption } from "@/lib/catalog";

const CATEGORIES: ReadonlySet<string> = new Set(["headphones", "speakers", "accessories"]);
const SORTS: ReadonlySet<string> = new Set(["featured", "price-asc", "price-desc", "rating"]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") ?? "featured";

  if (category && !CATEGORIES.has(category)) {
    return NextResponse.json(
      { error: "invalid_category", detail: `Unknown category "${category}".` },
      { status: 400 },
    );
  }

  if (!SORTS.has(sort)) {
    return NextResponse.json({ error: "invalid_sort", detail: `Unknown sort "${sort}".` }, { status: 400 });
  }

  const items = listProducts({ category: category as ProductCategory | undefined, sort: sort as SortOption });

  return NextResponse.json({ items, total: items.length, currency: CURRENCY });
}
