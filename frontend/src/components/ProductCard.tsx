import Link from 'next/link';
import { Product } from '@/lib/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
        
        <div className="w-full h-48 flex items-center justify-center p-4 bg-gray-50 relative">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
            {product.title}
          </h3>
          <p className="text-2xl font-bold text-indigo-600 mt-auto">
            {formattedPrice}
          </p>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <span className="text-yellow-500 mr-1">★ {product.rating.rate}</span>
            ({product.rating.count} reviews)
          </div>
        </div>
      </div>
    </Link>
  );
}