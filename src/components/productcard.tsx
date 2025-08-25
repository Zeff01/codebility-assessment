import type { Product } from "../../api/product";
import { useState } from "react";
import ProductDetail from "../pages/productdetail";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative flex flex-col w-100 border-black border bg-white bg-clip-border text-gray-700 shadow-2xl hover:shadow-lg transition-shadow">
        <div className="relative mx-6 -mt-10 h-80 overflow-hidden rounded-xl drop-shadow-4xl">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />{" "}
          {/* displayed image check! */}
        </div>

        <div className="p-6 flex-1 flex flex-col justify-center items-center">
          <h5 className="mb-2 text-center font-bold text-xl text-blue-gray-900 antialiased">
            {" "}
            {/* displayed name of the product check! */}
            {product.title}
          </h5>
          <p className="text-green-500 text-center text-lg font-semibold">
            {" "}
            {/* displayed price check! */}${product.price}
          </p>
        </div>

        <div className="p-6 pt-0 mt-auto flex justify-center">
          <button
            onClick={openModal}
            type="button"
            className="relative z-10 text-purple-900 flex justify-center border-purple-300 items-center gap-2 px-4 py-2 mx-auto overflow-hidden text-lg before:-z-10 font-semibold text-gray-50 border shadow-xl bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:-left-full before:w-full before:aspect-square before:rounded-full before:bg-purple-500 hover:text-white  before:transition-all before:duration-700 before:hover:left-0 before:hover:scale-150 group"
          >
            View Details
            <svg
              className="w-8 h-8 p-2 text-gray-50 rotate-45 border border-gray-700 rounded-full ease-linear duration-300 group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50 group-hover:shadow-xl"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-purple-800"
              />
            </svg>
          </button>
        </div>
      </div>
      {isModalOpen && <ProductDetail product={product} onClose={closeModal} />}{" "}
      {/* when the button "View Details" is clicked will popped the modal from Product Detail! */}
    </>
  );
};

export default ProductCard;
