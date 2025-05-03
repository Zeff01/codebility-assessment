import { Product } from "@/types/Product";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col h-full border rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
        <div className="flex justify-center items-center mb-4 h-48">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-md font-medium mb-2 line-clamp-2">
            {product.title}
          </h2>
        </div>
        <div className="mt-2 text-lg font-semibold text-green-600">
          ${product.price}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
