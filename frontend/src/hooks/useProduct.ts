import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useProduct(id: number) {
	const {
		data: product,
		isLoading: loading,
		error,
	} = useQuery({
		queryKey: ["product", id],
		queryFn: () => api.getProduct(id),
		staleTime: 5 * 60 * 1000, // 5 minutes
		gcTime: 10 * 60 * 1000, // 10 minutes
		retry: 3,
		retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
		enabled: !!id,
	});

	return {
		product,
		loading,
		error: error?.message || null,
	};
}
