import Link from "next/link";
import { getProductDetail } from "@/lib/api";
import Image from "next/image";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id: productId } = await params;
  const product = await getProductDetail(productId);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-lg shadow-xl">
        <div className="lg:w-1/3 flex items-center justify-center p-8 border border-gray-100 rounded-lg relative h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-contain"
          />
        </div>

        <div className="lg:w-2/3">
          <p className="text-sm font-medium text-indigo-600 uppercase mb-2">
            {product.category}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          <div className="flex items-center text-xl mb-6">
            <span className="text-yellow-500 mr-2">
              ★ {product.rating.rate}
            </span>
            <span className="text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-5xl font-extrabold text-indigo-700 mb-6">
            {formattedPrice}
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
            Product Description
          </h2>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <button className="mt-8 w-full lg:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md">
            Add to Cart
          </button>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block mt-8 text-indigo-600 hover:text-indigo-800 font-medium transition"
      >
        &larr; Back to Product List
      </Link>
    </div>
  );
}
