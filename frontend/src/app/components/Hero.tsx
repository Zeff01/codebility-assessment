"use client";
import { useState, useEffect, useRef } from "react";

interface HeroProps {
    mainImages?: { src: string; text?: string }[];
    smallImages?: { src: string; text?: string }[];
}

export default function Hero({
    mainImages = [
        { src: "/slides/spring.png" },
        { src: "/slides/slide4.png" },
    ],
    smallImages = [{ src: "/slides/static1.png" }, { src: "/slides/static4.png" }],
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const totalSlides = mainImages.length;

    // AUTOPLAY
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // SLIDE ANIMATION
    useEffect(() => {
        if (!slideRef.current || !containerRef.current) return;

        const slideWidth = containerRef.current.offsetWidth;

        slideRef.current.style.transition = "transform 1s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // Loop reset
        if (currentIndex === totalSlides) {
            setTimeout(() => {
                if (!slideRef.current) return;
                slideRef.current.style.transition = "none";
                slideRef.current.style.transform = `translateX(0)`;
                requestAnimationFrame(() => setCurrentIndex(0));
            }, 1000); // match transition duration
        }
    }, [currentIndex, totalSlides]);

    // FIX FOR MOBILE / RESIZE
    useEffect(() => {
        const handleResize = () => {
            if (!slideRef.current || !containerRef.current) return;
            const slideWidth = containerRef.current.offsetWidth;
            slideRef.current.style.transition = "none";
            slideRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex]);


    return (
        <section className="flex flex-col items-center py-2 space-y-3 px-4 md:px-0">
            {/* MAIN HERO */}
            <div
                className="relative w-full max-w-[1020px] h-[180px] sm:h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-lg"
                ref={containerRef}
            >
                <div className="flex" ref={slideRef}>
                    {mainImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="w-full h-[180px] sm:h-[250px] md:h-[400px] flex-shrink-0 relative"
                        >
                            <img src={img.src} className="w-full h-full object-cover" />
                            {idx === 1 && (
                                <div className="absolute top-2 sm:top-10 left-2 sm:left-20 text-white px-1 sm:px-4 py-0.5 sm:py-2 leading-snug">
                                    <p className="font-normal text-xs sm:text-2xl mb-1 sm:mb-5 sm:mt-10 mt-5">
                                        GIFTING MADE EASIER,
                                    </p>
                                    <p className="font-poppins text-xl sm:text-5xl font-extrabold sm:mb-4">
                                        Buy A Gift Card
                                    </p>
                                    <p className="font-poppins text-xl sm:text-5xl font-extrabold">
                                        Get Cash Back Rewards
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Duplicate first slide for looping */}
                    <div className="w-full h-[180px] sm:h-[250px] md:h-[400px] flex-shrink-0 relative">
                        <img src={mainImages[0].src} className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* PAGINATION DOTS */}
                <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {mainImages.map((_, idx) => (
                        <span
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex % totalSlides ? "bg-blue-500" : "bg-gray-400"
                                }`}
                        ></span>
                    ))}
                </div>
            </div>

            {/* SMALL IMAGES */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-[1020px]">
                {smallImages.map((img, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-[500px] h-[120px] sm:h-[200px] relative rounded-lg overflow-hidden shadow-md flex flex-col justify-end"
                    >
                        <img src={img.src} className="w-full h-full object-cover" />

                        {/* Overlay text only for first image */}
                        {idx === 0 && (
                            <div className="font-poppins absolute top-3 sm:top-7 left-3 sm:left-7 text-white text-sm sm:text-xl font-semibold leading-snug">
                                <p>Send gift cards</p>
                                <p>instantly through</p>
                                <p>text.</p>
                            </div>
                        )}

                        {/* Buttons for first image */}
                        {idx === 0 && (
                            <div className="absolute bottom-3 sm:bottom-9 left-3 sm:left-7 flex space-x-2 text-xs sm:text-sm">
                                <a
                                    href="https://apps.apple.com/app/your-app-id"
                                    target="_blank"
                                    className="bg-violet-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full hover:bg-violet-700 transition flex items-center space-x-1"
                                >
                                    <img src="/logos/apple.png" alt="App Store" className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="flex flex-col leading-snug">
                                        <span className="text-[7px] sm:text-[9px]">Download on</span>
                                        <span className="font-semibold text-[9px] sm:text-[11px]">App Store</span>
                                    </span>
                                </a>

                                <a
                                    href="https://play.google.com/store/apps/details?id=your.app.id"
                                    target="_blank"
                                    className="bg-violet-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full hover:bg-violet-700 transition flex items-center space-x-1"
                                >
                                    <img src="/logos/googleplay.png" alt="Google Play" className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="flex flex-col leading-snug">
                                        <span className="text-[7px] sm:text-[9px]">Get it on</span>
                                        <span className="font-semibold text-[9px] sm:text-[11px]">Google Play</span>
                                    </span>
                                </a>
                            </div>
                        )}

                        {/* Invite friend promotion for second image */}
                        {idx === 1 && (
                            <div className="font-poppins absolute top-3 sm:top-7 left-3 sm:left-7 text-white text-sm sm:text-xl font-semibold leading-snug">
                                <p>Invite a friend &</p>
                                <p>get 1% Moola cash</p>
                                <p>back on all their</p>
                                <p>purchases.</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
