import { ProductDetailContent } from "@/components/content/ProductDetailContent";
import { notFound } from "next/navigation";

interface ProductPageProps {
	params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
	try {
		const { id } = await params;
		const productId = parseInt(id);

		if (isNaN(productId)) {
			notFound();
		}

		return <ProductDetailContent productId={productId} />;
	} catch {
		notFound();
	}
}
