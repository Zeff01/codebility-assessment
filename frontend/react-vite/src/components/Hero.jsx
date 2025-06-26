import slide1 from "../assets/slide4.png";
import slide2 from "../assets/spring.png";
import static1 from "../assets/static1.png"
import static2 from "../assets/static4.png"
import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";

const slides = [slide1, slide2];
const staticImage = [{ id: 1, image: static1 }, { id: 2, image: static2 }];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="slide-wrapper w-full mx-auto py-4 px-6 sm:px-12 lg:px-20">
                <div className="w-full rounded-4xl relative">
                    <img src={slides[current]} alt={`Slide ${current + 1}`} className="w-full object-center rounded-4xl transition-all duration-700 cursor-pointer" />

                    {/* Text Overlay */}
                    {current === 0 && (
                        <div className="absolute inset-0 flex items-center">
                            <div className="mb-5 ml-8 sm:ml-16 text-left text-white sm:space-y-2">
                                <p className="text-xs sm:text-3xl font-semibold tracking-wider uppercase">Gifting made easier</p>
                                <h1 className="text-sm sm:text-5xl font-bold">Buy A Gift Card,</h1>
                                <p className="text-sm sm:text-5xl font-bold">Get Cash Back Rewards</p>
                            </div>
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="pagination absolute left-1/2 transform -translate-x-1/2 bottom-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-2 h-2 mx-2 rounded-full transition-all ${current === index ? "bg-blue-500 w-3 h-3" : "bg-gray-300 cursor-pointer"
                                    }`}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="static-image-con flex flex-col md:flex-row items-center justify-between sm:gap-10 gap-2 w-full py-4 px-6 sm:px-12 lg:px-20">
                {staticImage.map((item) => (
                    <div key={item.id} className="relative w-full md:w-1/2 h-[300px] sm:min-h-[300px] rounded-4xl overflow-hidden">
                        <img className="w-full h-full rounded-4xl object-cover cursor-pointer" src={item.image} alt={`Static ${item.id}`} />

                        {/* Text Overlay */}
                        {item.id === 1 && (
                            <div className="absolute inset-0 flex items-center justify-start p-6 sm:p-10 text-white">
                                <div className="space-y-3 max-w-xs">
                                    <p className="text-lg sm:text-2xl font-semibold leading-snug">
                                        Send gift cards<br />
                                        instantly through<br />
                                        text.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer flex items-center gap-2">
                                            <FaApple size={20} />
                                            <div className="leading-tight text-left">
                                                <span className="block text-[9px] sm:text-[10px]">Download on the</span>
                                                <span className="block text-sm sm:text-base font-semibold">App Store</span>
                                            </div>
                                        </button>
                                        <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer flex items-center gap-2">
                                            <FaGooglePlay size={20} />
                                            <div className="leading-tight text-left">
                                                <span className="block text-[9px] sm:text-[10px]">Get it on</span>
                                                <span className="block text-sm sm:text-base font-semibold">Google Play</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {item.id === 2 && (
                            <div className="absolute left-6 sm:left-10 top-1/2 transform -translate-y-1/2 text-white text-left max-w-xs">
                                <p className="text-lg sm:text-2xl font-semibold leading-snug">
                                    Invite a friend &<br />
                                    get 1% Moola cash<br />
                                    back on all their<br />
                                    purchases.
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero;