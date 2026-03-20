'use client';

import { useCartStore } from '@/lib/stores/store';
import CartSummary from '@/components/CartSummary';
import QuantitySelector from '@/components/QuantitySelector';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();

  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-gray-900 mb-12 tracking-tight">
          Your Shopping <span className="text-blue-600">Cart</span>
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-2xl mx-auto">
            <div className="text-6xl mb-6 font-serif">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is feeling light</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. 
              Explore our premium collection and find something special.
            </p>
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div 
                  key={item.productId}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow group"
                >
                  {/* Product Image */}
                  <div className="relative w-full sm:w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                    {item.product?.image && (
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Link 
                          href={`/products/${item.productId}`}
                          className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {item.product?.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.productId)}
                          className="text-gray-400 hover:text-rose-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-sm text-slate-500 font-medium mb-4">{item.product?.category}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Qty</span>
                        <QuantitySelector
                          quantity={item.quantity}
                          onQuantityChange={(newQty) => updateQuantity(item.productId, newQty)}
                          maxQuantity={10}
                        />
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-slate-400 block font-bold uppercase tracking-widest leading-none mb-1">Total</span>
                        <span className="text-xl font-black text-gray-900">
                          ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:sticky lg:top-24">
              <CartSummary />
              <div className="mt-6 text-center">
                <Link 
                  href="/products"
                  className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-[0.2em]"
                >
                  ← Back to Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
