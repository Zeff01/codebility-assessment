import { useState, useMemo, useEffect, useCallback } from "react";
import { Product } from "@/interfaces";

export function useProductFilters(products: Product[]) {
	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

	// Debounce search term with 300ms delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
		}, 300);

		return () => clearTimeout(timer);
	}, [searchTerm]);

	const filteredProducts = useMemo(() => {
		let filtered = products;

		// Filter by search term (only product name)
		if (debouncedSearchTerm.trim()) {
			filtered = filtered.filter((product) =>
				product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
			);
		}

		return filtered;
	}, [products, debouncedSearchTerm]);

	const handleSearchChange = useCallback((value: string) => {
		setSearchTerm(value);
	}, []);

	return {
		searchTerm,
		setSearchTerm: handleSearchChange,
		debouncedSearchTerm,
		filteredProducts,
	};
}
