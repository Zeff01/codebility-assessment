import type { Product } from "../../api/product";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  product?: Product;
  onClose?: () => void;
}

const ProductDetail: React.FC<Props> = ({ product, onClose }) => {
  return (
    <AnimatePresence>
      {" "}
      {/* Added Framer-Motion with help of AI because im not fully proficient with this */}
      {product && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          onClick={onClose}
        >
          <motion.div
            key="sheet"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="container mx-auto w-full lg:h-1/3 p-[1em] relative flex flex-col md:flex-row gap-[1em]
                       border-2 border-[rgba(75,30,133,0.5)] rounded-t-xl 
                       bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)]
                       text-white font-nunito backdrop-blur-[12px]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="absolute top-4 left-4 z-50 bg-purple-200/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {product.category}
            </span>

            <button
              className="absolute top-4 right-4 h-fit w-fit px-[1em] py-[0.25em] border border-white/40 rounded-full 
                         flex justify-center items-center gap-[0.5em] overflow-hidden 
                         hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
              onClick={onClose}
            >
              ✕
            </button>

            <img
              src={product.image}
              alt={product.title}
              className="w-48 h-48 object-contain mx-auto relative flex top-4 md:top-10 left-0"
            />

            <div className="flex-1 overflow-y-auto flex flex-col justify-center">
              <h1 className="text-[2em] font-extrabold mb-2">
                {product.title}
              </h1>
              <p className="text-green-300 font-bold text-xl mb-4">
                ${product.price}
              </p>
              <p className="text-[0.95em] text-white/90">
                {" "}
                {/* added more details to the pooduct check! */}
                {product.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetail;
