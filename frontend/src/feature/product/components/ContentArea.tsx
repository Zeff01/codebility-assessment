import { useProducts } from '@/hooks/useProducts'
import { useStore } from '@/store/useStore'
import React, { useMemo } from 'react'
import ProductCard from './ProductCard'

const ContentArea = () => {
  const { data: products } = useProducts()
  const { searchQuery, selectedCategory, setSearchQuery, setSelectedCategory } =
    useStore()

  const filteredProducts = useMemo(() => {
    if (!products) return []

    return products.filter((product) => {
      const matchesSearch = searchQuery
        ? product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true

      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true

      return matchesSearch && matchesCategory
    })
  }, [products, searchQuery, selectedCategory])

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              {filteredProducts.length === 0 &&
              (searchQuery || selectedCategory) ? (
                <div className="flex items-center text-amber-700">
                  <span className="mr-3 text-2xl">⚠️</span>
                  <div>
                    <p className="font-bold text-lg">No products found</p>
                    <p className="text-sm text-gray-600">
                      Try adjusting your search criteria
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="mr-3 text-green-600 text-2xl">✅</span>
                  <div>
                    <p className="font-bold text-lg text-gray-800">
                      Showing
                      <span className="text-blue-600 mx-2 bg-blue-50 px-2 py-1 rounded-lg">
                        {filteredProducts.length}
                      </span>
                      of
                      <span className="text-purple-600 mx-2">
                        {products?.length || 0}
                      </span>
                      products
                    </p>
                    {(searchQuery || selectedCategory) && (
                      <p className="text-sm text-gray-600 mt-1">
                        🔍 {searchQuery && `Searching for "${searchQuery}"`}
                        {searchQuery && selectedCategory && ' • '}
                        {selectedCategory &&
                          `In category "${selectedCategory.replace(
                            /'/g,
                            ' ',
                          )}"`}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        (searchQuery || selectedCategory) && (
          <div className="text-center py-16 lg:py-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-gray-200 max-w-lg mx-auto hover:shadow-2xl transition-all duration-500">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-4xl">🔍</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-60 animate-pulse"></div>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                No products found
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We couldn't find any products matching your search criteria. Try
                adjusting your filters or search terms.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('')
                  }}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                >
                  <span className="text-xl">🔄</span>
                  Clear All Filters
                </button>

                <p className="text-sm text-gray-500 mt-4">
                  💡 Try searching for "shirt", "ring", or browse all categories
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ContentArea
