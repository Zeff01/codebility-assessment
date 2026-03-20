// components/skeletons/ProductCardSkeleton.tsx
'use client';

/**
 * Skeleton loader for product card
 * Used in products listing page
 * 
 * Shows while product cards are loading
 */
export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Image */}
      <div className="aspect-square bg-gray-200 animate-pulse" />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-5/6 animate-pulse" />
        </div>

        {/* Description */}
        <div className="space-y-2 pt-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 pt-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>

        {/* Price and stock */}
        <div className="flex justify-between pt-3">
          <div className="h-6 bg-gray-200 rounded w-24 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}