import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AddToCart } from "@/components/add-to-cart";
import { formatCurrency } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <CardHeader className="relative p-0">
        <Link href={`/products/${product.id}`} className="block">
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
        <Badge className="absolute left-4 top-4">{product.category}</Badge>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-xs text-muted-foreground">
              {product.reviewCount} reviews
            </p>
          </div>
          <div className="text-right text-sm font-semibold">
            {formatCurrency(product.price)}
          </div>
        </div>
        <p className="max-h-10 overflow-hidden text-sm text-muted-foreground">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <AddToCart
          item={{
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1,
          }}
          maxQuantity={product.stock}
        />
      </CardFooter>
    </Card>
  );
}
