import type { Product } from "@/lib/products";
import { getBaseUrl } from "@/lib/server";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";

async function fetchProducts(): Promise<Product[]> {
  const baseUrl = await getBaseUrl();
  const response = await fetch(`${baseUrl}/api/products`, {
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = (await response.json()) as { products: Product[] };
  return data.products;
}

export default async function Page() {
  const products = await fetchProducts();

  return (
    <div className="bg-[radial-gradient(circle_at_top,rgba(250,245,255,0.5),transparent_55%)]">
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Badge className="w-fit">New season edit</Badge>
            <h1 className="text-4xl font-semibold tracking-tight">
              Thoughtful pieces for slow mornings and long evenings.
            </h1>
            <p className="text-sm text-muted-foreground">
              Shop the edit of tactile, timeless home essentials. Each piece is
              made for everyday rituals and designed to age beautifully.
            </p>
          </div>
          <div className="rounded-3xl border border-dashed bg-background/70 p-6 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">
              This week in the studio
            </p>
            <p className="mt-2">
              We are focusing on refined materials, subtle textures, and soft
              light. Expect warm metals, hand-thrown stoneware, and natural
              fibers that invite touch.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}