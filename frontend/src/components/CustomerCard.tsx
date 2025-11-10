import Image from "next/image";
import React from "react";

interface CustomerCardProps {
  comment: string;
  stars: string;
  brand: string;
}

const CustomerCardComponent: React.FC<CustomerCardProps> = ({
  comment,
  stars,
  brand,
}) => {
  return ( 
    <div className="flex flex-col bg-[#ffffff] rounded-xl shadow-[0_4px_10px_#00000040] border border-gray-200 px-8 py-11 w-full md:w-83 items-center space-y-6">
      <p className="text-[#6d6d6d] text-[12px] font-medium text-center"> {comment}</p>
        <Image
          src={stars}
          alt="stars"
          width={120}
          height={24}
          className="object-contain rounded-3xl"
        />
        <Image
          src={brand}
          alt="brand"
          width={112}
          height={38}
          className="object-contain"
        />
    </div>
  );
};

export default CustomerCardComponent;