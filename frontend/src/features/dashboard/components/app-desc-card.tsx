import Card from "@/features/dashboard/components/ui/card";
import Image from "next/image";

/**
 * AppDescCard component
 *
 * A responsive reusable app description card component that can be used to create a app description card.
 *
 * @returns AppDescCard component
 *
 * @example
 * <AppDescCard />
 */

function AppDescCard() {
  return (
    <Card className='flex flex-col gap-4 p-12 md:px-32 bg-[#fbe6ff] rounded-3xl shadow-2xl'>
      <Card.Header className='flex flex-col gap-4 text-center'>
        <p className='font-bold text-2xl md:text-3xl  text-[#4c0d94]'>
          Virtual Gifting With A Personal Touch
        </p>
        <p className='text-xs md:text-sm  text-[#212925]'>
          You can&apos;t always be there in person for special celebrations, but
          you can always send your regards and congratulations through email or
          text. It&apos;s the thought that counts!! Through Moola, you can send
          gifts from big and niche brands to your loved ones instantly.
        </p>
      </Card.Header>
      <Card.Content className='flex items-center w-full gap-8 md:gap-4 flex-col md:flex-row'>
        <div className='w-full md:w-1/3 hidden md:flex flex-col gap-4 justify-center'>
          <p className=' font-bold text-xl md:text-2xl text-[#4c0d94]'>
            Hassle-free long distance gift giving
          </p>
          <p className='text-xs md:text-sm text-[#212925]'>
            Say goodbye to the stress of finding the perfect gift and having it
            arrive on-time. With Moola, you can easily search, purchase and send
            digital gift cards in less than 1 minute.
          </p>
        </div>
        <div className='w-full md:w-1/3 flex justify-center items-center'>
          <Image
            src='/gif.gif'
            alt='gif'
            width={300}
            height={300}
            className='h-auto w-auto'
          />
        </div>
        <div className='w-full md:w-1/3 md:hidden flex flex-col gap-4 justify-center'>
          <p className='text-xl md:text-2xl font-bold text-[#4c0d94]'>
            Hassle-free long distance gift giving
          </p>
          <p className='text-xs md:text-sm text-[#212925]'>
            Say goodbye to the stress of finding the perfect gift and having it
            arrive on-time. With Moola, you can easily search, purchase and send
            digital gift cards in less than 1 minute.
          </p>
        </div>
        <div className='w-full md:w-1/3 flex flex-col gap-4 justify-center'>
          <p className='text-xl md:text-2xl font-bold text-[#4c0d94]'>
            Monitor gift delivery as if you&apos;re there
          </p>
          <p className='text-xs md:text-sm text-[#212925]'>
            Stop questioning if a recipient has received your gift. Track gift
            card delivery and open rates on the Moola App.
          </p>
        </div>
      </Card.Content>
    </Card>
  );
}

export default AppDescCard;
