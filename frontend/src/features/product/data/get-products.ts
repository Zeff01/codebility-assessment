import type { Product } from "@/features/product/types/product";
import { simulateDelay } from "@/utils/simulate-delay";

export type GetProductsFilterArgs = {
	title?: string;
	category?: string;
};

export type GetProductsDataResponse = Product[];

export async function getProducts(
	filters?: GetProductsFilterArgs,
): Promise<GetProductsDataResponse> {
  //await simulateDelay(2000);

	const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Products not found");
  }

  const data = (await response.json()) as Product[];

	if (!filters || filters.title === undefined) {
		return data;
	}

	return data.filter((product) => {
		if (filters.title) {
			return product.title.toLowerCase().includes(filters.title.toLowerCase());
		}

		if (filters.category) {
			return product.category
				.toLowerCase()
				.includes(filters.category.toLowerCase());
		}
	});
}
