"use client";

import { ProductCard } from "@/components/ProductCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { Header } from "@/components/Header";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useProductContext } from "@/contexts/ProductContext";
import { useUIContext } from "@/contexts/UIContext";
import { useEffect } from "react";

export function HomeContent() {
	const {
		products,
		loading,
		error,
		fetchProducts,
		searchTerm,
		setSearchTerm,
		debouncedSearchTerm,
		filteredProducts,
	} = useProductContext();

	const { showNotification } = useUIContext();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	// Show notification when search results change
	useEffect(() => {
		if (debouncedSearchTerm && filteredProducts.length !== products.length) {
			showNotification(
				`Found ${filteredProducts.length} products matching "${debouncedSearchTerm}"`,
				"info",
				3000
			);
		}
	}, [
		debouncedSearchTerm,
		filteredProducts.length,
		products.length,
		showNotification,
	]);

	if (loading) {
		return (
			<LoadingSpinner
				size="lg"
				text="Loading products..."
				className="min-h-screen"
			/>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<p className="text-red-500 text-lg mb-4">{error}</p>
					<Button onClick={fetchProducts} variant="default">
						Try Again
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Product Catalog
					</h1>
					<p className="text-gray-600 mb-6">
						Discover amazing products from our curated collection
					</p>
					<SearchAndFilter
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						debouncedSearchTerm={debouncedSearchTerm}
					/>
				</div>

				{filteredProducts.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">
							{debouncedSearchTerm
								? `No products found matching "${debouncedSearchTerm}"`
								: "No products available"}
						</p>
					</div>
				) : (
					<>
						<div className="mb-6">
							<p className="text-gray-600">
								Showing {filteredProducts.length} of {products.length} products
								{debouncedSearchTerm && ` matching "${debouncedSearchTerm}"`}
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
							{filteredProducts.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
					</>
				)}
			</main>
		</div>
	);
}
