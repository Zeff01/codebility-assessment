'use client';

import { useCartStore } from '@/lib/stores/store';
import Link from 'next/link';

export default function CartSummary() {
  const { items, totalPrice } = useCartStore();
  const shippingThreshold = 100;
  const shippingCost = 9.99;
  const isFreeShipping = totalPrice > shippingThreshold;
  const total = totalPrice + (isFreeShipping ? 0 : shippingCost);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
      <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">Order Summary</h2>

      {items.length === 0 ? (
        <p className="text-slate-400 text-center py-8 font-medium italic">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center text-slate-600">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 font-medium">Shipping</span>
              <span className={`font-bold ${isFreeShipping ? 'text-emerald-600' : 'text-gray-900'}`}>
                {isFreeShipping ? 'FREE' : `$${shippingCost.toFixed(2)}`}
              </span>
            </div>
            {!isFreeShipping && (
              <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest bg-blue-50 p-2 rounded-lg text-center">
                Add ${(shippingThreshold - totalPrice).toFixed(2)} more for FREE shipping
              </p>
            )}
          </div>

          <div className="border-t border-slate-100 pt-6 mb-8">
            <div className="flex justify-between items-end">
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Total cost</span>
              <span className="text-3xl font-black text-gray-900 tracking-tight">${total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="group relative block w-full bg-gray-900 hover:bg-blue-600 text-white font-black py-5 px-8 rounded-2xl text-center transition-all duration-300 shadow-xl hover:shadow-blue-500/25 active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              PROCEED TO CHECKOUT
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>

          <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure Checkout
          </div>
        </>
      )}
    </div>
  );
}