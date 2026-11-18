import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { discountPercent } from "../lib/pricing";
import type { ProductSummary } from "../types";
import { ProductPrice } from "./product-price";
import { ProductRating } from "./product-rating";
import { LOW_STOCK_THRESHOLD } from "./stock-status";

export type ImagePriority = "preload" | "eager" | "lazy";

type ProductCardProps = {
  product: ProductSummary;
  imagePriority?: ImagePriority;
  headingLevel?: "h2" | "h3";
};

// Matches the grid: 4 columns in the 1152px container, 2 on tablet, 1 on mobile (minus gutters and card padding).
const CARD_IMAGE_SIZES =
  "(min-width: 1200px) 240px, (min-width: 1024px) 23vw, (min-width: 640px) 46vw, calc(100vw - 56px)";

export function ProductCard({ product, imagePriority = "lazy", headingLevel = "h3" }: ProductCardProps) {
  const Heading = headingLevel;
  const discount = discountPercent(product.price, product.compareAtPrice);
  const lowStock = product.stock > 0 && product.stock <= LOW_STOCK_THRESHOLD;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col rounded-3xl bg-surface p-3 ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:ring-indigo-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-muted">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          preload={imagePriority === "preload"}
          loading={imagePriority === "lazy" ? "lazy" : "eager"}
          sizes={CARD_IMAGE_SIZES}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {product.stock === 0 ? (
            <Badge tone="overlay">Sold out</Badge>
          ) : (
            <>
              {discount > 0 && <Badge tone="sale">−{discount}%</Badge>}
              {lowStock && <Badge tone="warning">Only {product.stock} left</Badge>}
            </>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-2 pb-1 pt-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{product.brand}</p>
        <Heading className="font-semibold leading-snug">{product.name}</Heading>
        <ProductRating rating={product.rating} />
        <div className="mt-auto flex items-end justify-between pt-2">
          <ProductPrice price={product.price} compareAtPrice={product.compareAtPrice} />
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-accent transition group-hover:bg-indigo-600 group-hover:text-white"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
