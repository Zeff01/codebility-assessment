import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ProductListSkeleton() {
  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {[...Array(8)].map((_, i) => (
          <li key={i} className="w-full min-w-[300px] min-[400px]:min-w-[350px] flex justify-center">
            <Card className="w-full border-none shadow-none sm:border sm:shadow">
              <CardHeader className="pb-3">
                <Skeleton className="w-full h-[300px] rounded-lg" />
              </CardHeader>
              <CardContent className="space-y-3 p-4">
                <Skeleton className="h-5  rounded w-full" />
                <Skeleton className="h-4 w-1/2 rounded" />
                <Skeleton className="h-4 w-2/3 rounded" />
                <Skeleton className="h-4 w-1/3 rounded" />
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
