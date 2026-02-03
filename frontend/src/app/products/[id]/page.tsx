import { notFound } from "next/navigation"

import Image from "next/image"
import PageLayout from "@/components/shared/page-layout"
import { getProductById } from "@/features/product/data/getProductById"

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = await getProductById(id)
  if (!product) return notFound()

  return (
    <PageLayout title="Product Details">
      <div className="flex flex-col md:flex-row gap-8 items-start lg:w-2/3">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="w-full max-w-xs h-auto object-contain border rounded-lg bg-white p-4"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="text-lg font-semibold">${product.price}</div>
          <div className="text-sm text-gray-500">Category: {product.category}</div>
          <div className="text-base mt-2">{product.description}</div>
          <div className="mt-4">
            <span className="font-medium">Rating:</span> {product.rating.rate} / 5 ({product.rating.count} reviews)
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
