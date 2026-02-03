import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getProducts } from "@/data/getProducts"
import Image from "next/image"
import Link from "next/link"

export default async function HomePage() {
  const products = await getProducts()
  console.log("products :>> ", products)
  return (
    <div className="container mx-auto p-4 lg:p-6 space-y-4 lg:space-y-6">
      <h1 className="text-3xl lg:text-4xl font-medium  lg:px-8">Product List</h1>
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product: any) => (
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
    </div>
  )
}
