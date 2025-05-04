import React from 'react';
import Container from '../container/Container';
import spotify from '@/../../frontend/public/spotify.png';
import amazon from '@/../../frontend/public/amazon.png';
import apple from '@/../../frontend/public/apple.png';
import foodpanda from '@/../../frontend/public/foodpanda.png';
import petron from '@/../../frontend/public/petron.png';
import starbucks from '@/../../frontend/public/starbucks.png';
import toysrus from '@/../../frontend/public/toysrus.png';
import grab from '@/../../frontend/public/grab.png';
import Image from 'next/image';

export default function Companies() {
  return (
    <section className="bg-zinc-100 py-16 px-5 lg:px-0">
      <Container>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-zinc-800">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            These companies partner with us to offer digital gift cards you can
            send instantly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-25 items-center justify-center">
            <Image
              src={spotify}
              alt="Spotify"
              className="h-12 w-auto mx-auto saturate-0 hover:saturate-100 transition"
            />
            <Image
              src={amazon}
              alt="Amazon"
              className="h-12 w-auto mx-auto saturate-0 hover:saturate-100 transition scale-150"
            />
            <Image
              src={apple}
              alt="Apple"
              className="h-12 w-auto mx-auto brightness-100 hover:brightness-10 transition scale-150"
            />
            <Image
              src={starbucks}
              alt="Starbucks"
              className="h-12 w-auto mx-auto saturate-0 hover:saturate-100 transition scale-150"
            />
            <Image
              src={grab}
              alt="Grab"
              className="h-12 w-auto mx-auto saturate-0 hover:saturate-100 transition scale-175"
            />
            <Image
              src={foodpanda}
              alt="Foodpanda"
              className="h-12 w-auto mx-auto saturate-0 hover:saturate-100 transition scale-175"
            />
            <Image
              src={petron}
              alt="Petron"
              className="h-12 w-auto mx-auto saturate-0 hover:saturate-100 transition scale-150"
            />
            <Image
              src={toysrus}
              alt="Toys R Us"
              className="h-12 w-auto mx-auto saturate-0 hover:saturate-100 transition scale-150"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
