import { fetchProducts } from "@/lib/api";
import { ProductListing } from "@/components/ProductListing";

export default async function Home() {
  let products: Awaited<ReturnType<typeof fetchProducts>> = [];
  let error: string | null = null;

  try {
    products = await fetchProducts();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load products";
  }

  return <ProductListing initialProducts={products} error={error} />;
}
