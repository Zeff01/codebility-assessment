import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type ProductDetailsSkeletonProps = {
	className?: string;
};

export function ProductDetailsSkeleton({
	className,
}: ProductDetailsSkeletonProps) {
	return (
		<div className={cn("animate-pulse", className)} aria-busy="true">
			<div className="grid md:grid-cols-2 gap-8 lg:gap-16">
				{/* Image Placeholder */}
				<div className="relative aspect-square bg-gray-200 rounded-lg border border-gray-100 shadow-sm">
					<div className="w-full h-full p-6 bg-gray-200" />
				</div>

				{/* Product Info Placeholder */}
				<div className="flex flex-col">
					{/* Category Badge Placeholder */}
					<div className="h-6 w-20 bg-gray-200 rounded-full mb-4" />

					{/* Title Placeholder */}
					<div className="h-8 md:h-9 bg-gray-200 rounded w-3/4 mb-3" />

					{/* Rating Placeholder */}
					<div className="flex items-center gap-1 mt-3 mb-5">
						<div className="flex gap-1">
							{[...Array(5)].map((_, index) => (
								<div key={index} className="h-4 w-4 bg-gray-200 rounded-full" />
							))}
						</div>
						<div className="h-4 bg-gray-200 rounded w-20 ml-2" />
					</div>

					{/* Price Placeholder */}
					<div className="mb-4">
						<div className="h-9 bg-gray-200 rounded w-1/3" />
						<div className="h-4 bg-gray-200 rounded w-1/2 mt-1" />
					</div>

					{/* Separator */}
					<Separator className="bg-gray-200" />

					{/* Description Placeholder */}
					<div className="mb-6">
						<div className="h-4 bg-gray-200 rounded w-full mb-2" />
						<div className="h-4 bg-gray-200 rounded w-5/6" />
					</div>

					{/* Quantity Selector Placeholder */}
					<div className="mb-6">
						<div className="h-4 bg-gray-200 rounded w-20 mb-2" />
						<div className="flex items-center border border-gray-300 rounded-md w-fit">
							<div className="h-10 w-10 bg-gray-200 rounded-l-md" />
							<div className="h-10 w-12 bg-gray-200" />
							<div className="h-10 w-10 bg-gray-200 rounded-r-md" />
						</div>
					</div>

					{/* Action Button Placeholder */}
					<div className="flex flex-wrap gap-4 mb-8">
						<div className="h-10 w-36 bg-gray-200 rounded-md" />
					</div>
				</div>
			</div>
		</div>
	);
}
