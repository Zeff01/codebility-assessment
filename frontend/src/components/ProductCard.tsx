import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
    onClick: (product: Product) => void;
    viewMode?: "grid" | "list"; // Added viewMode prop
}

const StarIcon = () => (
    <svg
        className="w-4 h-4 text-yellow-400 mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const ProductCard = ({ product, onClick, viewMode = "grid" }: ProductCardProps) => {
    const { id, image, title, price, rating, category } = product;

    const formattedPrice = Number(price).toFixed(2);
    const formattedRating = Number(rating.rate).toFixed(1);

    const isListView = viewMode === "list";

    return (
        <div
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group
      ${isListView ? "flex h-full" : ""}`}
        >
            {/* Image */}
            <Link href={`/product/${id}`} aria-label={`View details for ${title}`} className={isListView ? "w-1/3" : ""}>
                <div
                    className={`relative bg-gray-100 dark:bg-gray-700 cursor-pointer
          ${isListView ? "h-full min-h-[200px]" : "h-48"}`}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={`object-contain p-4 group-hover:scale-105 transition-transform duration-300`}
                        sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
                    />
                </div>
            </Link>

            {/* Details */}
            <div className={`${isListView ? "w-2/3 p-6 flex flex-col justify-between" : "p-4"}`}>
                <Link href={`/product/${id}`} aria-label={`View details for ${title}`}>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {title}
                    </h3>
                </Link>

                <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        ${formattedPrice}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <StarIcon />
                        {formattedRating} ({rating.count})
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="inline-block px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full">
                        {category}
                    </span>
                    <button
                        onClick={() => onClick(product)}
                        type="button"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
                        aria-label={`Quick view of ${title}`}
                    >
                        Quick View
                    </button>
                </div>
            </div>
        </div>
    );
};
