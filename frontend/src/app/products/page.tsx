import type { Metadata } from "next";
import { Products } from "./products";

export const metadata: Metadata = {
	title: "Products",
	description: "Products Page",
};

export default function ProductsPage() {
	return <Products />;
}

