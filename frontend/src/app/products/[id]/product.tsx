"use client";

import { QueryErrorBoundary } from "@/components/error/query-error-boundary";
import { ProductList } from "@/features/product/components/product-list";
import { ProductListSkeleton } from "@/features/product/components/product-list-skeleton";
import { ProductDetails } from "@/features/product/components/product/product-details";
import { ProductDetailsSkeleton } from "@/features/product/components/product/product-details-skeleton";
import { RelatedProducts } from "@/features/product/components/product/related-product";
import { useGetProductSuspenseQuery } from "@/features/product/hooks/query/use-get-product-query";
import { cn } from "@/lib/utils";
import { type ComponentProps, Suspense } from "react";

type ProductProps = ComponentProps<"div"> & {
	productId: number;
};

function ProductContent({ productId }: ProductProps) {
	const { data: product } = useGetProductSuspenseQuery({ id: productId });
	const productExists = product && Object.keys(product).length > 0;

	return (
		<>
			<section className="flex flex-col gap-4">
				{productExists ? (
					<QueryErrorBoundary>
						<ProductDetails product={product} />
					</QueryErrorBoundary>
				) : (
					<div className="flex flex-col items-center justify-center py-16">
						<h2 className="text-2xl font-semibold text-gray-700">
							Product Not Found
						</h2>
						<p className="text-gray-500 mt-2">
							{`The product you're looking for doesn't exist or has been removed.`}
						</p>
					</div>
				)}
			</section>

			<section className="flex flex-col gap-4 mt-16">
				<h2 className="text-2xl font-bold mb-6">
					{productExists ? "You may also like" : "Featured Products"}
				</h2>
				<QueryErrorBoundary>
					{productExists ? (
						<RelatedProducts product={product} />
					) : (
						<ProductList excludeId={productId} />
					)}
				</QueryErrorBoundary>
			</section>
		</>
	);
}

export function Product({ productId, ...props }: ProductProps) {
	return (
		<div {...props} className={cn("p-4", props.className)}>
			<Suspense
				fallback={
					<>
						<section className="flex flex-col gap-4">
							<ProductDetailsSkeleton />
						</section>
						<section className="flex flex-col gap-4 mt-16">
							<h2 className="text-2xl font-bold mb-6">You may also like</h2>
							<ProductListSkeleton count={4} />
						</section>
					</>
				}
			>
				<ProductContent productId={productId} />
			</Suspense>
		</div>
	);
}
