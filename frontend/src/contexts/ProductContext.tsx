"use client";

import { createContext, useContext } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useProductFilters } from "@/hooks/useProductFilters";
import { ProductContextType, ProductProviderProps } from "@/interfaces";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: ProductProviderProps) {
	const { products, loading, error, fetchProducts, totalProducts } =
		useProducts();
	const { searchTerm, setSearchTerm, debouncedSearchTerm, filteredProducts } =
		useProductFilters(products);

	const value: ProductContextType = {
		products,
		loading,
		error,
		fetchProducts,
		totalProducts,
		searchTerm,
		setSearchTerm,
		debouncedSearchTerm,
		filteredProducts,
	};

	return (
		<ProductContext.Provider value={value}>{children}</ProductContext.Provider>
	);
}

export function useProductContext() {
	const context = useContext(ProductContext);
	if (context === undefined) {
		throw new Error("useProductContext must be used within a ProductProvider");
	}
	return context;
}
