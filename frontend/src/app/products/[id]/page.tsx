import { Product } from "@/app/products/[id]/product";
import { ChevronLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Product",
	description: "Product Page",
};

type ProductPageProps = {
	params: Promise<{ id: number }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
	const { id } = await params;

	return (
		<>
			<div className="sticky top-12 bg-white z-10 flex flex-col p-4">
				<Link
					href="/"
					className="inline-flex items-center text-sm hover:underline"
				>
					<ChevronLeftIcon className="h-4 w-4 mr-1" />
					Back to products
				</Link>
			</div>
			<Product productId={id!} />
		</>
	);
}
