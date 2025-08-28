"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft } from "lucide-react";
import { formatPrice, formatCategory } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useProduct } from "@/hooks/useProduct";
import React from "react";

interface ProductDetailContentProps {
	productId: number;
}

export function ProductDetailContent({ productId }: ProductDetailContentProps) {
	const { product, loading, error } = useProduct(productId);

	if (loading) {
		return (
			<LoadingSpinner
				size="lg"
				text="Loading product..."
				className="min-h-screen"
			/>
		);
	}

	if (error || !product) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<p className="text-red-500 text-lg mb-4">
						{error || "Product not found"}
					</p>
					<Link href="/">
						<Button variant="default">Back to Products</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="bg-white shadow-sm border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex items-center gap-4">
						<Link href="/">
							<Button variant="outline" size="sm">
								<ArrowLeft className="h-4 w-4 mr-2" />
								Back to Products
							</Button>
						</Link>
						<div>
							<h1 className="text-2xl font-bold text-gray-900">
								Product Details
							</h1>
						</div>
					</div>
				</div>
			</header>

			{/* Product Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Product Image */}
					<div className="flex justify-center">
						<div className="bg-white p-8 rounded-lg shadow-sm">
							<div className="relative w-96 h-96">
								<Image
									src={product.image}
									alt={product.title}
									fill
									className="object-contain"
									sizes="(max-width: 1024px) 100vw, 50vw"
									priority
								/>
							</div>
						</div>
					</div>

					{/* Product Information */}
					<div className="space-y-6">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-2">
								{product.title}
							</h2>
							<div className="flex items-center gap-4 mb-4">
								<Badge variant="secondary" className="text-sm">
									{formatCategory(product.category)}
								</Badge>
								<div className="flex items-center gap-1">
									<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
									<span className="text-lg font-medium">
										{product.rating.rate}
									</span>
									<span className="text-gray-500">
										({product.rating.count} reviews)
									</span>
								</div>
							</div>
							<p className="text-4xl font-bold text-green-600 mb-6">
								{formatPrice(product.price)}
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Description
							</h3>
							<p className="text-gray-700 leading-relaxed text-lg">
								{product.description}
							</p>
						</div>

						{/* Additional Info */}
						<div className="pt-6 border-t border-gray-200">
							<div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
								<div>
									<span className="font-medium">Product ID:</span> {product.id}
								</div>
								<div>
									<span className="font-medium">Category:</span>{" "}
									{formatCategory(product.category)}
								</div>
								<div>
									<span className="font-medium">Rating:</span>{" "}
									{product.rating.rate}/5
								</div>
								<div>
									<span className="font-medium">Reviews:</span>{" "}
									{product.rating.count}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
