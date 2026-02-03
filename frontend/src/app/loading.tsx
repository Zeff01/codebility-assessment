import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto p-4 lg:p-6 space-y-4 lg:space-y-6">
      <h1 className="text-3xl lg:text-4xl font-medium lg:px-8">Product List</h1>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {[...Array(8)].map((_, i) => (
            <li key={i} className="min-w-[300px] lg:max-w-[350px]  w-full flex justify-center">
              <Card className="w-full max-w-[350px] overflow-hidden">
                <CardHeader className="pb-3">
                  <Skeleton className="w-full h-[300px] rounded-lg" />
                </CardHeader>
                <CardContent className="space-y-3 p-4">
                  <Skeleton className="h-5 w-3/4 rounded" />
                  <Skeleton className="h-4 w-1/2 rounded" />
                  <Skeleton className="h-4 w-2/3 rounded" />
                  <Skeleton className="h-4 w-1/3 rounded" />
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
