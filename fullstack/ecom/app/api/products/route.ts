import { NextResponse } from "next/server";
import { getProducts } from "@/lib/products";

export async function GET() {
  try {
    const products = getProducts();
    return NextResponse.json({ products, count: products.length });
  } catch {
    return NextResponse.json(
      { error: "Unable to load products" },
      { status: 500 }
    );
  }
}
