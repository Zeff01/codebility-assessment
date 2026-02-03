"use client"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import Image from "next/image"
import Link from "next/link"
import { ProductListSkeleton } from "./product-list-skeleton"
import { Product } from "@/types/product"

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products")
  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }
  return response.json()
}

export function ProductList() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  if (isLoading) {
    return <ProductListSkeleton />
  }

  if (error) {
    return <div className="text-red-500 text-center">Failed to load products. Please try again later.</div>
  }

  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: Product) => (
          <li key={product.id} className="max-w-[350px]">
            <Link href={`/products/${product.id}`}>
              <Card>
                <CardHeader>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-[300px] p-2 object-contain"
                  />
                </CardHeader>
                <CardContent>
                  <strong className="line-clamp-1">{product.title}</strong>
                  <div>Price: ${product.price}</div>
                  <div>Category: {product.category}</div>
                  <div>
                    Rating: {product.rating?.rate} ({product.rating?.count} reviews)
                  </div>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
