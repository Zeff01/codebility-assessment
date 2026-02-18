import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          All Products
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Browse our curated collection of premium tech and home essentials.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
