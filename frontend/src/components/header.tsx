import React from "react";
import { Button } from "./ui/button";
import { HeartHandshake } from "lucide-react";
import SubHeading from "./subheading";

export default function Header() {
  return (
    <div>
      <div className='flex justify-between items-center p-4 lg:px-20 bg-stone-50 max-w-full mx-auto'>
        <div className='flex gap-1 items-center'>
          <HeartHandshake className='text-primary' />
          <h1 className='text-2xl font-semibold text-primary'>Codey</h1>
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-7 items-center font-semibold text-sm'>
            <li className='text-gray-600 hover:text-gray-800 duration-200 ease-in-out cursor-pointer'>
              Shop
            </li>
            <li className='text-gray-600 hover:text-gray-800 duration-200 ease-in-out cursor-pointer'>
              Winter Holiday Sale
            </li>
            <li className='text-gray-600 hover:text-gray-800 duration-200 ease-in-out cursor-pointer'>
              How it Works
            </li>
            <li className='text-gray-600 hover:text-gray-800 duration-200 ease-in-out cursor-pointer'>
              Refer & Earn
            </li>
            <li className='text-gray-600 hover:text-gray-800 duration-200 ease-in-out cursor-pointer'>
              Merchant Solutions
            </li>
          </ul>
        </div>

        <div className='hidden md:block'>
          <Button className='rounded-full text-sm font-normal cursor-pointer px-8 py-5  bg-gradient-to-r from-primary  via-violet-500 to-purple-500'>
            Signup Now
          </Button>
        </div>
      </div>
      <SubHeading />
    </div>
  );
}
