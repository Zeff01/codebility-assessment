import Image from "next/image";
import Link from "next/link";

import { RatingStars } from "@/components/RatingStars";
import { formatPrice } from "@/lib/catalog";

import type { Product } from "@/lib/catalog";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const soldOut = product.stock === 0;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-stone-200/80 transition -translate-y-0.5 duration-200 hover:shadow-md hover:ring-stone-300"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-stone-100">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          fill
          priority={priority}
          className="object-cover"
        />
        {soldOut ? (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-stone-900/85 px-2.5 py-1 text-[11px] font-medium text-white">
            Sold out
          </span>
        ) : null}
      </div>
      <div className="px-1 pb-1 pt-3">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-stone-900">{product.name}</h3>
          <span className="text-sm font-medium tabular-nums text-stone-900">{formatPrice(product.price)}</span>
        </div>
        <p className="mt-0.5 text-xs text-stone-500">{product.tagline}</p>
        <div className="mt-2">
          <RatingStars product={product} />
        </div>
      </div>
    </Link>
  );
}
