import React from 'react'

interface HeaderProps {
  productCount?: number
}

const Header = ({ productCount }: HeaderProps) => {
  return (
    <div className="relative bg-white/80 backdrop-blur-sm shadow-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                Premium Product Store
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0 mt-4"></div>
            </div>
            <p className="text-xl text-gray-700 font-medium max-w-2xl">
              ✨ Discover curated products with exceptional quality and
              unbeatable prices
            </p>
          </div>

          <div className="mt-8 lg:mt-0 grid grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {productCount || 0}
              </div>
              <div className="text-sm text-gray-600 font-semibold mt-1">
                Products
              </div>
              <div className="text-blue-500 text-lg mt-1">📦</div>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                4.8★
              </div>
              <div className="text-sm text-gray-600 font-semibold mt-1">
                Rating
              </div>
              <div className="text-yellow-500 text-lg mt-1">⭐</div>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-100 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Free
              </div>
              <div className="text-sm text-gray-600 font-semibold mt-1">
                Shipping
              </div>
              <div className="text-purple-500 text-lg mt-1">🚚</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
