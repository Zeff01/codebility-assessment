import PageLayout from "@/components/shared/page-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <PageLayout title="Product Details">
      <div className="flex flex-col md:flex-row gap-8 items-start lg:w-2/3">
        <div className="w-full max-w-xs h-[300px] object-contain border rounded-lg bg-white p-4 flex items-center justify-center">
          <Skeleton className="w-full h-full min-h-[442px] rounded-lg" />
        </div>
        <div className="flex-1 space-y-4">
          <Skeleton className="h-8 w-2/3 rounded" />
          <Skeleton className="h-6 w-1/4 rounded" />
          <Skeleton className="h-4 w-1/3 rounded" />
          <Skeleton className="h-20 w-full rounded" />
          <Skeleton className="h-4 w-1/2 rounded mt-4" />
        </div>
      </div>
    </PageLayout>
  )
}
