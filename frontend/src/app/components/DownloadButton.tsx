"use client";

import Image, { StaticImageData } from "next/image";

type buttonProps = {
  title: string;
  imgSrc: string | StaticImageData;
  desc: string;
};

export default function Button({ title, imgSrc, desc }: Readonly<buttonProps>) {
  return (
    <button className="h-15 w-[15rem] shadow-lg bg-primary text-white rounded-full flex items-center justify-center gap-5">
      <Image src={imgSrc} alt="" />
      <div className="flex flex-col items-start">
        <p>{desc}</p>
        <h1 className="font-bold">{title}</h1>
      </div>
    </button>
  );
}
