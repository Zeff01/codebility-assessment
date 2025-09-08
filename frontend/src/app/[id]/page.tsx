import { ProductType } from "@/components/products";
import { Badge } from "@/components/ui/badge";
import { fetchProduct } from "@/services/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const prod: ProductType = await fetchProduct(id);

  return (
    <main className="max-w-7xl mx-auto px-5">
      <div className="py-4">
        <Link
          href={"/"}
          className="text-zinc-800 md:text-zinc-600 hover:text-zinc-800 transition-colors flex items-center gap-2"
        >
          <FaArrowLeft className="text-xl" />
          <p className="text-3xl font-bold">Home</p>
        </Link>
      </div>
      <section className="flex flex-col md:flex-row gap-5">
        <Image
          src={prod.image}
          alt=""
          width={400}
          height={400}
          className="aspect-square object-contain mx-auto bg-zinc-100 p-4 rounded-lg inset-shadow-sm"
        />
        <article className="flex flex-col items-center md:items-start gap-2 relative flex-1">
          <h1 className="text-center md:text-start text:lg lg:text-2xl font-medium md:mr-30">
            {prod.title}
          </h1>
          <Badge variant="secondary">{prod.category}</Badge>
          <p className="top-0 right-2 md:absolute text-2xl font-bold opacity-70">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(prod.price)}
          </p>
          <p className="text-center md:text-start text-zinc-700 px-5 md:p-0 md:mr-20">
            {prod.description}
          </p>
        </article>
      </section>
    </main>
  );
};

export default ProductPage;
