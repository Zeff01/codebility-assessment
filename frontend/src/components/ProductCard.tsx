"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/${product.id}`}>
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer max-w-xs w-full mx-auto">
        <div className="relative w-full h-56 mb-4 flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          ) : (
            <span className="text-gray-500 font-medium">No Image</span>
          )}
        </div>
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-lg font-bold text-gray-900 mt-2">${product.price}</p>
      </div>
    </Link>
  );
}
