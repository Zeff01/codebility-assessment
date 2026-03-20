// components/skeletons/ProductDetailsSkeleton.tsx
'use client';

/**
 * Skeleton loader for product details
 * Shows while product content is loading
 * 
 * Matches the layout of ProductContent
 * so there's no layout shift when it loads
 */
export default function ProductDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {/* Title skeleton */}
      <div className="space-y-3">
        <div className="h-10 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
        <div className="h-6 bg-gray-200 rounded-lg w-1/3 animate-pulse" />
      </div>

      {/* Category badge skeleton */}
      <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse" />

      {/* Rating skeleton */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
        <div className="h-5 bg-gray-200 rounded w-32 animate-pulse" />
      </div>

      {/* Price skeleton */}
      <div className="bg-blue-50 p-4 rounded-lg space-y-2">
        <div className="h-10 bg-gray-200 rounded-lg w-1/2 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded-lg w-2/3 animate-pulse" />
      </div>

      {/* Stock status skeleton */}
      <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />

      {/* Description skeleton */}
      <div className="space-y-2">
        <div className="h-6 bg-gray-200 rounded-lg w-1/4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-4 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-4 bg-gray-200 rounded-lg w-5/6 animate-pulse" />
      </div>

      {/* Quantity and buttons skeleton */}
      <div className="border-t pt-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-5 bg-gray-200 rounded w-20 animate-pulse" />
          <div className="h-10 bg-gray-200 rounded-lg w-32 animate-pulse" />
        </div>

        {/* Buttons */}
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      {/* Additional info skeleton */}
      <div className="bg-gray-100 p-4 rounded-lg space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    </div>
  );
}