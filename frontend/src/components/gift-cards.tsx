import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import PetSmart from "../../public/petsmart.jpg";
import Amazon from "../../public/amazon.jpg";
import DoorDash from "../../public/doordash.jpg";
import Mobil from "../../public/mobil.jpg";
import StarBucks from "../../public/starbucks.png";
import Walmart from "../../public/walmart.png";
import WayFair from "../../public/wayfair.png";
import Image from "next/image";

const shop1 = [
  {
    id: "1",
    title: "Petsmart",
    percentage: "6%",
    src: PetSmart,
  },
  {
    id: "2",
    title: "DoorDash",
    percentage: "1.5%",
    src: DoorDash,
  },
  {
    id: "3",
    title: "Walmart Canada",
    percentage: "1%",
    src: Walmart,
  },
  {
    id: "4",
    title: "Starbucks",
    src: StarBucks,
  },
  {
    id: "5",
    title: "Wayfair",
    percentage: "1%",
    src: WayFair,
  },
];

const shop2 = [
  {
    id: "6",
    title: "Esso and Mobil",
    percentage: "1%",
    src: Mobil,
  },
  {
    id: "7",
    title: "Amazon",
    src: Amazon,
  },
];

export default function GiftCards() {
  return (
    <div className='mt-14 w-full'>
      <div className='w-full flex flex-col justify-center items-center gap-10'>
        <div className=' text-center  flex flex-col items-center'>
          <h1 className='text-3xl lg:text-4xl text-violet-900 font-bold leading-[3rem] w-full lg:w-[25rem]'>
            Send A Gift Card and Collect Rewards
          </h1>
          <p className='text-xs w-full lg:w-[45rem] text-center mt-5'>
            Codey provides unbeatable deals on the gift cards you love. Buy for
            a friend or better yet, for yourself and collect rewards. With
            Moola, giving the perfect gift and saving money on the brands you
            love has never been easier or more convenient. Shop over 250 brands
            across Canada.
          </p>
        </div>

        <div className='w-full flex gap-8 flex-wrap mt-10 justify-center'>
          {shop1.map((shop, index) => (
            <div
              key={index}
              className='bg-gray-200 border border-gray-300 shadow-md shadow-gray-300 rounded-2xl w-[13rem] flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out'
            >
              <div className=' p-5'>
                <div className=' relative w-[100px] h-[100px]'>
                  <Image
                    src={shop.src}
                    alt={shop.title}
                    fill
                    className='bg-cover rounded-lg'
                  />
                </div>
              </div>
              <div className='p-5 bg-white w-full h-full rounded-b-lg'>
                <h1 className='font-semibold text-muted-foreground'>
                  {shop.title}
                </h1>
                <span className='text-sm tracking-tight'>Buy Now And Get</span>
                {shop.percentage && (
                  <div className='bg-green-500 text-white font-semibold px-3 rounded-r-full text-sm p-0.5'>
                    {shop.percentage} More
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className='w-full flex flex-col lg:flex-row gap-8 items-center  justify-between'>
          {shop2.map((shop, index) => (
            <div
              key={index}
              className='bg-gray-200 border border-gray-300 shadow-md shadow-gray-300 rounded-2xl w-[13rem] flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out'
            >
              <div className=' p-5'>
                <div className=' relative w-[100px] h-[100px]'>
                  <Image
                    src={shop.src}
                    alt={shop.title}
                    fill
                    className='bg-cover rounded-lg'
                  />
                </div>
              </div>
              <div className='p-5 bg-white w-full h-full rounded-b-lg'>
                <h1 className='font-semibold text-muted-foreground'>
                  {shop.title}
                </h1>
                <span className='text-sm tracking-tight'>Buy Now And Get</span>
                {shop.percentage && (
                  <div className='bg-green-500 text-white font-semibold px-3 rounded-r-full text-sm p-0.5'>
                    {shop.percentage} More
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
