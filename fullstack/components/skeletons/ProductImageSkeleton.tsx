// components/skeletons/ProductImageSkeleton.tsx
'use client';

/**
 * Skeleton loader for product image
 * Shows while image is loading
 * 
 * Creates a smooth loading experience
 * instead of blank space
 */
export default function ProductImageSkeleton() {
  return (
    <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
      {/* Shimmer animation effect */}
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
    </div>
  );
}