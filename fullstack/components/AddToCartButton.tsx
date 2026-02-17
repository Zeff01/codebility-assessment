'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { useAppDispatch } from '@/store/hooks';
import { addToCart, closeCart, openCart } from '@/store/cartSlice';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    dispatch(addToCart({ product, quantity }));

    // Brief visual feedback
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAdding(false);
    setQuantity(1);

    // Show cart sidebar
    dispatch(openCart());
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div id="add-to-cart-section" className="space-y-4">
      {/* Quantity Selector */}
      <div id="quantity-selector" className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Quantity:</span>
        <div className="flex items-center border dark:border-gray-600 rounded-lg">
          <button
            id="quantity-decrease"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span id="quantity-value" className="w-12 text-center font-medium dark:text-white">{quantity}</span>
          <button
            id="quantity-increase"
            onClick={increaseQuantity}
            disabled={quantity >= product.stock}
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <span id="stock-available" className="text-sm text-gray-500 dark:text-gray-400">
          {product.stock} available
        </span>
      </div>

      {/* Add to Cart Button */}
      <button
        id="add-to-cart-button"
        onClick={handleAddToCart}
        disabled={isAdding || product.stock === 0}
        className="w-full rounded-lg bg-indigo-600 px-6 py-4 text-lg font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {isAdding ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Adding...
          </>
        ) : product.stock === 0 ? (
          'Out of Stock'
        ) : (
          <>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </>
        )}
      </button>
    </div>
  );
}
