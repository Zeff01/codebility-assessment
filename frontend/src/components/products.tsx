import { fetchProducts } from "@/services/api";
import React from "react";
import Product from "./product";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Products = async () => {
  const products: ProductType[] = await fetchProducts();

  return (
    <main>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((prod) => (
          <li key={prod.id}>
            <Product product={prod} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
