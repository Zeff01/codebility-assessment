import { TrendingUp } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-4 max-w-7xl mx-auto py-[clamp(1rem,8vw,30rem)]">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col ">
          <span className="bg-slate-300 w-fit px-3 py-1 rounded-2xl text-sm mb-6 mt-7">
            FUTURE OF FINANCE
          </span>
          <h1 className="text-[clamp(2.1rem,10.7vw,7rem)] md:text-[clamp(1.2rem,5vw,4rem)] lg:text-[clamp(2.4rem,5.55vw,4.7rem)] xl:text-[clamp(2.1rem,10.5vw,4.5rem)] leading-none font-semibold text-[#031635]">
            The Architectural <span className="text-[#00a776]">Ledger</span> for
            Wealth.
          </h1>
          <p className="text-[clamp(1rem,2vw,1.350rem)] max-w-[45ch] mt-5">
            Elevate your financial management with a premium editorial
            experience. Precision security, and elegance every transaction.
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-4 text-[clamp(0.75rem,2vw,1rem)]">
            <button className="bg-[#031635] text-white py-3 px-[clamp(1rem,2vw,1.75rem)] rounded-xl">
              Open Your Account
            </button>
            <button className="bg-slate-100 text-[#031635] py-3 px-[clamp(1rem,2vw,1.75rem)] rounded-xl">
              View Demo
            </button>
          </div>
        </div>
        <div className="relative w-full hidden md:flex max-w-[570px] bg-white overflow-hidden rounded-4xl border border-zinc-300">
          <div className="relative aspect-square md:aspect-[3/3] w-full flex justify-center items-center">
            <div className="absolute inset-0 bg-linear-to-b hover:from-white/15 active:from-slate/10 from-zinc-300/40 to-gray-400/70 rounded-2xl z-10"></div>
            <Image
              src="/images/phone-png.jpg"
              alt="Hero Phone Mockup"
              fill
              className="object-contain p-10"
            />
            <div className="absolute z-50 left-10 bottom-20 border border-stone-50 rounded-2xl py-4 px-5 bg-stone-200">
              <div className="absolute inset-0 w-full h-full bg-transparent"></div>
              <p className="font-semibold">$42,890.00 </p>
              <p className="text-gray-700 flex">
                MONTHLY GROWTH{" "}
                <span className="pb-1 ml-1 flex items-center text-[#00a776] font-semibold">
                  <TrendingUp size={16} />
                  <span className="ml-1">+12.4%</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
