"use client";
import React, { useState } from "react";
import Product from "./product";
import { ProductType } from "@/app/page";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";

const Products = ({ products }: { products: ProductType[] }) => {
  const [search, setSearch] = useState<string>();
  return (
    <main>
      <div className="flex items-center gap-2 mx-auto max-w-sm">
        <label htmlFor="search" className="cursor-pointer">
          <FaSearch className="text-lg" />
        </label>
        <Input
          id="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
      <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((prod) => {
          if (
            search &&
            !prod.title.toUpperCase().includes(search.toUpperCase())
          )
            return;
          return (
            <li key={prod.id}>
              <Product product={prod} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
