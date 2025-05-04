import React from 'react';
import Image from 'next/image'; 
import image from '../../../public/shopping.png';
import Container from '../container/Container';

export default function Hero() {
  return (
    <Container>
      <section className="text-white flex flex-col lg:flex-row items-center justify-center w-full">
        <div className='text-center lg:text-left p-6 lg:p-12'>
          <h1 className="text-5xl font-bold mb-4 text-zinc-800 tracking-wide">
            Send the Perfect Gift<br/>in Seconds
          </h1>
          <p className="mb-6 max-w-xl text-zinc-600 text-lg">
            Choose from hundreds of brands and send gift cards instantly to
            anyone, anywhere.
          </p>
          <button
            className="px-6 py-3 bg-[#7514E3] text-white rounded font-bold scale-100 hover:scale-105 cursor-pointer
              transition-all ease-in-out duration-300 drop-shadow-md hover:drop-shadow-[0_4px_6px_#7514E380] text-xl"
          >
            Browse Gift Cards
          </button>
        </div>
  
        <div className="p-6 lg:p-12">
          <Image
            src={image}
            alt="Shopping"
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
      </section>
    </Container>
  );
}