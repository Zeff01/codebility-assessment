import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-surface p-3 ring-1 ring-border">
      <Skeleton className="aspect-square rounded-2xl" />
      <div className="space-y-2 px-2 pb-2 pt-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-5 w-20" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }, (_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col gap-4">
        <Skeleton className="aspect-square rounded-[2rem]" />
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="aspect-square rounded-2xl" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-12 w-4/5" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-10 w-36" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-32 w-full rounded-3xl" />
      </div>
    </div>
  );
}
