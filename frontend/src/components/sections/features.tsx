import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaUsers, FaApple, FaGooglePlay } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Message Feature */}
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-[25px] font-bold text-gray-800 mb-2">
                Send gift cards instantly through text.
              </h3>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button
                  variant="default"
                  className="bg-[#4B0082] hover:bg-[#3B0062] flex items-center gap-3 rounded-full px-6 py-7 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] min-w-[220px] "
                >
                  <FaApple className="text-[25px]" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs leading-none opacity-90">
                      Download on the
                    </span>
                    <span className="text-base font-semibold mt-0.5">
                      App Store
                    </span>
                  </div>
                </Button>
                <Button
                  variant="default"
                  className="bg-[#4B0082] hover:bg-[#3B0062] flex items-center gap-3 rounded-full px-6 py-7 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] min-w-[220px]"
                >
                  <FaGooglePlay className="text-2xl" />
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs leading-none opacity-90">
                      GET IT ON
                    </span>
                    <span className="text-base font-semibold mt-0.5">
                      Google Play
                    </span>
                  </div>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-2/5 h-[250px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/giftcard-mobile.png"
                alt="Send gift cards via text message"
                width={400}
                height={600}
                className="object-contain transform scale-[1.6] md:scale-[1.8]"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Referral Program Feature */}
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 rounded-lg p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-[25px] font-bold text-gray-800 mb-2">
                Invite friends & earn 1% Moola cash back on their purchases.
              </h3>
              <Button
                variant="default"
                className="bg-[#4B0082] hover:bg-[#3B0062] flex items-center gap-2 rounded-full px-6 py-5 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
              >
                <FaUsers className="text-xl" />
                <span className="font-semibold">Invite Friends</span>
              </Button>
            </div>
            <div className="w-full md:w-2/5 h-[250px] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/referral-mobile.png"
                alt="Referral program mobile app"
                width={400}
                height={600}
                className="object-contain transform scale-[1.4] md:scale-[1.6]"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
