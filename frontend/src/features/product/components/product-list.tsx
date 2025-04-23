import { ProductCard } from "@/features/product/components/product-card";
import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";
import { useGetProductsSuspenseQuery } from "../hooks/query/use-get-products-query";
import { useProductStore } from "../stores/use-product-store";

type ProductListProps = ComponentProps<"div"> & {
	excludeId?: number;
};

export function ProductList({ excludeId, ...props }: ProductListProps) {
	const filters = useProductStore((state) => state.filters);
	const { data: products } = useGetProductsSuspenseQuery(filters);

	const displayProducts = products
		.filter((p) => p.id !== excludeId)

	return (
		<div
			{...props}
			className={cn("w-full flex flex-col gap-4", props.className)}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{displayProducts.length > 0 ? (
					displayProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))
				) : (
					<div className="flex items-center justify-center gap-4">
						<h2 className="text-2xl font-bold">No products found</h2>
					</div>
				)}
			</div>
		</div>
	);
}
