'use client';

import Link from 'next/link';
import CartIcon from './CartIcon';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black text-gray-900 tracking-tighter">
                Shop<span className="text-blue-600">.</span>
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/products" 
                className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest"
              >
                Products
              </Link>
              <Link 
                href="/#featured" 
                className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest"
              >
                Featured
              </Link>
            </div>
          </div>

          {/* User Actions Section */}
          <div className="flex items-center gap-4">
            <CartIcon />
            <button className="hidden sm:block bg-gray-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition-all active:scale-95">
              ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
