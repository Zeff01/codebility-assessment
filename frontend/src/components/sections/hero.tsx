'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { heroSlides, HeroSlide } from '@/lib/hero-data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import custom styles
import '@/styles/hero.css';

// Background Decorative Elements component
const BackgroundElements = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[radial-gradient(#e879f9_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </div>

    {/* Animated blobs */}
    <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/3 -right-32 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
  </div>
);

// Header section component
const HeroHeader = () => (
  <div className="text-center mb-12 max-w-3xl mx-auto px-4">
    <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium px-5 py-2 rounded-full mb-6 shadow-md animate-pulse">
      <span className="flex items-center">
        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
        Special Spring Collection
      </span>
    </div>

    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight animated-title title-wrapper high-contrast-heading">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500 inline-block">
        EXCLUSIVE
      </span>{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 inline-block">
        GIFT
      </span>{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-600 inline-block">
        CARD
      </span>{' '}
      <span className="text-gray-900 inline-block">DEALS</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 high-contrast-text">
      Discover our premium collection of gift cards from top brands, perfect for
      any occasion with exclusive offers for a limited time only.
    </p>

    <FeatureList />
  </div>
);

// Feature list component
const FeatureList = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <FeatureItem text="Free Shipping" />
    <FeatureItem text="Digital Delivery" />
    <FeatureItem text="Exclusive Deals" />
  </div>
);

// Feature item component
const FeatureItem = ({ text }: { text: string }) => (
  <span className="inline-flex items-center text-gray-700 text-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-purple-500 mr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    {text}
  </span>
);

// Carousel slide component
const CarouselSlide = ({
  slide,
  index,
}: {
  slide: HeroSlide;
  index: number;
}) => (
  <div className="carousel-image-container">
    <Image
      src={slide.src}
      alt={slide.title}
      fill
      className="w-full h-full"
      style={{ objectFit: 'cover' }}
      priority={index === 0}
    />

    {/* Decorative dots */}
    <div className="decorative-dot" style={{ top: '15%', left: '10%' }}></div>
    <div className="decorative-dot" style={{ top: '25%', right: '20%' }}></div>
    <div
      className="decorative-dot"
      style={{ bottom: '30%', left: '15%' }}
    ></div>
    <div
      className="decorative-dot"
      style={{ bottom: '25%', right: '25%' }}
    ></div>

    {/* Promo badge */}
    <div className="promo-badge">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
          clipRule="evenodd"
        />
      </svg>
      {index % 2 === 0 ? '20% OFF' : 'Limited Edition'}
    </div>

    <div className="carousel-content">
      <h2 className="carousel-title">{slide.title}</h2>
      <p className="carousel-description">{slide.description}</p>
      <button className="carousel-button cursor-pointer">
        {slide.cta}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
);

// Hero Carousel component
const HeroCarousel = () => (
  <div className="w-full max-w-6xl mx-auto mb-16">
    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={true}
        className="h-full w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide slide={slide} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

// Call to action component
const CallToAction = () => (
  <div className="mt-10 flex flex-col md:flex-row gap-8 items-center">
    <Button
      size="lg"
      className="rounded-full px-12 py-8 text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        BROWSE ALL GIFT CARDS
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
    </Button>

    <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="p-2 bg-yellow-100 rounded-full text-yellow-500 group-hover:scale-110 transition-transform duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div>
        <span className="text-sm font-medium text-gray-800">
          Free shipping on all orders over $50
        </span>
        <span className="block text-xs text-gray-600 mt-0.5">
          Order now and get it delivered in 24 hours
        </span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative pt-10 pb-24 md:pt-16 md:pb-32 overflow-hidden">
      <BackgroundElements />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-full">
        <div className="flex flex-col items-center">
          <HeroHeader />
          <HeroCarousel />
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default Hero;
