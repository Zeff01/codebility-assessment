export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-lg text-gray-600">Loading products...</p>
      </div>
    </div>
  );
}