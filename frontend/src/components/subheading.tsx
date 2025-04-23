"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

export default function SubHeading() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 12); // 12 days from now
    targetDate.setHours(targetDate.getHours() + 3); // add 3 hours
    targetDate.setMinutes(targetDate.getMinutes() + 10); // add 10 minutes

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='flex gap-3 justify-center items-center px-20 py-1'>
        <h1 className='text-sm text-violet-900 font-bold'>
          Limited Time Offer!
        </h1>
        <span className='font-semibold text-violet-900 text-sm'>
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes
        </span>
      </div>
      <div className='w-full bg-gradient-to-r from-primary  via-violet-500 to-purple-500 text-white px-7 py-5'>
        <div className='flex items-center w-full'>
          <Input
            className=' rounded-l-full py-5 w-full border-none bg-white text-black px-10 '
            placeholder='Search over 250 gift card brands'
          />
          <div className='bg-violet-700 hover:bg-violet-800 py-[10.5px] px-6  rounded-r-full flex items-center cursor-pointer duration-200 ease-in-out transition-colors'>
            <Search className='w-5 h-5' />
          </div>
        </div>
      </div>
    </div>
  );
}
