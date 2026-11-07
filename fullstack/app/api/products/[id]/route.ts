/**
 * Products API — single product.
 *
 * GET /api/products/:id
 * → 200 { product }  |  404 { error, detail }
 */

import { NextResponse } from "next/server";

import { getProduct } from "@/lib/catalog";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return NextResponse.json({ error: "product_not_found", detail: `Unknown product "${id}".` }, { status: 404 });
  }

  return NextResponse.json({ product });
}
