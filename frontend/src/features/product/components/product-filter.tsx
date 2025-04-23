"use client";

import { useProductStore } from "@/features/product/stores/use-product-store";
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";
import { type ComponentProps, memo, useCallback, useEffect, useState } from "react";

type ProductFilterProps = ComponentProps<"div">;

function ProductFilterComponent(props: ProductFilterProps) {
	const [searchQuery, setSearchQuery] = useState("");

	const debouncedValue = useDebounce(searchQuery, 500);
	const setFilters = useProductStore((state) => state.setFilters);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

	useEffect(() => {
		setFilters(debouncedValue ? { title: debouncedValue } : undefined);
	}, [debouncedValue]);

	return (
		<div {...props} className={cn(props.className)}>
			<input
				type="text"
				placeholder="Search..."
				className="w-full md:max-w-md rounded-lg border border-gray-200 p-3.5 text-sm"
				value={searchQuery}
				onChange={handleChange}
			/>
		</div>
	);
}

export const ProductFilter = memo(ProductFilterComponent);
