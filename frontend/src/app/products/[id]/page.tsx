import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Product } from "@/types/product";
import { Title, ImageWrapper, Content } from "./MotionDetail";

async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl w-full px-4 py-8">
        <div className="mb-6">Product not found.</div>
        <Link href="/products"><Button>Back to products</Button></Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl w-full px-4 py-8">
      <Card>
        <CardHeader>
          <Title>{product.title}</Title>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWrapper>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-md bg-black/5 dark:bg-white/10"
              />
            </ImageWrapper>
            <Content>
              <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
              <div className="text-sm text-foreground/80">Category: {product.category}</div>
              {product.rating && (
                <div className="text-sm text-foreground/80">Rating: {product.rating.rate} ({product.rating.count})</div>
              )}
              <p className="leading-relaxed">{product.description}</p>
              <div className="pt-2 flex gap-3">
                <Button className="cursor-pointer">Add to cart</Button>
                <Link href="/products" className="cursor-pointer"><Button variant="outline">Back</Button></Link>
              </div>
            </Content>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


