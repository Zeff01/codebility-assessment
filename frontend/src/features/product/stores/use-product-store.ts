import type { GetProductsFilterArgs } from "@/features/product/data/get-products";
import { create } from "zustand";

type ProductStore = {
	filters?: GetProductsFilterArgs;
	setFilters: (filters?: GetProductsFilterArgs) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
	filters: undefined,
	setFilters: (filters) => set({ filters }),
}));
