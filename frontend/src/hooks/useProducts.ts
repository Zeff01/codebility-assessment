import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useProducts() {
	const {
		data: products = [],
		isLoading: loading,
		error,
		refetch: fetchProducts,
	} = useQuery({
		queryKey: ["products"],
		queryFn: api.getProducts,
		staleTime: 5 * 60 * 1000, // 5 minutes
		gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
		retry: 3,
		retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
	});

	return {
		products,
		loading,
		error: error?.message || null,
		fetchProducts,
		totalProducts: products.length,
	};
}
