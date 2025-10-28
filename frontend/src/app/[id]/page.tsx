import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { notFound } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
      next: { revalidate: 60 }, 
    });

    if (!res.ok) return notFound();

    const product: Product = await res.json();
    if (!product?.id) return notFound();

    return (
      <main className="max-w-4xl mx-auto px-6 py-6 lg:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-medium hover:bg-indigo-100 transition"
        >
          <HiArrowLeft size={20} /> Back
        </Link>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6 mt-6">
          <div className="relative w-full h-96">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl font-semibold text-indigo-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500 capitalize">
              Category: {product.category}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold text-gray-700">Rating:</span>
              <span className="text-yellow-500">{product.rating.rate} ★</span>
              <span className="text-gray-400 text-sm">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  } catch {
    return notFound();
  }
}
