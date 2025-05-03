import { Product } from "@/types/Product";
import Link from "next/link";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="p-4 text-center text-red-600">
        <p>Failed to load product.</p>
        <Link href="/">
          <button className="mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            ← Back to Products
          </button>
        </Link>
      </div>
    );
  }

  const product: Product = await res.json();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image section */}
        <div className="flex justify-center items-start border rounded">
          <div className="bg-white p-4 w-fit max-w-xs">
            <img
              src={product.image}
              alt={product.title}
              className="h-auto w-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Info section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">
            ${product.price}
          </p>

          <div className="mt-6">
            <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
              Category: {product.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
