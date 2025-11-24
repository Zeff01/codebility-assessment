"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart, Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/app/store/cart";
import { toast } from "sonner";

interface ProductDetailProps {
  productId: string;
}

function QuantitySelector({
  quantity,
  setQuantity,
  max = 99,
}: {
  quantity: number;
  setQuantity: (q: number) => void;
  max?: number;
}) {
  return (
    <div className="flex items-center border border-border rounded-lg">
      <Button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="cursor-pointer bg-transparent text-black hover:bg-muted disabled:opacity-50"
        disabled={quantity <= 1}
        size="icon"
      >
        −
      </Button>
      <span className="px-4 font-medium">{quantity}</span>
      <Button
        onClick={() => setQuantity(Math.min(max, quantity + 1))}
        className="cursor-pointer bg-transparent text-black hover:bg-muted disabled:opacity-50"
        disabled={quantity >= max}
        size="icon"
      >
        +
      </Button>
    </div>
  );
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading)
    return (
      <div className="flex justify-center items-center py-12 text-muted-foreground">
        Loading product...
      </div>
    );

  if (error || !product)
    return (
      <div className="text-center py-12 text-destructive">
        {error || "Product not found"}
      </div>
    );

  const handleAddToCart = () => {
    add(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);

    toast.success(`${product!.name} added to cart`, {
      description: `Subtotal: $${(product!.price * quantity).toFixed(2)}`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto p-4">
      {/* Product Image */}
      <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden">
        <div className="relative w-full h-full aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-sm">
                {product.category}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-destructive"
            >
              <Heart className="w-6 h-6" />
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold text-foreground">
              {product.rating}
            </span>
            <span className="text-muted-foreground text-sm">
              ({product.reviews} reviews)
            </span>
          </div>
        </div>

        {/* Price & Stock */}
        <div className="border-t border-b py-4">
          <div className="text-4xl font-bold text-primary mb-2">
            ${product.price.toFixed(2)}
          </div>
          <p className="text-sm text-muted-foreground">
            {product.stock > 0 ? (
              <span className="text-primary font-medium">
                {product.stock} in stock
              </span>
            ) : (
              <span className="text-destructive font-medium">Out of stock</span>
            )}
          </p>
        </div>

        <p className="text-foreground leading-relaxed">{product.description}</p>

        {/* Quantity & Add to Cart */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
            max={product.stock}
          />
          <Button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full sm:w-auto py-4 font-semibold"
          >
            {added ? (
              <>
                <Check size={16} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart size={16} /> Add to Cart
              </>
            )}
          </Button>
        </div>

        {/* Product Features */}
        <Card className="bg-muted border-0">
          <CardContent>
            <h3 className="font-semibold text-foreground mb-3">
              Product Features
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" /> Free shipping on
                orders over $50
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" /> 30-day money-back
                guarantee
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" /> 1-year warranty
                included
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
