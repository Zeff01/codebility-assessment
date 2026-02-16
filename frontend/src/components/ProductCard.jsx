import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col h-full"
    >
      <div className="relative pb-[100%] bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 capitalize mb-2">
          {product.category}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <div className="flex items-center text-sm text-gray-600">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{product.rating?.rate || 'N/A'}</span>
            <span className="ml-1">({product.rating?.count || 0})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
