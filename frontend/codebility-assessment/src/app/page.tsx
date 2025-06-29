"use client";

import Image from "next/image";
import { Download, Share2, Star } from "lucide-react";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import SliderGallery from "@/components/SliderGallery";
import Modal from "@/components/Modal";
import Infocard from "@/components/Infocard";

/**
 * Home Component - Main landing page for the Moola application
 * 
 * This component serves as the entry point for the application and includes multiple sections:
 * - A search bar for finding gift card brands
 * - A slider gallery for promotional content
 * - Interactive promotional sections that link to the app or referral program
 * - A modal for sharing and downloading the app
 * - Information cards highlighting key product features
 * 
 * @returns {JSX.Element} The rendered Home component
 */
export default function Home() {
  // State to manage the modal visibility
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  /**
   * Grid data for the modal display
   * Each item is either an image with styling properties or a text element
   * @type {Array<{type: 'image', src: string, alt: string, bg: string} | {type: 'text', content: string, bg: string}>}
   */
  const gridItems: Array<
    | { type: 'image'; src: string; alt: string; bg: string }
    | { type: 'text'; content: string; bg: string }
  > = [
      { type: 'image', src: '/images/Frame_1.png', alt: 'Grid1', bg: 'bg-[#bfd781]' },
      { type: 'image', src: '/images/Frame_2.png', alt: 'Grid2', bg: 'bg-[#f183b4]' },
      { type: 'image', src: '/images/Frame_3.png', alt: 'Grid3', bg: 'bg-[#c5e7ec]' },
      { type: 'text', content: 'Gift Cards that Give Back!', bg: 'bg-[#99b8e3]' },
      { type: 'image', src: '/images/Frame_5.png', alt: 'Grid5', bg: 'bg-[#a8f0e9]' },
      { type: 'image', src: '/images/Frame_6.png', alt: 'Grid6', bg: 'bg-[#fcdc6f]' },
      { type: 'image', src: '/images/Frame_7.png', alt: 'Grid7', bg: 'bg-[#8942ed]' },
      { type: 'image', src: '/images/Frame_8.png', alt: 'Grid8', bg: 'bg-[#874cd9]' },
      { type: 'image', src: '/images/Frame_5.png', alt: 'Grid9', bg: 'bg-[#a771ca]' },
    ];
  
  /**
   * Info card data for the three feature cards
   * Each card includes a title, description, button text, and click handler
   * @type {Array<{title: string, description: string, buttontext: string, onClick: () => void}>}
   */
  const infocards = [
    {
      title: "Deals Each Week",
      description: "Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal.",
      buttontext: "SHOP DEALS",
      onClick: () => window.open('https://www.moola.com/search', '_blank')
    },
    {
      title: "Everyday Essentials",
      description: "Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!",
      buttontext: "SHOP ESSENTIALS",
      onClick: () => window.open('https://www.moola.com/search', '_blank')
    },
    {
      title: "Download App",
      description: "Download the Moola App and start collecting cash back and bonus gift vouchers.",
      buttontext: "DOWNLOAD APP",
      onClick: () => setIsShareModalOpen(true)
    }
  ];

  /**
   * Handler to close the share modal
   * @function
   */
  const handleCloseModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <div className="">
      {/* Search Bar Section - Allows users to search for gift card brands */}
      <div className="px-4 lg:px-24 xl:px-28 2xl:px-32 w-full bg-purple">
        <SearchBar
          action="/search"
          placeholder="Search over 250 gift card brands"
          searchName="search"
          showIcon={true}
        />
      </div>

      {/* Hero Section - Main promotional content area */}
      <div className="px-4 lg:px-24 xl:px-28 2xl:px-32 my-4 flex flex-col gap-2 sm:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4">
        {/* Carousel/Slider for featured promotions */}
        <SliderGallery />
        
        {/* Bottom Strip of Hero Section - Two promotional panels */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">
          {/* Left Panel - App Download Promotion */}
          <div className="flex-1 cursor-pointer" onClick={() => setIsShareModalOpen(true)}>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="absolute inset-0 z-10 flex flex-col justify-between" style={{
                padding: 'clamp(2rem, 2vw + 1rem, 2rem)'
              }}>
                <h1 className="flex flex-col text-white font-semibold gap-1" style={{
                  fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
                  lineHeight: '1.2'
                }}>
                  <span>Send gift cards</span>
                  <span>instantly through</span>
                  <span>text.</span>
                </h1>
                <div className="flex sm:flex-row gap-2" style={{
                  marginTop: 'clamp(1rem, 2vw, 1.5rem)'
                }}>
                  <Image
                    src="app-store.svg"
                    alt="Download on the App Store"
                    width={140}
                    height={50}
                    style={{
                      width: 'clamp(7rem, 12vw, 10rem)',
                      height: 'auto',
                      aspectRatio: '140/50'
                    }}
                  />
                  <Image
                    src="play-store.svg"
                    alt="Get it on Google Play"
                    width={140}
                    height={50}
                    style={{
                      width: 'clamp(7rem, 12vw, 10rem)',
                      height: 'auto',
                      aspectRatio: '140/50'
                    }}
                  />
                </div>
              </div>
              <Image
                src="/images/static1.png"
                alt="Send gift cards instantly through text"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Panel - Referral Program Promotion */}
          <a href="https://content.moola.com/moola-referral-program/" target="_blank" rel="noopener noreferrer" className="flex-1">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="absolute inset-0 z-10 flex flex-col justify-start" style={{
                padding: 'clamp(2rem, 2vw + 1rem, 2rem)'
              }}>
                <h1 className="flex flex-col text-white font-semibold gap-1" style={{
                  fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
                  lineHeight: '1.2'
                }}>
                  <span>Invite a friend &</span>
                  <span>get 1% Moola cash</span>
                  <span>back on all their</span>
                  <span>purchases.</span>
                </h1>
              </div>
              <Image
                src="/images/static4.png"
                alt="Invite a friend and get 1% Moola cash back"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Share Modal - Appears when user clicks to download the app */}
      <Modal
        isOpen={isShareModalOpen}
        onClose={handleCloseModal}
      >
        <div className="flex flex-col lg:flex-row min-h-[60vh] lg:min-h-[70vh]">
          {/* Left Panel - App Download Information */}
          <div className="w-full lg:w-1/2 bg-purple-light text-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-18 flex flex-col items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-center">Download Moola now</h1>
              <p className="text-xs sm:text-sm md:text-base text-center max-w-xs sm:max-w-sm">
                Scan the QR Code on your mobile phone to get Moola in your app store!
              </p>
            </div>
            <Image
              src="/images/qr-code.png"
              alt="QR Code to download Moola"
              width={170}
              height={170}
              className="object-cover rounded-2xl sm:rounded-3xl w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-40 lg:h-40 xl:w-44 xl:h-44"
            />
            <a href="" className="flex text-center text-xs sm:text-sm gap-1 items-center hover:opacity-80 transition-opacity">
              <span className="underline">Share Deal</span>
              <Share2 width={14} className="sm:w-4 sm:h-4" />
            </a>
            <div className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-[15px] gap-1 sm:gap-2 font-semibold text-center">
              <p className="flex items-center justify-center gap-1">
                <Star width={12} className="sm:w-[15px] sm:h-[15px]" />
                4.9 star rating
              </p>
              <p className="flex items-center justify-center gap-1">
                <Download width={12} className="sm:w-[15px] sm:h-[15px]" />
                109,000 total downloads
              </p>
            </div>
          </div>

          {/* Right Panel - Visual Grid Display */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 grid-rows-3 gap-0 items-center min-h-[40vh] lg:min-h-auto">
            {gridItems.map((item, index) => (
              <div key={index} className={`${item.bg} w-full h-full flex items-center justify-center aspect-square lg:aspect-auto`}>
                {item.type === 'image' ? (
                  <Image
                    src={(item as {type: 'image', src: string, alt: string, bg: string}).src}
                    alt={(item as {type: 'image', src: string, alt: string, bg: string}).alt}
                    width={150}
                    height={150}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-cover"
                  />
                ) : (
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] leading-tight p-2 sm:p-3 md:p-4 text-white">
                    {(item as {type: 'text', content: string, bg: string}).content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Feature Section: Infocards - Displays key product benefits */}
      <section className="mt-20 mb-20 px-4 lg:px-24 xl:px-28 2xl:px-32 flex flex-col gap-8 md:gap-12 lg:gap-16">
        {/* Section Header with Value Proposition */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 2xl:px-80 text-center flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-purple-dark font-semibold">Moola Saves Money On Gifts & Everyday Essentials</h1>
          <p className="text-xs sm:text-sm">When we think about saving money, we often think about cutting back on non-essentials. However, that's usually not possible for special occasions or everyday purchases - gifts and dinners add up. So, making some small tweaks + great deals can make a big impact on your wallet. Through Moola, you can easily buy gift cards to your favourite stores at a lower price. Why not shop smarter, score deals, and savour the savings!</p>
        </div>
        
        {/* Feature Cards - Displays three key product benefits */}
        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-4 lg:gap-12 w-full">
          {infocards.map((card, index) => (
            <div key={index} className="md:w-1/3">
              <Infocard 
                title={card.title}
                description={card.description}
                buttontext={card.buttontext}
                className="h-full"
                onClick={card.onClick}
              />
            </div>
          ))}
        </div>
      </section>



    </div >
  );
}
