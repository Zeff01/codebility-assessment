export default function Loading() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 px-6 pt-16">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="w-full h-96 bg-neutral-400 rounded-xl shadow-lg animate-pulse"></div>

        <div className="flex flex-col gap-4">
          <div className="w-3/4 h-8 bg-neutral-400 rounded-md shadow animate-pulse"></div>
          <div className="w-full h-24 bg-neutral-400 rounded-md shadow animate-pulse"></div>
          <div className="w-1/4 h-6 bg-neutral-400 rounded-md shadow animate-pulse"></div>
          <div className="w-1/2 h-4 bg-neutral-400 rounded-md shadow animate-pulse"></div>
          <div className="w-1/3 h-4 bg-yellow-400 rounded-md shadow animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
