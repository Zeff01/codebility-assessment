"use client";

import Image from "next/image";

interface StoreCardProps {
  image: string;
  storeName: string;
  promo?: number; // optional
}

export default function StoreCardComponent({ image, storeName, promo }: StoreCardProps) {
  return (
    <div
      className="w-full sm:w-52 bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 sm:hover:scale-110 hover:z-10 cursor-pointer border-2 border-gray-200"
      style={{ transformOrigin: "center" }}
    >
      {/* Image Section */}
      <div className="w-auto aspect-video bg-gray-100 flex items-center justify-center relative rounded-t-xl overflow-hidden">
        <Image
          src={image}
          alt={storeName}
          width={100}
          height={100}
          className="object-contain rounded-3xl"
        />
      </div>

      {/* Details Section */}
      <div className="p-4 text-start min-h-25">
        <h3 className="text-[14px] font-semibold text-[#494c56]">{storeName}</h3>

        {promo !== undefined && (
          <>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            Buy Now And Get 
          </p>
          <p className="bg-[#339933] text-sm pl-1 font-semibold rounded-r-2xl">{promo}% More</p>
          </>

        )}
      </div>
    </div>
  );
}
