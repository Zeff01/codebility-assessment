'use client';

import { useCartStore } from '@/lib/stores/store';
import Link from 'next/link';

export default function CartSummary() {
  const { items, totalPrice, removeItem, updateQuantity } = useCartStore();

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
      
      {items.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.productId} className="flex justify-between text-sm">
                <span className="text-gray-700">
                  {item.product?.name} x {item.quantity}
                </span>
                <span className="font-medium text-gray-900">
                  ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Shipping:</span>
              <span className="text-gray-900">
                {totalPrice > 100 ? (
                  <span className="text-green-600 font-medium">Free</span>
                ) : (
                  '$9.99'
                )}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
              <span>Total:</span>
              <span>${(totalPrice + (totalPrice > 100 ? 0 : 9.99)).toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="block w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}