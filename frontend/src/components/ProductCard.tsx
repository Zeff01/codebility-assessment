import Link from "next/link";
import RatingStars from "./RatingStars";

export default function ProductCard({
  product,
}: any) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-2xl border shadow-sm hover:shadow-xl transition overflow-hidden"
    >
      <div className="h-44 flex items-center justify-center bg-gray-50 p-4">
        <img
          src={product.image}
          className="h-28 object-contain group-hover:scale-110 transition"
        />
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
          {product.title}
        </h2>

        <RatingStars rate={product.rating.rate} />

        <p className="text-lg font-bold text-red-600">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
