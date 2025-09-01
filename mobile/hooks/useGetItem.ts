import { useApiClient } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export default function useGetItem(itemId: string) {
  const api = useApiClient();

  const {
    data: product,
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["item", itemId],
    queryFn: async () => await api.get(`products/${itemId}`),
    select: (res) => res.data,
  });

  return { product, isPending, error, refetch };
}
