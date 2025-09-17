'use client'

import Image from 'next/image'
import { Product } from '@/types/product'
import { useStore } from '@/store/useStore'
import { truncateText } from '@/helper/truncateText'
import { formatPrice } from '@/helper/formatPrice'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openProductDetail } = useStore()

  return (
    <div
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-blue-200"
      onClick={() => openProductDetail(product)}
    >
      <div className="relative aspect-square mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 capitalize">
            {product.category}
          </span>
          <div className="flex items-center space-x-1 text-yellow-400">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 font-medium">
              {product.rating.rate}
            </span>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 text-base leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">
          {truncateText(product.title, 60)}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {truncateText(product.description, 100)}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
              {product.rating.count} reviews
            </span>
          </div>
        </div>

        <div className="pt-2">
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-4 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200 hover:shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
