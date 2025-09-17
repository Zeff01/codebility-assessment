'use client'

import Image from 'next/image'
import { useStore } from '@/store/useStore'
import { useEffect } from 'react'
import { formatPrice } from '@/helper/formatPrice'

export default function ProductDetail() {
  const { selectedProduct, isDetailModalOpen, closeProductDetail } = useStore()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProductDetail()
      }
    }

    if (isDetailModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isDetailModalOpen, closeProductDetail])

  if (!isDetailModalOpen || !selectedProduct) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Product Details
            </h2>
            <p className="text-gray-600 mt-1">Everything you need to know</p>
          </div>
          <button
            onClick={closeProductDetail}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-full transition-all duration-200 hover:shadow-md"
            aria-label="Close modal"
          >
            <span className="text-xl">✕</span>
          </button>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden group">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 capitalize">
                    {selectedProduct.category.replace(/'/g, ' ')}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                  {selectedProduct.title}
                </h1>

                <div className="flex items-center space-x-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {formatPrice(selectedProduct.price)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(selectedProduct.rating.rate)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {selectedProduct.rating.rate} out of 5
                    </span>
                    <span className="text-sm text-gray-500">
                      ({selectedProduct.rating.count} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                  <span className="text-blue-600">📝</span>
                  <span>Description</span>
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-base">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center space-x-2 text-green-700">
                    <span className="text-green-600">✓</span>
                    <span className="font-medium">Free Shipping</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center space-x-2 text-blue-700">
                    <span className="text-blue-600">🛡️</span>
                    <span className="font-medium">2 Year Warranty</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2">
                  <span className="text-lg">🛒</span>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
