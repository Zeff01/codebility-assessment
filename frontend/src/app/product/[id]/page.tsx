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
    <div className="p-6 max-w-3xl mx-auto">
      <Link href="/">
        <button className="mb-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          ← Back to Products
        </button>
      </Link>

      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-sm mb-4 object-contain border rounded-lg p-4 bg-white"
      />
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-semibold text-green-600">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
