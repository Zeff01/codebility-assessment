import type { Product } from "@/types/product";
import ProductsClient from "./products.client";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductsClient initialProducts={products} />;
}
