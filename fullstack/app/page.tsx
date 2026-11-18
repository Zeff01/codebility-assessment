import Link from "next/link";
import { Suspense } from "react";
import { FREE_SHIPPING_THRESHOLD } from "@/features/cart/constants";
import { ProductGrid } from "@/features/products/components/product-grid";
import { ProductGridSkeleton } from "@/features/products/components/product-skeletons";
import { getProducts } from "@/features/products/services/product.service";
import { formatCurrency } from "@/lib/format";

export default function HomePage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <Hero />

      <section id="products" aria-labelledby="products-heading" className="scroll-mt-24 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div className="space-y-1">
            <h2 id="products-heading" className="font-display text-3xl font-bold tracking-tight">
              All products
            </h2>
            <p className="text-muted">Audio, wearables and everyday gear.</p>
          </div>
        </div>

        <Suspense fallback={<ProductGridSkeleton count={8} />}>
          <ProductList />
        </Suspense>
      </section>
    </div>
  );
}

async function ProductList() {
  const products = await getProducts();
  return <ProductGrid products={products} eagerCount={4} />;
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] bg-linear-to-br from-indigo-700 via-violet-700 to-fuchsia-700 px-6 py-10 text-white sm:px-12 sm:py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_0%,rgb(56_189_248/0.45),transparent_40%),radial-gradient(circle_at_45%_120%,rgb(232_121_249/0.25),transparent_45%)]"
      />
      <svg
        aria-hidden
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 w-full text-white/10"
        fill="currentColor"
      >
        <path d="M0 120c75 0 75-60 150-60s75 60 150 60 75-60 150-60 75 60 150 60v80H0z" />
        <path d="M0 160c75 0 75-40 150-40s75 40 150 40 75-40 150-40 75 40 150 40v40H0z" opacity={0.6} />
      </svg>

      <div className="max-w-xl space-y-5 sm:space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium ring-1 ring-white/25">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          New season gear is in
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Gear that keeps up with you.
        </h1>
        <p className="text-base text-indigo-50 sm:text-lg">
          Headphones, wearables and everyday essentials, built well and priced fairly. Free shipping on orders over{" "}
          {formatCurrency(FREE_SHIPPING_THRESHOLD)}.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#products"
            className="inline-flex h-12 items-center rounded-full bg-white px-7 font-semibold text-indigo-700 shadow-lg shadow-indigo-950/20 transition hover:bg-indigo-50 active:scale-[0.98]"
          >
            Shop the collection
          </Link>
          <Link
            href="/cart"
            className="hidden h-12 items-center rounded-full px-6 font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/10 sm:inline-flex"
          >
            View cart
          </Link>
        </div>
      </div>
    </section>
  );
}
