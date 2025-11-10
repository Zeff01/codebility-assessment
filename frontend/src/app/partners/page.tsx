import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MerchantSolutions() {
  const images = [
    { src: "/businesses/brand-1-jpg.webp", alt: "Image 1" },
    { src: "/businesses/brand-2-jpg.webp", alt: "Image 2" },
    { src: "/businesses/brand-3-jpg.webp", alt: "Image 3" },
    { src: "/businesses/brand-4-jpg.webp", alt: "Image 4" },
    { src: "/businesses/brand-5-jpg.webp", alt: "Image 5" },
    { src: "/businesses/brand-6-jpg.webp", alt: "Image 6" },
    { src: "/businesses/brand-7-jpg.webp", alt: "Image 7" },
    { src: "/businesses/brand-8-jpg.webp", alt: "Image 8" },
    { src: "/businesses/brand-9-jpg.webp", alt: "Image 9" },
    { src: "/businesses/brand-10-jpg.webp", alt: "Image 10" },
    { src: "/businesses/brand-11-jpg.webp", alt: "Image 11" },
    { src: "/businesses/brand-12-jpg.webp", alt: "Image 12" },
  ];
  return (
    <div>
      <div className="w-full flex justify-center px-5 lg:px-10 bg-[#8d48ff] bg-[url('/supercharge/bg-pattern.jpg')] bg-cover bg-center">
        <div className="flex flex-col sm:flex-row w-full max-w-6xl items-center justify-center">
          <div className="w-1/2 flex flex-col gap-5 sm:ml-2 text-white items-center sm:items-start pt-10 sm:pt-0">
            <p className="text-[12px] sm:text-[16px] font-normal uppercase text-center sm:text-start">COLLECT NOW, SUPPLY LATER</p>
            <p className="text-[18px] sm:text-[32px] font-medium leading-tight w-full sm:w-100 text-center sm:text-start">
              Supercharge Business Revenue.
            </p>
            <a
              href="/"
              className="bg-[#4C0D94] text-sm leading-[1.3em] tracking-[0.2px] text-white rounded-full px-[25px] py-[12px] w-40 text-center"
            >
              Request Demo
            </a>
          </div>

          <Image
            alt="Megaphone"
            width={570}
            height={447}
            src="/supercharge/Megaphone-1.png"
            className="w-1/2"
          />
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center px-5 space-y-5 py-5 lg:px-10">
        {/* moola merchant */}
        <div className="my-10 max-w-6xl">
          <p className="text-[#3b1c70] text-[24px] sm:text-[36px] font-semibold sm:leading-[48px] text-center mb-4"> Moola Merchant Solutions</p>
          <p className="text-[#3b1c70] text-[14px] leading-[22px] text-center mb-4 max-w-[880px]">Boost customer loyalty with Moola! Say goodbye to outdated loyalty programs that only reward after a certain number of purchases. Our innovative digital platform combines the simplicity of prepaid gift cards with the benefits of a loyalty program. Enhance the customer experience and strengthen their loyalty to your business with Moola.</p>
        </div>
        {/* virtual gifting */}
        <div className="max-w-6xl bg-[#eef7f8] py-10 px-5 sm:px-10 pb-30">
          <div className="text-center space-y-7">
            <p className="text-[#334753] text-[28px] md:text-[40px] font-normal">Let's form a <span className="font-semibold text-[#750DEA]">winning</span> partnership</p>
            <p className="text-sm text-gray-700 xl:mx-30">Moola is Canada’s best shopping platform for consumers and businesses alike! Contact us to find out how you can partner with Moola and join an exciting partnership. </p>
          </div>

          <form className="mx-auto p-6 text-[#6d799b]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="flex flex-col space-y-4">
                <label className="flex flex-col">
                  <p>Your Name <span className="text-red-500">*</span></p>                 
                  <input
                    type="text"
                    name="name"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white "
                  />
                </label>

                <label className="flex flex-col">
                  <p>Email  <span className="text-red-500">*</span></p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Work Email"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  />
                </label>

                <label className="flex flex-col">
                  <p>
                    Type of Business <span className="text-red-500">*</span>
                  </p>
                  <select
                    name="businessType"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food Delivery">Food Delivery</option>
                    <option value="Fashion & Apparel">Fashion & Apparel</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-4">
                <label className="flex flex-col">
                  <p>Your Company  <span className="text-red-500">*</span></p>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  />
                </label>

                <label className="flex flex-col">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  />
                </label>
              </div>

              {/* Full Width */}
              <div className="md:col-span-2 flex flex-col space-y-2">
                <label className="flex flex-col">
                  Anything else you'd like to share?
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-[#3b1c70] text-white font-semibold rounded-full hover:bg-purple-700 transition-colors"
              >
                Request Demo
              </button>
            </div>
          </form>

        </div>
        {/* join over 250 */}
        <div className="my-20 max-w-6xl">
          <p className="mb-15 text-[#3b1c70] text-[26px] sm:text-[34px] font-medium sm:leading-[48px] text-center"> Join over 250+ Canadian businesses</p>
          <div className="flex flex-wrap justify-center lg:justify-around gap-4">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={235}
                  height={174}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full h-[220px] flex justify-center px-5 lg:px-10 bg-white bg-[url('/eating.png')] bg-cover bg-center"
      >
        {/* subscribe */}
        <div className="relative z-10 text-start w-full max-w-md px-6 mt-25 sm:mt-21 2xl:mt-18">
          <h2 className="text-white text-sm sm:text-lg">
            Get Deals in Your Inbox
          </h2>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-white w-full rounded-md p-1 sm:p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="bg-[#3b1c70] hover:bg-purple-800 text-sm sm:text-lg text-white py-2 lg:py-3 rounded-full font-medium transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="w-full bg-gray-200 flex flex-col items-center px-5 pt-1 lg:px-10"></div>

    </div>
  );
}
