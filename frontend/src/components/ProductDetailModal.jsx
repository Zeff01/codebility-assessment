import React from 'react';

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-light leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-96 object-contain"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {product.title}
              </h3>

              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl mr-2">★</span>
                <span className="text-lg font-semibold">
                  {product.rating?.rate || 'N/A'}
                </span>
                <span className="text-gray-500 ml-2">
                  ({product.rating?.count || 0} reviews)
                </span>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ${product.price}
                </span>
              </div>

              <div className="mb-6">
                <span className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 capitalize">
                  {product.category}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Description
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
