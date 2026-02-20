"use client";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
};

export default function Home() {
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | any>(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [category, setCategory] = useState("All Categories");

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setIsLoading(true);
				const res = await fetch("https://fakestoreapi.com/products");
				if (!res.ok) {
					throw new Error("Failed to fetch products");
				}
				const data = await res.json();

				setAllProducts(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProducts();
	}, []);

	const filteredProducts = allProducts.filter(
		(product) =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(category === "All Categories" || product.category === category),
	);
	const categories = [
		"All Categories",
		...new Set(allProducts.map((product) => product.category)),
	];
	const handleClearFilters = () => {
		setSearchTerm("");
		setCategory("All Categories");
	};

	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen  pb-20 gap-8 font-[family-name:var(--font-geist-sans)] max-w-screen bg-gray-200">
			<header className="bg-white text-black flex w-full h-20 items-center justify-center text-2xl font-bold shadow-lg">
				<h1>Fake Store</h1>
			</header>
			<main className="max-w-[1200px] flex flex-col items-center justify-items-center w-full gap-10 px-8 ">
				<div className="flex md:flex-row md:items-center justify-start w-full gap-2 flex-col items-start">
					<div>
						Search:
						<input
							type="text"
							onChange={(e) => setSearchTerm(e.target.value)}
							value={searchTerm}
							className="bg-white border p-2 text-black rounded-lg text-sm ml-1"
							placeholder="Search product name here..."
						/>
					</div>
					<div className="flex flex-row items-center gap-2">
						<p>Filter by:</p>
						<select
							name="category"
							id="category"
							value={category}
							className="bg-white border p-2 text-black rounded-lg text-sm "
							onChange={(e) => setCategory(e.target.value)}
						>
							{categories.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>
					</div>

					<button
						className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded-xl  cursor-pointer"
						onClick={handleClearFilters}
					>
						Clear Search & Filters
					</button>
				</div>

				{isLoading ? (
					<p className="text-2xl font-bold flex items-center justify-center">
						Loading...
					</p>
				) : error ? (
					<p className="text-2xl font-bold text-red-500">
						Error: {error?.message ?? String(error)}
					</p>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
						{filteredProducts.map((product) => (
							<ProductCard product={product} key={product.id} />
						))}
					</div>
				)}
			</main>
		</div>
	);
}
