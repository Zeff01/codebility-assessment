"use client";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
import { ProductType } from "@/app/page";

const Product = ({ product }: { product: ProductType }) => {
  const router = useRouter();

  return (
    <Card
      className="hover:scale-105 transition-all cursor-pointer"
      onClick={() => router.push(`/${product.id}`)}
    >
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
