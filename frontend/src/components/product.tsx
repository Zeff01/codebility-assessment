import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import type { ProductType } from "./products";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Card className="hover:scale-105 transition-all cursor-pointer">
      <CardHeader>
        <Image
          src={product.image}
          alt=""
          width={300}
          height={300}
          className="aspect-square object-contain bg-zinc-100 p-2 md:p-4 rounded-lg inset-shadow-sm"
        />
        <CardTitle className="text-center truncate">{product.title}</CardTitle>
        <Badge variant="secondary" className="mx-auto">
          {product.category}
        </Badge>
        <p className="text-center font-bold opacity-70">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
      </CardHeader>
    </Card>
  );
};

export default Product;
