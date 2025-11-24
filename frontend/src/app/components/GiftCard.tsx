"use client";

import Image from "next/image";
import { useState } from "react";

interface GiftCardItem {
    img: string;
    title: string;
    subtitle: string;
    discount: string;
    color: string;
}

const cards: GiftCardItem[] = [
    {
        img: "/logos/stabs.png",
        title: "Starbucks",
        subtitle: "Coffee & Beverages",
        discount: "Up to 10% Off",
        color: "#00704A",
    },
    {
        img: "/logos/amazon.png",
        title: "Amazon",
        subtitle: "Online Shopping",
        discount: "Up to 8% Off",
        color: "#FF9900",
    },
    {
        img: "/logos/uber.png",
        title: "Uber",
        subtitle: "Ride Sharing",
        discount: "Up to 6% Off",
        color: "#000000",
    },
    {
        img: "/logos/apple2.png",
        title: "Apple",
        subtitle: "Tech & Gadgets",
        discount: "Up to 7% Off",
        color: "#A2AAAD",
    },
];

export default function GiftCard() {
    const loopCards = [...cards, ...cards, ...cards];
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="w-full py-16 bg-white">
            {/* Section Title */}
            <div className="text-center max-w-3xl mx-auto px-4">
                <h2 className="text-[20px] md:text-3xl font-bold text-violet-900">
                    Send A Gift Card and Collect Rewards
                </h2>
                <p className="text-[13px] md:text-sm text-violet-800 mt-1">
                    Moola provides unbeatable deals on the gift cards you love. Buy for a
                    friend or for yourself and earn rewards—over 250 brands across Canada.
                </p>
            </div>

            {/* Infinite Loop Carousel */}
            <div className="mt-12 overflow-hidden">
                <div
                    className={`marquee whitespace-nowrap ${isPaused ? 'pause' : ''}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {loopCards.map((card, index) => (
                        <div key={index} className="flex-shrink-0 w-[260px] h-[180px]">
                            <div
                                style={{ "--brand": card.color } as React.CSSProperties}
                                className="group relative w-full h-full rounded-xl p-4 border border-gray-200 shadow-md bg-white overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:bg-[var(--brand)] cursor-pointer"
                            >
                                {/* Background logo, only half visible on the right */}
                                <Image
                                    src={card.img}
                                    alt="bg-logo"
                                    fill
                                    className="object-contain opacity-0 
                                        absolute top-0 bottom-0 right-0
                                        w-[120px] h-full pointer-events-none
                                        translate-x-1/2
                                        transition-opacity duration-300 group-hover:opacity-50"
                                />

                                {/* Foreground content */}
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={card.img}
                                            width={60}
                                            height={60}
                                            alt={card.title}
                                            className="rounded-md object-cover"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 group-hover:text-white">
                                                {card.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 group-hover:text-white/80">
                                                {card.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Discount block */}
                                    <div className="mt-3 flex flex-col items-start gap-0.5">
                                        <span className="text-xs text-gray-600 group-hover:text-white/80 font-medium">
                                            Buy One and Get
                                        </span>
                                        <span className="inline-block px-2 py-1 rounded-full bg-violet-100 text-violet-600 font-semibold text-sm shadow-sm group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                                            {card.discount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-260px * ${cards.length} - 24px * ${cards.length}));
                    }
                }
            `}</style>
        </section>
    );
}