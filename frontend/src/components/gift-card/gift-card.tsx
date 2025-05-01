import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface GiftCardProps {
  name: string;
  logo: string;
  cashbackPercent: number;
  buttonText?: string;
}

const GiftCard = ({
  name,
  logo,
  cashbackPercent,
  buttonText = 'Buy Now And Get',
}: GiftCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={logo}
            alt={`${name} logo`}
            className="object-contain"
            fill
            sizes="96px"
          />
        </div>
        <h3 className="font-semibold text-gray-800 mb-1">{name}</h3>
      </CardContent>
      <CardFooter className="flex flex-col w-full bg-gray-50 p-4 rounded-b-lg">
        <p className="text-xs text-gray-600 mb-1">{buttonText}</p>
        <div className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full w-full text-center">
          {cashbackPercent}% back
        </div>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
