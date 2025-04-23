"use client";

import { QueryErrorBoundary } from "@/components/error/query-error-boundary";
import { ProductFilter } from "@/features/product/components/product-filter";
import { ProductList } from "@/features/product/components/product-list";
import { ProductListSkeleton } from "@/features/product/components/product-list-skeleton";
import { Suspense } from "react";

export function Products() {
	return (
		<>
			<div className="sticky top-14 bg-white z-10 flex flex-col p-4">
				<ProductFilter className="w-full flex justify-center" />
			</div>
			<section className="flex flex-col p-4">
				<Suspense fallback={<ProductListSkeleton count={8} />}>
					<QueryErrorBoundary>
						<ProductList />
					</QueryErrorBoundary>
				</Suspense>
			</section>
		</>
	);
}
