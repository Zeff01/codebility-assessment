import { Badge } from "@/components/ui/badge";
import { AddToCartForm } from "@/features/cart/components/add-to-cart-form";
import { FREE_SHIPPING_THRESHOLD } from "@/features/cart/constants";
import { formatCurrency } from "@/lib/format";
import { discountPercent } from "../lib/pricing";
import { toSummary } from "../services/product.service";
import type { Product } from "../types";
import { ProductPrice } from "./product-price";
import { ProductRating } from "./product-rating";
import { StockStatus } from "./stock-status";

export function ProductInfo({ product }: { product: Product }) {
  const discount = discountPercent(product.price, product.compareAtPrice);

  return (
    <div className="flex flex-col gap-7 lg:sticky lg:top-24 lg:self-start">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">{product.brand}</span>
          <span aria-hidden className="text-muted">·</span>
          <span className="text-sm capitalize text-muted">{product.category}</span>
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{product.name}</h1>
        <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
      </div>

      <div className="space-y-3">
        <ProductPrice price={product.price} compareAtPrice={product.compareAtPrice} size="lg" />
        <div className="flex flex-wrap items-center gap-2">
          <StockStatus stock={product.stock} />
          {discount > 0 && (
            <Badge tone="sale">
              Save {formatCurrency(product.compareAtPrice! - product.price)} ({discount}% off)
            </Badge>
          )}
        </div>
      </div>

      <p className="text-lg leading-relaxed text-muted">{product.description}</p>

      <div className="rounded-3xl bg-surface p-5 ring-1 ring-border">
        <AddToCartForm product={toSummary(product)} />
        <p className="mt-1 flex items-center gap-2 text-sm text-muted">
          <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
            <circle cx="7" cy="17.5" r="1.5" />
            <circle cx="17" cy="17.5" r="1.5" />
          </svg>
          Free shipping on orders over {formatCurrency(FREE_SHIPPING_THRESHOLD)}
        </p>
      </div>

      <div>
        <h2 className="mb-3 font-display text-lg font-bold">Highlights</h2>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <span aria-hidden className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
