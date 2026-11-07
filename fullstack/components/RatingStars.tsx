import type { Product } from "@/lib/catalog";

/** Pure server component — zero client JS for the rating row. */
export function RatingStars({ product }: { product: Product }) {
  const { rating, reviewCount } = product;

  return (
    <div className="flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5 from ${reviewCount} reviews`}>
      <div aria-hidden="true" className="flex">
        {Array.from({ length: 5 }, (_, i) => {
          const filled = i < Math.round(rating);
          return (
            <svg key={i} width="14" height="14" viewBox="0 0 14 14" className={filled ? "text-amber-500" : "text-stone-300"}>
              <path
                fill="currentColor"
                d="M7 1.2l1.7 3.6 3.9.5-2.9 2.7.7 3.9L7 10l-3.4 1.9.7-3.9L1.4 5.3l3.9-.5z"
              />
            </svg>
          );
        })}
      </div>
      <span className="text-xs text-stone-500">
        {rating} · {reviewCount.toLocaleString("en-US")} reviews
      </span>
    </div>
  );
}
