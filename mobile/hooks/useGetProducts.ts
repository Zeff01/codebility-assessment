import { useApiClient } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export function useGetProducts() {
  const api = useApiClient();

  const {
    data: products,
    error,
    isPending,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await api.get("products");
    },
    select: (res) => res.data,
  });

  return { products, error, isPending, isFetching, refetch };
}
