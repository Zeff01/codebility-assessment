import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProductsSkeletonProps = {
  count?: number;
  className?: string;
};

export function ProductListSkeleton({ count = 4, className }: ProductsSkeletonProps) {
  return (
    <div
      className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}
      aria-busy="true"
    >
      {[...Array(count)].map((_, index) => (
        <Card key={index} className="relative flex flex-col animate-pulse">
          {/* Image Placeholder */}
          <div className="relative flex-1">
            <div className="relative aspect-square bg-gray-200">
              <div className="w-full h-full p-6 bg-gray-200" />
            </div>
          </div>

          {/* Category Badge Placeholder */}
          <div className="absolute left-3 top-3 h-6 w-16 bg-gray-200 rounded-full" />

          {/* Product Info Placeholder */}
          <div className="flex flex-col p-4">
            {/* Title Placeholder */}
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-1" />
            {/* Description Placeholder */}
            <div className="h-4 bg-gray-200 rounded w-full mb-1" />
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-3" />
            {/* Price and Link Placeholder */}
            <div className="mt-auto flex items-center justify-between">
              <div className="h-6 bg-gray-200 rounded w-1/4" />
              <div className="h-4 bg-gray-200 rounded w-1/3" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
