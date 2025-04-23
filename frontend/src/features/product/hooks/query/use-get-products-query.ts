import {
  getProducts,
  GetProductsFilterArgs,
} from "@/features/product/data/get-products";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export function useGetProductsQuery(filters?: GetProductsFilterArgs) {
	return useQuery({
		queryKey: ["/products", filters],
		queryFn: () => getProducts({ ...filters }),
	});
}

export function useGetProductsSuspenseQuery(filters?: GetProductsFilterArgs) {
	return useSuspenseQuery({
		queryKey: ["/products", filters],
		queryFn: () => getProducts({ ...filters }),
	});
}
