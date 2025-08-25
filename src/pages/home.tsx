import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/product";
import type { Product } from "../../api/product";
import ProductCard from "../components/productcard";
import { Player } from "@lottiefiles/react-lottie-player";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-purple-600 text-4xl font-bold uppercase">
          Loading products...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Player
          autoplay
          loop
          src="https://lottie.host/63d8a532-c555-412e-b1a1-de75ebf24ed9/uS3NZYdi9J.json"
          className="h-[900px] w-[900px]"
        />
        <p className="text-red-500 text-lg font-bold uppercase">
          Failed to fetch products. Please try again later.
        </p>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      {/* Search */}
      <div className="relative w-1/2 mx-auto mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border-b-2 border-gray-300 bg-transparent outline-none transition-colors duration-300 focus:border-purple-600 peer"
        />
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-purple-600 scale-x-0 origin-left transition-transform duration-300 peer-focus:scale-x-100"></span>
        <span className="absolute bottom-0 left-0 h-full w-0 bg-purple-100/30 transition-all duration-300 peer-focus:w-full"></span>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-3 items-center justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full border ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-purple-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 mt-20">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
