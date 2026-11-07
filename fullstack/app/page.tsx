import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { listProducts } from "@/lib/catalog";

export default function Home() {
  const products = listProducts();
  const featured = products[0];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6">
      <section className="pb-10 pt-10 sm:pb-14 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Catalog</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          Audio for the long haul.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
          Headphones, speakers, and the small hardware that keeps a desk honest — a server-rendered
          catalog with a persistent cart. Start with{" "}
          <Link
            href={`/products/${featured.id}`}
            className="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-900"
          >
            {featured.name}
          </Link>
          .
        </p>
      </section>

      <section aria-label="Product catalog" className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 2} />
        ))}
      </section>
    </main>
  );
}
