import { NextResponse } from "next/server";
import { getProductById } from "@/lib/products";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = getProductById(params.id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ product });
  } catch {
    return NextResponse.json(
      { error: "Unable to load product" },
      { status: 500 }
    );
  }
}
