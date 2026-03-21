'use client';

import AddToCartButton from '@/components/buttons/AddToCart';
import QuantitySelector from '@/components/QuantitySelector';
import StockStatus from '@/components/StockStatus';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/lib/types/types';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface ProductContentProps {
  product: Product;
}

export default function ProductContent({ product }: ProductContentProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isAddingToCart } = useCart();

  const handleAddToCart = async () => {
    try {
      await addToCart(product, quantity);
      toast.success(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart!`);
      setQuantity(1);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to add item to cart');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Product Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < Math.floor(product.rating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
                  }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-600">
          Free shipping on orders over $100
        </p>
      </div>

      {/* Stock Status */}
      <StockStatus inStock={product.inStock} />

      {/* Description */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">About this item</h2>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Purchase Section */}
      <div className="border-t pt-6 space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Quantity:</span>
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={setQuantity}
            maxQuantity={10}
            disabled={!product.inStock}
          />
        </div>

        {/* Add to Cart Button */}
        <div className="relative">
          <AddToCartButton
            onClick={handleAddToCart}
            isLoading={isAddingToCart}
            disabled={!product.inStock}
            label={product.inStock ? 'Add to Cart' : 'Out of Stock'}
          />
        </div>

        <button
          disabled={!product.inStock}
          className="w-full py-3 px-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Buy Now
        </button>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-sm text-gray-700">
        <p>✓ Free shipping on orders over $100</p>
        <p>✓ 30-day money-back guarantee</p>
        <p>✓ 1-year warranty included</p>
      </div>
    </div>
  );
}