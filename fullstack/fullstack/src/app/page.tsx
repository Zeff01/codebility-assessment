import { ProductGrid } from "@/components/product/ProductGrid";
import { getFeaturedProducts, getNewArrivalProducts } from "@/lib/products";

export default async function HomePage() {
  const [featured, newArrivals] = await Promise.all([
    getFeaturedProducts(),
    getNewArrivalProducts(),
  ]);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <section>
        <div className="mb-8 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">
            Featured products
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Staff picks for everyday use—tested for comfort, durability, and
            value. Each listing includes full specs, live stock, and fast add to
            cart from the detail page.
          </p>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            Just landed
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            New arrival
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            The latest drops this week—from morning runs to desk upgrades. New
            items ship with the same cart and checkout flow as the rest of the
            store.
          </p>
        </div>
        <ProductGrid products={newArrivals} />
      </section>
    </main>
  );
}
