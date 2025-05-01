import Image from "next/image";
export default function Banner() {
  return (
    <main className=" w-full md:py-4 p-2 md:px-6">
      <Image
        src="/banners/main-banner.png"
        alt="banner"
        width={5000}
        height={5000}
        className=" w-full h-auto object-cover rounded-2xl"
      />
      <div className=" w-full flex flex-col md:flex-row gap-1 md:gap-4 mt-2 md:mt-4">
        <Image
          src="/banners/ads1.png"
          alt="ads"
          width={10000}
          height={10000}
          className=" w-full md:w-auto h-auto object-cover rounded-2xl"
        />
        <div className="bg-[url('/banners/ads2.jpg')] bg-cover bg-center md:h-auto h-40 w-full rounded-2xl flex justify-center items-center">
          <button className=" bg-gradient-to-r from-red-500 to-red-900 py-4 px-6 md:py-3 md:px-6 font-bold text-xs md:text-base rounded-full text-white cursor-pointer animate-bounce">
            CHECK OUT NOW
          </button>
        </div>
      </div>
    </main>
  );
}
