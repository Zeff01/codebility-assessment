import { Product } from "@/types/Product";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded hover:shadow-md cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
        <h2 className="text-md mt-2">{product.title}</h2>
        <p className="font-bold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
