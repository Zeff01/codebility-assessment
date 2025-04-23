import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { Card } from "./ui/card";

import Image1 from "../../public/image1.jpg";
import Image2 from "../../public/image2.jpg";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Card
            className='relative rounded-4xl overflow-hidden cursor-pointer'
            style={{
              backgroundImage: `url(${Image1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          >
            <div className='absolute inset-0 bg-black/30 z-10'></div>

            <div className='relative z-20 px-10 md:px-28 lg:px-32 mt-28 w-full lg:w-[57rem]'>
              <h2 className='text-xl md:text-2xl lg:text-3xl uppercase tracking-wide text-white'>
                Gifting made easier
              </h2>
              <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white my-5 lg:tracking-wider lg:leading-[4rem]'>
                Buy A Gift Card, Get Cash Back Rewards
              </h1>

              <Button className='uppercase py-6 md:py-8 lg:py-10 rounded-full  md:px-10 lg:px-14 text-lg bg-gradient-to-r from-primary  via-violet-500 to-purple-500  cursor-pointer mt-8'>
                Shop Weekly Deals
              </Button>
            </div>
          </Card>
        </CarouselItem>

        <CarouselItem>
          <Card
            className='relative rounded-4xl overflow-hidden'
            style={{
              backgroundImage: `url(${Image2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          >
            {/* <div className='absolute inset-0 bg-black/0 z-10'></div> */}

            <div className='relative z-20 px-10 md:px-28 lg:px-32 mt-28 w-full lg:w-[57rem]'>
              <h2 className='text-xl md:text-2xl lg:text-3xl uppercase tracking-wide text-primary font-semibold'>
                Springs savings are here
              </h2>
              <h1 className='uppercase text-3xl md:text-4xl lg:text-6xl font-bold text-primary my-5'>
                One Month of Super gift deals
              </h1>

              <Button className='uppercase py-6 md:py-8 lg:py-10 rounded-full  md:px-10 lg:px-14 text-lg bg-gradient-to-r from-primary  via-violet-500 to-purple-500  cursor-pointer mt-8'>
                Shop Gift Cards
              </Button>
            </div>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselDots className='absolute bottom-4 left-1/2 -translate-x-1/2' />
    </Carousel>
  );
}
