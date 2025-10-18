import Image, { StaticImageData } from "next/image";

type cardProps = {
  imgSrc: string | StaticImageData;
  giftPercent: string;
  bgColor: string;
};

export default function Card({
  imgSrc,
  giftPercent,
  bgColor,
}: Readonly<cardProps>) {
  return (
    <div
      className={` h-[150px] md:h-[200px] md:w-[320px] lg:h-[250px] lg:w-[380px] ${bgColor} hover:scale-105 transition-all duration-500 hover:cursor-pointer rounded-[30px] flex items-center relative justify-center shadow-lg shadow-[${bgColor}] `}
    >
      <Image src={imgSrc} alt="" className="scale-50" />
      <p className="absolute right-5 bottom-5 max-sm:text-xl md:text-2xl text-amber-500">
        [{giftPercent}]
      </p>
    </div>
  );
}
