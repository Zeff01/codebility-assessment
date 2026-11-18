const STAR_PATH =
  "M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.85 4.75 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z";

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-hidden className="relative inline-flex">
      <span className="flex text-stone-300 dark:text-stone-600">
        {Array.from({ length: 5 }, (_, index) => (
          <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
            <path d={STAR_PATH} />
          </svg>
        ))}
      </span>
      <span className="absolute inset-0 flex overflow-hidden text-amber-400" style={{ width: `${(rating / 5) * 100}%` }}>
        {Array.from({ length: 5 }, (_, index) => (
          <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 shrink-0 fill-current">
            <path d={STAR_PATH} />
          </svg>
        ))}
      </span>
    </span>
  );
}

export function ProductRating({ rating, reviewCount }: { rating: number; reviewCount?: number }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <Stars rating={rating} />
      <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && <span>({reviewCount} reviews)</span>}
      <span className="sr-only">Rated {rating} out of 5</span>
    </div>
  );
}
