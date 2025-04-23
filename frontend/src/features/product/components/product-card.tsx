import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Product } from "@/features/product/types/product";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

type ProductCardProps = ComponentProps<"div"> & {
	product: Product;
}

export function ProductCard({ product, ...props }: ProductCardProps) {
	return (
		<Card {...props}>
			{/* Product Image */}
			<div className="relative flex-1">
				<Link
					href={`/products/${product.id}`}
					className="absolute inset-0 z-10"
				>
					<span className="sr-only">View {product.title}</span>
				</Link>
				<div className="relative aspect-square overflow-hidden bg-gray-50">
					<Image
						src={product.image || "/placeholder.svg"}
						alt={product.title}
						fill
						className="object-contain p-6 transition-all duration-300 group-hover:scale-105"
						sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
					/>
				</div>
			</div>

			{/* Category Badge */}
      <Badge className="absolute left-3 top-3">
        {product.category}
      </Badge>

			{/* Product Info */}
			<div className="flex flex-col p-4">
				<h3 className="mb-1 line-clamp-1 font-medium text-gray-900 transition-colors group-hover:text-gray-600">
					{product.title}
				</h3>
				<p className="mb-3 line-clamp-2 text-xs text-gray-500">
					{product.description}
				</p>
				<div className="mt-auto flex items-center justify-between">
					<span className="font-bold text-lg">${product.price.toFixed(2)}</span>
					<Link
						href={`/products/${product.id}`}
						className="text-xs font-medium text-gray-700 underline-offset-4 hover:underline"
					>
						View Details
					</Link>
				</div>
			</div>
		</Card>
	);
}
