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
        <div className="w-full hidden md:flex max-w-[570px] bg-amber-300 overflow-hidden rounded-4xl">
          <div className="relative aspect-square md:aspect-[3/3] w-full flex justify-center items-center">
            <Image
              src="/images/phone-png.jpg"
              alt="Hero Phone Mockup"
              fill
              className="object-contain p-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
