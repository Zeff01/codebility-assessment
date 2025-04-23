import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Apple, Play } from "lucide-react";

export default function HowToUse() {
  return (
    <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-full'>
      <Card className='p-5 lg:px-8 bg-red-300 w-full'>
        <h1 className='text-white font-semibold text-xl lg:text-2xl lg:w-[20rem]'>
          Send gift cards instantly through text.
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  mt-10 w-full'>
          <Button className='py-6 flex items-center rounded-full w-full bg-primary  '>
            <Apple className='w-5 h-5' />
            <div>
              <span className='text-xs font-light'>Download on the</span>
              <h1 className='font-semibold text-sm'>App Store</h1>
            </div>
          </Button>

          <Button className='w-full  px-5 py-6 rounded-full flex gap-2 items-center  text-white bg-primary'>
            <Play className='w-5 h-5' />
            <div>
              <span className='text-xs font-light'>GET IT ON</span>
              <h1 className='font-semibold text-sm'>Google Play</h1>
            </div>
          </Button>
        </div>
      </Card>
      <Card className='p-5 bg-indigo-400 h-[15rem] px-8'>
        <h1 className='text-white font-semibold text-xl lg:text-2xl lg:w-[20rem]'>
          Invite a friend & get 1% Codey cash back on all their purchases.
        </h1>
      </Card>
    </div>
  );
}
