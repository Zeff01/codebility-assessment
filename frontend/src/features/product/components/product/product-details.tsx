"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Product } from "@/features/product/types/product";
import { cn } from "@/lib/utils";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { type ComponentProps, useState } from "react";

type ProductDetailsProps = ComponentProps<"div"> & {
	product: Product;
};

export function ProductDetails({ product, ...props }: ProductDetailsProps) {
	const [quantity, setQuantity] = useState(1);

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

  const stars = [1, 2, 3, 4, 5];
  const rating = product.rating?.rate ?? 0;

	return (
		<div {...props} className={cn("", props.className)}>
			<div className="grid md:grid-cols-2 gap-8 lg:gap-16">
				{/* Product Image */}
				<div className="relative aspect-square bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
					<Image
						src={product.image || "/placeholder.svg"}
						alt={product.title}
						fill
						className="object-contain p-6"
						sizes="(max-width: 768px) 100vw, 50vw"
						priority
					/>
				</div>

				{/* Product Info */}
				<div className="flex flex-col">
					{/* Category Badge */}
					<Badge>{product.category}</Badge>

					{/* Title */}
					<h1 className="text-2xl md:text-3xl font-bold text-gray-900">
						{product.title}
					</h1>

					{/* Rating */}
					<div className="flex items-center gap-1 mt-3 mb-5">
            {stars.map((star) => (
              <Star
                key={star}
                className={cn(
                  "h-4 w-4",
                  star <= rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300",
                )}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              {rating} ({product.rating?.count ?? 0} reviews)
            </span>
          </div>

					{/* Price */}
					<div>
						<span className="text-3xl font-bold text-gray-900">
							${product.price?.toFixed(2)}
						</span>
						<p className="text-sm text-green-600 mt-1">
							In stock and ready to ship
						</p>
					</div>

					<Separator />

					{/* Description */}
					<div className="mb-6 text-gray-600">
						<p className="text-sm md:text-base">{product.description}</p>
					</div>

					{/* Quantity Selector */}
					<div className="mb-6">
						<label
							htmlFor="quantity"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Quantity
						</label>
						<div className="flex items-center border border-gray-300 rounded-md w-fit">
							<Button
								type="button"
								variant="icon"
								onClick={decreaseQuantity}
								disabled={quantity <= 1}
								className="h-10 w-10"
							>
								<Minus className="h-4 w-4" />
							</Button>
							<div className="w-12 text-center">{quantity}</div>
							<Button
								type="button"
								variant="icon"
								onClick={increaseQuantity}
								className="h-10 w-10"
							>
								<Plus className="h-4 w-4" />
							</Button>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap gap-4 mb-8">
						<Button type="button">
							<ShoppingCart className="mr-2 h-4 w-4" />
							Add to Cart
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
