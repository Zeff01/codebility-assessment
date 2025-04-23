import {
  getProduct,
  GetProductDataResponse,
  type GetProductDataArgs,
} from "@/features/product/data/get-product";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export function useGetProductQuery(args: Pick<GetProductDataArgs, "id">) {
	return useQuery<GetProductDataResponse>({
    enabled: !!args.id,
		queryKey: ["/product", args.id],
		queryFn: () => getProduct({ id: args.id }),
	});
}

export function useGetProductSuspenseQuery(args: Pick<GetProductDataArgs, "id">) {
	return useSuspenseQuery<GetProductDataResponse>({
		queryKey: ["/product", args.id],
		queryFn: () => getProduct({ id: args.id }),
	});
}
