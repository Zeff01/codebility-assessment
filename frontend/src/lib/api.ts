import { Product } from "./types";

const API_BASE = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE}/products`, {
    // Cache lightly; change to "no-store" if you want always-fresh.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  return res.json();
}
