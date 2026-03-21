'use client';

import Image from 'next/image';
import { Product } from '@/lib/types/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a href={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full">
        {/* Image Container with solid background */}
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {!product.inStock && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex items-center justify-center">
              <span className="bg-slate-900 text-white px-6 py-3 rounded-full font-black text-sm tracking-widest shadow-2xl">
                OUT OF STOCK
              </span>
            </div>
          )}

          <div className="absolute top-4 left-4">
            <span className="bg-white text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg border border-slate-100">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs ${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400'
                    : 'text-slate-200'
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-[10px] text-slate-400 ml-1 font-bold tracking-wider">
              {product.reviews} REVIEWS
            </span>
          </div>

          <h3 className="font-black text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors text-xl leading-tight tracking-tight">
            {product.name}
          </h3>

          <div className="mt-auto pt-6 border-t border-slate-50 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Price</span>
              <span className="text-2xl font-black text-slate-900">
                ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            
            <div className={`flex items-center gap-2 mb-1`}>
              <span className={`w-2.5 h-2.5 rounded-full ${product.inStock ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.5)]'}`} />
              <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${product.inStock ? 'text-emerald-600' : 'text-rose-600'}`}>
                {product.inStock ? 'In Stock' : 'Alert'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
