"use client";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { formatPrice, formatCategory } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ProductCardProps } from "@/interfaces";

export function ProductCard({ product }: ProductCardProps) {
	return (
		<Link href={`/product/${product.id}`}>
			<Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer flex flex-col">
				<CardHeader className="p-4 pb-2 flex-shrink-0">
					<div className="relative aspect-square w-full">
						<Image
							src={product.image}
							alt={product.title}
							fill
							className="object-contain rounded-t-lg"
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
						/>
					</div>
				</CardHeader>
				<CardContent className="p-4 pt-0 flex-1 flex flex-col">
					<div className="space-y-2 flex-1">
						<h3 className="font-semibold text-gray-900 line-clamp-2 text-sm min-h-[2.5rem]">
							{product.title}
						</h3>
						<div className="flex items-center gap-2">
							<Badge variant="secondary" className="text-xs">
								{formatCategory(product.category)}
							</Badge>
							<div className="flex items-center gap-1 text-xs text-gray-600">
								<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
								<span>{product.rating.rate}</span>
								<span className="text-gray-400">({product.rating.count})</span>
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter className="p-4 pt-0 flex-shrink-0">
					<p className="text-lg font-bold text-green-600">
						{formatPrice(product.price)}
					</p>
				</CardFooter>
			</Card>
		</Link>
	);
}
