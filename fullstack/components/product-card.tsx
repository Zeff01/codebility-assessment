"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  onClick: () => void;
}

export function ProductCard({
  name,
  price,
  image,
  rating,
  reviews,
  onClick,
}: ProductCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:scale-105 pt-0 gap-0"
    >
      <div className="relative w-full h-full aspect-square bg-muted overflow-hidden border-b">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 pt-6 pb-0 space-y-3">
        <h3 className="font-semibold text-foreground line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-foreground">
              {rating}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
        <div className="text-lg font-bold text-primary">
          ${price.toFixed(2)}
        </div>
      </div>
    </Card>
  );
}
