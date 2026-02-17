'use client';

import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { openCart } from '@/store/cartSlice';

export default function Header() {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector((state) => state.cart.totalItems);

  return (
    <header id="header" className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link id="header-logo" href="/" className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Store</span>
          </Link>

          {/* Navigation */}
          <nav id="header-nav" className="hidden md:flex items-center space-x-8">
            <Link
              id="nav-products"
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Products
            </Link>
          </nav>

          {/* Cart Button */}
          <button
            id="cart-button"
            onClick={() => dispatch(openCart())}
            className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Open cart"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {totalItems > 0 && (
              <span id="cart-badge" className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
