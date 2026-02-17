export default function ProductLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="mb-8 flex items-center gap-2">
        <div className="h-4 w-12 bg-gray-200 rounded" />
        <div className="h-4 w-2 bg-gray-200 rounded" />
        <div className="h-4 w-16 bg-gray-200 rounded" />
        <div className="h-4 w-2 bg-gray-200 rounded" />
        <div className="h-4 w-32 bg-gray-200 rounded" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Skeleton */}
        <div className="aspect-square bg-gray-200 rounded-2xl" />

        {/* Details Skeleton */}
        <div className="flex flex-col">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="mt-2 h-10 w-3/4 bg-gray-200 rounded" />
          <div className="mt-4 flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-5 w-5 bg-gray-200 rounded" />
              ))}
            </div>
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
          <div className="mt-6 h-12 w-32 bg-gray-200 rounded" />
          <div className="mt-6 space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>
          <div className="mt-6 h-4 w-32 bg-gray-200 rounded" />
          <div className="mt-8 space-y-4">
            <div className="h-10 w-48 bg-gray-200 rounded" />
            <div className="h-14 w-full bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
