import GiftCards from "@/components/gift-cards";
import Hero from "@/components/hero";
import HowToUse from "@/components/how-to-use";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Attachement from "../../public/attachment.gif";
import { items, itemFeedback } from "@/data/data";
import infotag from "../../public/info-card-tag.svg";
import { Button } from "@/components/ui/button";
import Section from "@/components/section";
import { Star } from "lucide-react";

const page = () => {
  return (
    <div className='max-w-screen-xl p-5 lg:p-10 mx-auto'>
      <Hero />
      <HowToUse />
      <GiftCards />
      <Card className='bg-pink-100 px-10 mt-14 text-center'>
        <div className='flex flex-col items-center justify-center gap-5'>
          <h1 className='text-2xl text-violet-900 font-bold'>
            Virtual Gifting With A Personal Touch
          </h1>
          <p className='text-sm w-full lg:w-[30rem]'>
            You can't always be there in person for special celebrations, but
            you can always send your regards and congratulations through email
            or text. It's the thought that counts!! Through Moola, you can send
            gifts from big and niche brands to your loved ones instantly.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
          <div className='flex flex-col items-left text-center lg:text-left justify-center gap-5'>
            <h1 className='text-lg md:text-xl lg:text-xl  text-violet-900 font-bold lg:w-[16rem]'>
              Hassle-free long distance gift giving
            </h1>
            <p className='text-sm lg:w-[20rem] '>
              Say goodbye to the stress of finding the perfect gift and having
              it arrive on-time. With Moola, you can easily search, purchase and
              send digital gift cards in less than 1 minute.
            </p>
          </div>
          <div>
            <Image src={Attachement} alt='gif' width={300} height={300} />
          </div>
          <div className='flex flex-col items-left text-center lg:text-left justify-center gap-5'>
            <h1 className='text-xl text-violet-900 font-bold lg:w-[16rem] '>
              Monitor gift delivery as if you're there
            </h1>
            <p className='text-sm w-full lg:w-[20rem] text-center'>
              Stop questioning if a recipient has received your gift. Track gift
              card delivery and open rates on the Moola App.
            </p>
          </div>
        </div>
      </Card>
      <Section
        title='Codey Saves Money On Gifts & Everyday Essentials'
        subtitle="When we think about saving money, we often think about cutting back on non-essentials. However, that's usually not possible for special occasions or everyday purchases - gifts and dinners add up. So, making some small tweaks + great deals can make a big impact on your wallet. Through Moola, you can easily buy gift cards to your favourite stores at a lower price. Why not shop smarter, score deals, and savour the savings!"
      >
        {items.map((item, index) => (
          <Card key={index} className='w-full bg-gray-200 px-5'>
            <CardHeader className='text-lg font-semibold flex gap-1 items-center'>
              <Image src={infotag} alt='tag' width={30} height={30} />{" "}
              {item.title}
            </CardHeader>
            <CardContent className='text-sm h-full'>{item.desc}</CardContent>
            <CardFooter className='h-full'>
              <Button className='rounded-full font-light py-6 px-14 bg-violet-900 hover:bg-violet-900/80 cursor-pointer'>
                SHOP DEALS
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Section>

      <Section title='What Do Customers Think About Codey'>
        {itemFeedback.map((item, index) => (
          <Card key={index} className='w-full bg-gray-200 px-5'>
            <CardContent className=' h-full flex flex-col items-center gap-5 text-center'>
              <p>{item.desc}</p>
              <div className='flex items-center gap-1 my-2'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={30}
                    className={
                      star <= item.stars
                        ? "text-gray-500"
                        : "fill-yellow-400 text-yellow-400"
                    }
                  />
                ))}
              </div>
              <Image src={item.src} alt='Image' width={120} height={120} />
            </CardContent>
          </Card>
        ))}
      </Section>

      <Section
        title='Choose Your Plan'
        subtitle='Codey is free to use. You can earn 1% cash back on all your purchases. You can also choose to pay a small fee to get 2% cash back on all your purchases.'
      >
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full'>
          <Card className='w-full bg-gray-50'>
            <CardHeader className='text-lg font-semibold flex gap-1 items-center'>
              <Image src={infotag} alt='tag' width={30} height={30} />
              <h1 className='text-2xl font-semibold'>Free Plan</h1>
            </CardHeader>
            <CardContent className=' h-full'>
              <div className='flex justify-between items-center border-b py-3'>
                <h1 className='text-lg'>Cashback Rate</h1>
                <span className='text-lg'>1%</span>
              </div>
              <div className='flex justify-between items-center border-b py-3'>
                <h1 className='text-lg'>Withdrawal Speed</h1>
                <span className='text-lg'>3 days</span>
              </div>
            </CardContent>
            <CardFooter className='h-full flex justify-center'>
              <Button className='w-full rounded-full font-light py-6 px-14 bg-violet-900 hover:bg-violet-900/80 cursor-pointer'>
                BUY NOW
              </Button>
            </CardFooter>
          </Card>

          <Card className='w-full bg-gray-50'>
            <CardHeader className='text-lg font-semibold flex gap-1 items-center justify-between '>
              <div className='flex gap-1'>
                <Image src={infotag} alt='tag' width={30} height={30} />
                <h1 className='text-2xl font-semibold'>Pro Plan</h1>
              </div>
              <p className='text-3xl text-violet-900'>$3/mo</p>
            </CardHeader>
            <CardContent className=' h-full'>
              <div className='flex justify-between items-center border-b py-3'>
                <h1 className='text-lg'>Cashback Rate</h1>
                <span className='text-lg'>3%</span>
              </div>
              <div className='flex justify-between items-center border-b py-3'>
                <h1 className='text-lg'>Withdrawal Speed</h1>
                <span className='text-lg'>24 days</span>
              </div>
            </CardContent>
            <CardFooter className='h-full flex justify-center'>
              <Button className='w-full rounded-full font-light py-6 px-14 bg-violet-900 hover:bg-violet-900/80 cursor-pointer'>
                BUY NOW
              </Button>
            </CardFooter>
          </Card>

          <Card className='w-full bg-gray-50'>
            <CardHeader className='text-lg font-semibold flex gap-1 items-center justify-between '>
              <div className='flex gap-1'>
                <Image src={infotag} alt='tag' width={30} height={30} />
                <h1 className='text-2xl font-semibold'>Premium Plan</h1>
              </div>
              <p className='text-3xl text-violet-900'>$8/mo</p>
            </CardHeader>
            <CardContent className=' h-full'>
              <div className='flex justify-between items-center border-b py-3'>
                <h1 className='text-lg'>Cashback Rate</h1>
                <span className='text-lg'>5%</span>
              </div>
              <div className='flex justify-between items-center border-b py-3'>
                <h1 className='text-lg'>Withdrawal Speed</h1>
                <span className='text-lg'>Instant</span>
              </div>
            </CardContent>
            <CardFooter className='h-full flex justify-center'>
              <Button className='w-full rounded-full font-light py-6 px-14 bg-violet-900 hover:bg-violet-900/80 cursor-pointer'>
                BUY NOW
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default page;
