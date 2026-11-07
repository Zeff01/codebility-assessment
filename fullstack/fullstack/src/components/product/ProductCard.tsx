import { ResilientProductImage } from "@/components/product/ResilientProductImage";
import type { Product } from "@/types/product";
import Link from "next/link";

function formatMoney(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <ResilientProductImage
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          {product.category}
        </p>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {product.name}
        </h2>
        <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {product.description}
        </p>
        <p className="mt-auto text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {formatMoney(product.price, product.currency)}
        </p>
      </div>
    </Link>
  );
}
