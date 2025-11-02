"use client";

import Reveal from "./Reveal";
import { useEffect } from "react";
import Image from "next/image";

export default function GiftCards() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const headerElement = entry.target.querySelector('.giftcards-header-animated');
          const titleElement = entry.target.querySelector('.giftcards-title-magical');
          const subtitleElement = entry.target.querySelector('.giftcards-subtitle-reveal');
          const descriptionElement = entry.target.querySelector('.giftcards-description-reveal');
          const sparkleContainer = entry.target.querySelector('.sparkle-container');
          
          if (headerElement) {
            headerElement.classList.add('is-visible');
          }
          if (titleElement) {
            titleElement.classList.add('is-visible');
          }
          if (subtitleElement) {
            subtitleElement.classList.add('is-visible');
          }
          if (descriptionElement) {
            descriptionElement.classList.add('is-visible');
          }
          if (sparkleContainer) {
            sparkleContainer.classList.add('is-visible');
          }
        }
      });
    }, observerOptions);

    const giftCardsSection = document.getElementById('gift-cards');
    if (giftCardsSection) {
      observer.observe(giftCardsSection);
    }

    return () => {
      if (giftCardsSection) {
        observer.unobserve(giftCardsSection);
      }
    };
  }, []);

  const brands = [
    { 
      name: "Starbucks", 
      color: "#00704A", 
      cashback: "5%",
      image: "/images/starbucks.webp",
      category: "Food & Dining"
    },
    { 
      name: "Amazon", 
      color: "#FF9900", 
      cashback: "3%",
      image: "/images/amazon.webp",
      category: "Shopping"
    },
    { 
      name: "Walmart", 
      color: "#0071CE", 
      cashback: "4%",
      image: "/images/walmart.webp",
      category: "Shopping"
    },
    { 
      name: "DoorDash", 
      color: "#EB1700", 
      cashback: "5%",
      image: "/images/doordash.webp",
      category: "Food & Dining"
    },
    { 
      name: "PetSmart", 
      color: "#0066CC", 
      cashback: "3%",
      image: "/images/petsmart.webp",
      category: "Services"
    },
    { 
      name: "Target", 
      color: "#CC0000", 
      cashback: "4%",
      image: "/images/target.webp",
      category: "Shopping"
    },
    { 
      name: "Uber", 
      color: "#000000", 
      cashback: "3%",
      image: "/images/uber.webp",
      category: "Services"
    },
    { 
      name: "Netflix", 
      color: "#E50914", 
      cashback: "2%",
      image: "/images/netflix.webp",
      category: "Entertainment"
    },
    { 
      name: "Spotify", 
      color: "#1DB954", 
      cashback: "2%",
      image: "/images/spotify.webp",
      category: "Entertainment"
    },
    { 
      name: "Apple", 
      color: "#000000", 
      cashback: "3%",
      image: "/images/apple.webp",
      category: "Shopping"
    },
    { 
      name: "Google Play", 
      color: "#4285F4", 
      cashback: "2%",
      image: "/images/google play.webp",
      category: "Entertainment"
    },
    { 
      name: "Steam", 
      color: "#1B2838", 
      cashback: "3%",
      image: "/images/steam.webp",
      category: "Entertainment"
    }
  ];

  const categories = [
    { name: "Food & Dining", icon: "F", count: "12 brands" },
    { name: "Shopping", icon: "S", count: "8 brands" },
    { name: "Entertainment", icon: "E", count: "6 brands" },
    { name: "Services", icon: "S", count: "4 brands" }
  ];

  return (
    <section id="gift-cards" className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
      <div className="text-center giftcards-header-animated sparkle-container">
        <h2 className="text-3xl font-heading tracking-tight sm:text-4xl lg:text-5xl">
          <span className="giftcards-title-magical">
            Find the perfect gift
          </span>
          <span className="block mt-2 text-foreground giftcards-subtitle-reveal">for everyone you love</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base font-body text-foreground/70 sm:text-lg giftcards-description-reveal">
          Choose from our carefully selected collection of beloved brands. Every gift comes with the bonus of earning rewards for your thoughtfulness.
        </p>
      </div>

      <div className="mt-16">
        {/* Popular Categories */}
        <div className="mb-12">
          <h3 className="text-xl font-display text-foreground mb-6">Gift Categories</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category, index) => (
              <Reveal key={index} delayMs={index * 80}>
              <button className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-[#7c3aed]/30 hover:shadow-lg hover:shadow-[#7c3aed]/10 hover:-translate-y-1 w-full">
                {/* Subtle Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-[#22c55e]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="relative p-4">
                  {/* Header */}
                  <div className="text-center mb-3">
                    <h4 className="text-lg font-display text-foreground group-hover:text-[#7c3aed] transition-colors duration-300 mb-1">
                      {category.name}
                    </h4>
                    <p className="text-sm font-body text-foreground/60">
                      {category.count}
                    </p>
                  </div>
                  
                  {/* Action */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2 text-sm font-medium text-[#7c3aed] group-hover:text-[#6d28d9] transition-colors duration-300">
                      <span>View all</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Gift Card Brands */}
        <div>
          <h3 className="text-xl font-display text-foreground mb-6">Popular Gift Cards</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {brands.map((brand, index) => (
              <Reveal key={index} delayMs={index * 70} variant="tilt">
              <button className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background transition-all duration-300 hover:border-foreground/20 hover:shadow-xl hover:shadow-[#7c3aed]/10 hover:-translate-y-1">
                {/* Card Image Area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Placeholder Image */}
                  <Image 
                    src={brand.image} 
                    alt={`${brand.name} gift card`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Cashback badge */}
                  <div className="absolute top-3 right-3 rounded-full bg-[#22c55e] px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
                    {brand.cashback} back
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 rounded-full bg-black/20 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white">
                    {brand.category}
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-4">
                  <div className="mb-3">
                    <h4 className="text-lg font-display text-foreground">{brand.name}</h4>
                    <p className="text-sm font-body text-foreground/60">Digital Gift Card</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-foreground/70">From $10</div>
                    <div className="flex items-center gap-1 text-sm font-medium text-[#7c3aed] group-hover:text-[#6d28d9] transition-colors">
                      Gift Now
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
