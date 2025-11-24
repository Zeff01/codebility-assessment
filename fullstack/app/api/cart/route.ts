import { NextResponse } from "next/server";
import { products } from "@/lib/products";
import { CartItem } from "@/lib/cart";

let cart: CartItem[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const { id, quantity, replace = false } = await request.json();

  const product = products.find((p) => p.id === id);
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const item = cart.find((c) => c.id === id);

  if (item) {
    item.quantity = replace ? quantity : item.quantity + quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  }

  return NextResponse.json(cart);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  cart = cart.filter((c) => c.id !== id);
  return NextResponse.json(cart);
}
