import { Badge } from "@/components/ui/badge";

export const LOW_STOCK_THRESHOLD = 5;

export function StockStatus({ stock }: { stock: number }) {
  if (stock === 0) return <Badge tone="danger">Out of stock</Badge>;
  if (stock <= LOW_STOCK_THRESHOLD) return <Badge tone="warning">Only {stock} left</Badge>;
  return (
    <Badge tone="success">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      In stock
    </Badge>
  );
}
