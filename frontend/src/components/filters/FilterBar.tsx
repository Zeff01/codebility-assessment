'use client'

import { useState } from 'react'
import { useStore } from '@/store/useStore'
import { useCategories } from '@/hooks/useProducts'

export default function FilterBar() {
  const { searchQuery, selectedCategory, setSearchQuery, setSelectedCategory } =
    useStore()
  const { data: categories, isLoading } = useCategories()
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false)

  const activeFilterCount = (searchQuery ? 1 : 0) + (selectedCategory ? 1 : 0)

  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-white border-b border-gray-200 shadow-lg backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-pulse"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1 max-w-lg">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-blue-500 text-lg group-focus-within:scale-110 transition-transform duration-200 z-50">
                    🔍
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Search for amazing products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-lg hover:shadow-xl font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-200"
                  >
                    <span className="w-6 h-6 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center text-sm">
                      ✕
                    </span>
                  </button>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            <div className="lg:w-64">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-purple-500 text-lg group-focus-within:scale-110 transition-transform duration-200 z-50">
                    🏷️
                  </span>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  disabled={isLoading}
                  className="w-full pl-12 pr-12 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 capitalize appearance-none text-gray-900 transition-all duration-300 cursor-pointer disabled:opacity-50 shadow-lg hover:shadow-xl font-medium"
                >
                  <option value="">All Categories</option>
                  {categories?.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="capitalize py-2"
                    >
                      {category.replace(/'/g, ' ')}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <span className="text-gray-400 group-focus-within:text-purple-500 transition-colors duration-200 text-lg">
                    ▼
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('')
                  }}
                  className="px-6 py-3 text-gray-600 hover:text-red-600 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-red-300 rounded-2xl hover:bg-red-50 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  <span className="text-red-500">🔄</span>
                  Clear All
                </button>
              )}

              <button
                onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
                className="lg:hidden px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-sm flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className="text-lg">⚙️</span>
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="bg-white text-blue-600 text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {activeFilterCount > 0 && (
            <div className="mt-3 pt-3 border-t border-gradient-to-r from-transparent via-gray-300 to-transparent">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ✨ Active Filters:
                  </span>
                </div>
                {searchQuery && (
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-200 font-medium">
                    <span className="mr-2 text-blue-500">🔍</span>"{searchQuery}
                    "
                    <button
                      onClick={() => setSearchQuery('')}
                      className="ml-3 hover:text-red-600 hover:scale-110 transition-all duration-200 w-5 h-5 bg-blue-200 hover:bg-red-100 rounded-full flex items-center justify-center text-xs"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {selectedCategory && (
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-gradient-to-r from-green-50 to-emerald-100 text-green-800 border-2 border-green-200 capitalize shadow-md hover:shadow-lg transition-all duration-200 font-medium">
                    <span className="mr-2 text-green-500">🏷️</span>
                    {selectedCategory.replace(/'/g, ' ')}
                    <button
                      onClick={() => setSelectedCategory('')}
                      className="ml-3 hover:text-red-600 hover:scale-110 transition-all duration-200 w-5 h-5 bg-green-200 hover:bg-red-100 rounded-full flex items-center justify-center text-xs"
                    >
                      ✕
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {isFiltersExpanded && (
        <div className="lg:hidden border-t border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50 backdrop-blur-sm">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-blue-500 text-lg">🔍</span>
                  Search Products
                </label>
                <input
                  type="text"
                  placeholder="Search for amazing products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 shadow-lg font-medium"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-purple-500 text-lg">🏷️</span>
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 capitalize appearance-none text-gray-900 shadow-lg font-medium cursor-pointer"
                >
                  <option value="">All Categories</option>
                  {categories?.map((category) => (
                    <option
                      key={category}
                      value={category}
                      className="capitalize py-2"
                    >
                      {category.replace(/'/g, ' ')}
                    </option>
                  ))}
                </select>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('')
                    setIsFiltersExpanded(false)
                  }}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 px-6 rounded-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <span className="text-lg">🔄</span>
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
