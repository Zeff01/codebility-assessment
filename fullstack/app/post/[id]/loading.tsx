import { WrapperComponents } from "@/app/components";

export default function Loading() {
  return (
    <main className="bg-[#FAFBF8] h-screen">
      <WrapperComponents>
        <div className="max-w-[900px] mx-auto">
          <div className="py-10 mb-10">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-20 mb-10"></div>
              <div className="h-12 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-40"></div>
            </div>
          </div>
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </WrapperComponents>
    </main>
  );
}
