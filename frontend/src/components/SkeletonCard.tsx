export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-4 space-y-4">
      <div className="h-40 bg-gray-200 rounded-xl"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
    </div>
  );
}
