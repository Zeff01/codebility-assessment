import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { RatingStars } from "@/components/RatingStars";
import { CURRENCY, formatPrice, getProduct, listProducts } from "@/lib/catalog";

import type { Metadata } from "next";

/**
 * Product detail page.
 *
 * Server component on purpose: the brief asks for server components doing the
 * initial data-loading. The catalog is mock data resolved synchronously from
 * `lib/catalog`, and `generateStaticParams` prerenders every product page
 * statically (fast TTFB, fully cacheable) while unknown slugs fall straight to
 * 404. Only the AddToCart island ships
 * JS to the client.
 *
 * The cart is NOT rendered server-side here: with `cacheComponents` enabled,
 * reading the cookie would turn every page dynamic for one badge. The badge +
 * drawer hydrate via the cart API after mount instead (see CartBadge).
 */

export function generateStaticParams() {
  return listProducts().map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: product.image.src, width: 1200, height: 1200, alt: product.image.alt }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) notFound();

  const sameCategory = listProducts({ category: product.category }).filter((p) => p.id !== product.id);
  const elsewhere = listProducts().filter((p) => p.category !== product.category);
  const related = [...sameCategory, ...elsewhere].slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [product.image.src],
    sku: product.id,
    brand: { "@type": "Brand", name: "Aurora Supply" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      "@type": "Offer",
      price: (product.price / 100).toFixed(2),
      priceCurrency: CURRENCY,
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="py-6 text-xs text-stone-500">
        <Link href="/" className="transition-colors hover:text-stone-900">
          Catalog
        </Link>
        <span aria-hidden="true" className="mx-1.5 text-stone-400">/</span>
        <span className="text-stone-700">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200/80">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">{product.category}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-base text-stone-600">{product.tagline}</p>

          <div className="mt-4">
            <RatingStars product={product} />
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-2xl font-semibold tabular-nums text-stone-900">
              {formatPrice(product.price, CURRENCY)}
            </span>
            <span className="text-xs text-stone-500">
              {product.stock > 0 ? `${product.stock} in stock` : "Currently sold out"}
            </span>
          </div>

          <ul className="mt-6 space-y-2" aria-label="Product highlights">
            {product.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-sm leading-6 text-stone-700">
                <svg width="15" height="15" viewBox="0 0 15 15" className="mt-1.5 shrink-0 text-amber-700" aria-hidden="true">
                  <path d="M3 8l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <AddToCart productId={product.id} stock={product.stock} price={product.price} />
          </div>

          <div className="mt-10 border-t border-stone-200/80 pt-6">
            <h2 className="text-sm font-semibold text-stone-900">About this product</h2>
            <p className="mt-2 text-sm leading-7 text-stone-600">{product.description}</p>
            <p className="mt-4 text-xs text-stone-500">Free shipping over $75 · 30-day returns · 2-year warranty</p>
          </div>
        </div>
      </div>

      <section className="mt-20" aria-label={`More products like ${product.name}`}>
        <h2 className="text-lg font-semibold tracking-tight text-stone-900">You might also like</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {related.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </main>
  );
}
