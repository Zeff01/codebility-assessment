'use client';

import Image from 'next/image';
import Badge from './badge';
import Button from './button';

type GiftCardType = {
  title: string;
  image: string;
  price: number;
  discount: number;
  description: string;
  popular?: boolean;
};

type GiftCardProps = {
  gift: GiftCardType;
  className?: string;
};

export default function GiftCard({ gift, className = '' }: GiftCardProps) {
  const originalPrice = Math.round(gift.price / 100 * (1 + gift.discount / 100));

  return (
    <div
      className={`group relative rounded-xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${className}`}
    >
      {gift.popular && (
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="destructive">🔥 Popular</Badge>
        </div>
      )}

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={gift.image || '/placeholder.webp'}
          alt={`Image of ${gift.title}` || 'Image Placeholder'}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          {gift.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {gift.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">
            ${gift.price / 100}.00
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 line-through">
              ${originalPrice}.00
            </div>
            <Badge variant="destructive" className="text-sm">
              Save {gift.discount}%
            </Badge>
          </div>
        </div>

        <Button variant="gradient" className="w-full">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
