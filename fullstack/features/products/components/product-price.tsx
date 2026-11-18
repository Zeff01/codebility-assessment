import { cn } from "@/lib/cn";
import { formatCurrency } from "@/lib/format";
import { discountPercent } from "../lib/pricing";

type ProductPriceProps = {
  price: number;
  compareAtPrice?: number;
  size?: "sm" | "lg";
};

export function ProductPrice({ price, compareAtPrice, size = "sm" }: ProductPriceProps) {
  const onSale = discountPercent(price, compareAtPrice) > 0;

  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      <span
        className={cn(
          "font-semibold tabular-nums",
          size === "lg" ? "font-display text-4xl font-bold" : "text-base",
          onSale && "text-sale",
        )}
      >
        {formatCurrency(price)}
      </span>
      {onSale && (
        <>
          <span className="sr-only">was</span>
          <span className={cn("text-muted line-through tabular-nums", size === "lg" ? "text-lg" : "text-sm")}>
            {formatCurrency(compareAtPrice!)}
          </span>
        </>
      )}
    </div>
  );
}
