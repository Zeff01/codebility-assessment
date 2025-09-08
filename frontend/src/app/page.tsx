import Header from "@/components/header";
import Products from "@/components/products";
import { fetchProducts } from "@/services/api";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Home = async () => {
  const products: ProductType[] = await fetchProducts();

  if (products instanceof Error)
    return (
      <div className="max-w-7xl mx-auto px-5">
        <Header />
        <p className="text-xl font-medium text-zinc-400">
          Products are currently unavailable
        </p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header />
      <Products products={products} />
    </div>
  );
};

export default Home;
