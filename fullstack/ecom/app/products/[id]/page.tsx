import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AddToCart } from "@/components/add-to-cart";
import { formatCurrency } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { getBaseUrl } from "@/lib/server";

async function fetchProduct(id: string): Promise<Product> {
  const baseUrl = await getBaseUrl();
  const response = await fetch(`${baseUrl}/api/products/${id}`, {
    next: { revalidate: 120 },
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = (await response.json()) as { product: Product };
  return data.product;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="relative h-105 w-full overflow-hidden rounded-3xl">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div
                key={`${product.id}-${index}`}
                className="relative h-40 w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Badge>{product.category}</Badge>
            <span className="text-xs text-muted-foreground">
              {product.reviewCount} reviews
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>
          <div className="flex items-baseline gap-3">
            <div className="text-2xl font-semibold">
              {formatCurrency(product.price)}
            </div>
            {product.compareAt ? (
              <div className="text-sm text-muted-foreground line-through">
                {formatCurrency(product.compareAt)}
              </div>
            ) : null}
          </div>
          <AddToCart
            item={{
              productId: product.id,
              name: product.name,
              price: product.price,
              image: product.images[0],
              quantity: 1,
            }}
            maxQuantity={product.stock}
          />
          <Separator />
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">
              Highlights
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {product.highlights.map((highlight) => (
                <li key={highlight}>- {highlight}</li>
              ))}
            </ul>
          </div>
          <Card className="border-dashed">
            <CardHeader>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Specifications
              </h3>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              {Object.entries(product.specs).map(([label, value]) => (
                <div key={label} className="flex items-center justify-between">
                  <span>{label}</span>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
