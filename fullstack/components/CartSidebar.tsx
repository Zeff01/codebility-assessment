'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  closeCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  checkoutCart,
} from '@/store/cartSlice';
import { setProducts } from '@/store/productsSlice';
import Toast from './Toast';

export default function CartSidebar() {
  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice, isOpen, isCheckingOut } = useAppSelector(
    (state) => state.cart
  );
  const products = useAppSelector((state) => state.products.items);
  const [showToast, setShowToast] = useState(false);

  const refetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success && data.data) {
        dispatch(setProducts(data.data));
      }
    } catch (error) {
      console.error('Failed to refetch products:', error);
    }
  };

  const handleCheckout = async () => {
    const result = await dispatch(checkoutCart());
    if (checkoutCart.fulfilled.match(result)) {
      setShowToast(true);
    }
  };

  return (
    <>
      {/* Success Toast - rendered outside cart visibility check */}
      {showToast && (
        <Toast
          message="Order placed successfully!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}

      {/* Cart UI - only shown when isOpen */}
      {!isOpen ? null : (
      <>
      {/* Backdrop */}
      <div
        id="cart-backdrop"
        className="fixed inset-0 z-40 bg-black/50 transition-opacity"
        onClick={() => dispatch(closeCart())}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div id="cart-sidebar" className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-gray-900 shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div id="cart-header" className="flex items-center justify-between border-b dark:border-gray-700 px-4 py-4">
            <h2 id="cart-title" className="text-lg font-semibold text-gray-900 dark:text-white">
              Shopping Cart ({totalItems})
            </h2>
            <button
              id="cart-close-button"
              onClick={() => dispatch(closeCart())}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close cart"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div id="cart-items-container" className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div id="cart-empty" className="flex flex-col items-center justify-center h-full text-center">
                <svg
                  className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <ul id="cart-items-list" className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.product.id}
                    id={`cart-item-${item.product.id}`}
                    className="flex gap-4 rounded-lg border dark:border-gray-700 p-3"
                  >
                    {/* Product Image */}
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 id={`cart-item-name-${item.product.id}`} className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                          {item.product.name}
                        </h3>
                        <button
                          id={`cart-item-remove-${item.product.id}`}
                          onClick={() =>
                            dispatch(removeFromCart(item.product.id))
                          }
                          className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <p id={`cart-item-stock-${item.product.id}`} className="text-xs text-gray-400 dark:text-gray-500">
                        {(() => {
                          const currentProduct = products.find(p => p.id === item.product.id);
                          const stock = currentProduct?.stock ?? item.product.stock;
                          return `${stock} left in stock`;
                        })()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="mt-auto flex items-center gap-2">
                        <button
                          id={`cart-item-decrease-${item.product.id}`}
                          onClick={() => {
                            dispatch(
                              updateQuantity({
                                productId: item.product.id,
                                quantity: item.quantity - 1,
                              })
                            );
                            refetchProducts();
                          }}
                          className="flex h-7 w-7 items-center justify-center rounded border dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span id={`cart-item-quantity-${item.product.id}`} className="w-8 text-center text-sm dark:text-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          id={`cart-item-increase-${item.product.id}`}
                          onClick={() => {
                            dispatch(
                              updateQuantity({
                                productId: item.product.id,
                                quantity: item.quantity + 1,
                              })
                            );
                            refetchProducts();
                          }}
                          className="flex h-7 w-7 items-center justify-center rounded border dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <span id={`cart-item-total-${item.product.id}`} className="ml-auto text-sm font-medium dark:text-white">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div id="cart-footer" className="border-t dark:border-gray-700 p-4 space-y-4">
              <div className="flex items-center justify-between text-base font-medium text-gray-900 dark:text-white">
                <span>Subtotal</span>
                <span id="cart-subtotal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                id="checkout-button"
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Checkout'
                )}
              </button>
              <button
                id="clear-cart-button"
                onClick={() => dispatch(clearCart())}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
      </>
      )}
    </>
  );
}
