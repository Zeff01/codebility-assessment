import Image from "next/image";
import SearchBar from "@/components/ui/searchbar";
import Footer from "@/components/ui/footer";
import CashbackShops from "@/components/ui/shops_cards";
import {
  FaApple,
  FaGooglePlay,
  FaTag,
  FaStar,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="content min-h-screen bg-white">
      {/* SearchBar Section */}
      <div>
        <SearchBar />
      </div>

      {/* Landing Page Content */}
      <main> 
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center mt-4 mx-10 lg:mx-40 md:mx-30 sm:mx-10">
          <div className="flex-1 w-full bg-[#7f4ceb] rounded-3xl flex items-center justify-center text-white/40 text-lg">
            {/* Main Card of Hero Section (Sorry po, I don't have the image for the hero section so I opted for a simple box and color) */}
            <div className="flex-1 text-center text-left ml-2 p-24">
              <p className="uppercase text-white lg:text-2xl sm:text-lg">
                Gifting Made Easier
              </p>
              <h1 className="font-eina text-xl text-white lg:text-5xl sm:text-xl font-bold leading-tight mt-2 mb-12">
                Buy A Gift Card, <br /> Get Cash Back Rewards
              </h1>
              <a
                href="#"
                className="uppercase py-6 px-8 text-xs lg:px-12 lg:py-7.5 lg:text-lg text-yellow-50 bg-gradient-to-r from-[#C202FB] to-[#521f91] hover:bg-gradient-to-br rounded-full shadow-xs sm:px-6 sm:py-5 sm:text-xs md:px-8 md:py-6 md:text-sm"
              >
                SHOP WEEKLY DEALS
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Two Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mx-10 lg:mx-40 md:mx-30 sm:mx-10">
          {/* Left Card */}
          <div className="bg-[#f99e8d] text-white rounded-3xl p-6 w-full flex flex-col">
            <h3 className="font-eina font-bold lg:text-2xl ml-2 mt-4">
              Send gift cards <br /> instantly through <br /> text.
            </h3>
            <div className="flex gap-2 mt-8">
              <button className="flex bg-[#4c0d94] text-white px-7 py-3 rounded-full text-sm items-center sm:text-2xs sm:text-left hover:bg-[#3c0676]">
                <a href="#" className="flex items-center">
                  <FaApple className="text-white h-7 w-7 mr-2 ml-[-0.8rem] sm:h-4 sm:w-4" />
                  <div>
                    <span className="flex text-3xs mb-[-0.2rem]">
                      Download on the
                    </span>
                    <span className="font-medium text-2xs lg:text-sm">
                      App Store
                    </span>
                  </div>
                </a>
              </button>

              <button className="flex bg-[#4c0d94] text-white px-5 py-3 rounded-full text-sm items-center sm:text-2xs sm:text-left hover:bg-[#3c0676]">
                <a href="#" className="flex items-center">
                  <FaGooglePlay className="text-white h-5 w-5 mr-2 sm:h-4 sm:w-4" />
                  <div>
                    <span className="flex text-3xs mb-[-0.2rem]">
                      GET IT ON
                    </span>
                    <span className="font-medium text-2xs lg:text-sm text-left">
                      Google Play
                    </span>
                  </div>
                </a>
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#9ea1e4] text-white rounded-3xl p-6 flex flex-col">
            <h3 className="font-eina font-bold lg:text-2xl ml-2 mt-4">
              Invite a friend & <br /> get 1% Moola cash <br /> back on all their <br /> purchases.
            </h3>
          </div>
        </div>

        {/* Send A Gift Card and Collect Rewards */} 
        <div className="flex justify-center items-center mt-16"> 
          <span className="font-eina font-bold text-[#4c0d94] lg:text-4xl md:text-2xl sm:text-2xl justify-center items-center"> 
          Send A Gift Card and  
          </span> 
        </div> 
        <div className="flex justify-center items-center"> 
          <span className="font-eina font-bold text-[#4c0d94] lg:text-4xl md:text-2xl sm:text-2xl justify-center items-center"> 
          Collect Rewards 
          </span> 
        </div> 
        <div className="flex justify-center text-center mt-4 mx-10 lg:mx-110 md:mx-70 sm:mx-10"> 
          <span className="font-medium text-gray-700 lg:text-xs md:text-xs sm:text-xs justify-center items-center"> 
          Moola provides unbeatable deals on the gift cards you love.  
          Buy for a friend or better yet, for yourself and collect rewards.  
          With Moola, giving the perfect gift and saving money on the brands you love has never been easier or more convenient.  
          Shop over 250 brands across Canada. 
          </span> 
        </div>

        {/* Shops with Cashbacks Section */}
        <div className="mt-16 lg:mx-40 md:mx-30 sm:mx-10">
          <CashbackShops />
        </div>

        {/* Virtual Gifting Section */}
        <div className="mt-16 bg-[#f2e7fd] shadow-xl/20 rounded-3xl pb-20 lg:mx-40 md:mx-30 sm:mx-10 font-eina">
          <div className="pt-8"> 
            <h2 className="text-center font-semibold text-[#4c0d94] lg:text-3xl md:text-3xl sm:text-2xl">
              Virtual Gifting With A Personal Touch
            </h2>
            <p className="text-center font-medium text-gray-700 lg:text-xs md:text-xs sm:text-xs mt-4 mx-10 lg:mx-auto lg:max-w-3xl md:max-w-xl sm:max-w-md"> 
              You can&apos;t always be there in person for special celebrations, but you can always send your regards and congratulations through email or text.
              It&apos;s the thought that counts!!
              Through Moola, you can send gifts from big and niche brands to your loved ones instantly.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-8 mx-10 lg:mx-40 md:mx-30 sm:mx-10">
              {/* Left Text Block */}
              <div className="md:w-1/3 text-left">
                <h3 className="lg:text-2xl md:text-2xl sm:text-2xl font-semibold text-[#4c0d94] mb-2">
                  Hassle-free<br />long distance gift giving
                </h3>
                <p className="text-gray-700 lg:text-sm md:text-sm sm:text-xs">
                  Say goodbye to the stress of finding the perfect gift and having it arrive on-time.
                  With Moola, you can easily search, purchase and send digital gift cards in less than 1 minute.
                </p>
              </div>

              {/* Center Image Block */}
              <div className="md:w-1/3 flex justify-center relative">
                <div className="w-60 h-60 bg-[#f6baff] rounded-3xl"></div>
                <Image
                  src="/phone.png"
                  alt="Phone showing Moola app interface" 
                  width={180}
                  height={150}
                  className="absolute -top-8"
                  priority={false}
                />
              </div>

              {/* Right Text Block */}
              <div className="md:w-1/3 text-left">
                <h3 className="lg:text-2xl md:text-2xl sm:text-2xl font-semibold text-[#4c0d94] mb-2">
                  Monitor gift delivery as if you&apos;re there
                </h3>
                <p className="text-gray-700 lg:text-sm md:text-sm sm:text-xs">
                  Stop questioning if a recipient has received your gift. Track gift card delivery
                  and open rates on the Moola App.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Moola Saves Money Section */}
        <div className="flex justify-center items-center mt-16"> 
          <span className="font-eina font-bold text-[#4c0d94] lg:text-4xl md:text-2xl sm:text-2xl justify-center items-center"> 
          Moola Saves Money On Gifts & Everyday Essentials 
          </span> 
        </div> 
        <div className="flex justify-center text-center mt-4 mx-10 lg:mx-110 md:mx-70 sm:mx-10"> 
          <span className="font-medium text-gray-700 lg:text-xs md:text-xs sm:text-xs justify-center items-center"> 
          When we think about saving money, we often think about cutting back on non-essentials. 
          However, that&apos;s usually not possible for special occasions or everyday purchases - gifts and dinners add up.  
          So, making some small tweaks + great deals can make a big impact on your wallet. 
          Through Moola, you can easily buy gift cards to your favourite stores at a lower price.
          Why not shop smarter, score deals, and savour the savings! 
          </span> 
        </div>

        {/* 3 Boxes Section (Deals, Essentials, App) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 mx-10 lg:mx-40 md:mx-30 sm:mx-10 text-left">
          {/* Left Box: Deals */}
          <div className="bg-gray-200 rounded-4xl text-left flex flex-col items-start gap-4 lg:py-16 lg:px-10 md:py-10 md:px-6 py-6 px-6">
            <h3 className="font-eina font-bold text-[#4c0d94] text-lg flex items-center">
              <FaTag className="text-[#C702FC] h-4 w-4 mr-2" />
              Deals Each Week
            </h3>
            <p className="font-medium text-gray-900 text-xs">
              Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands.
              Check out this week&apos;s feature deal.
            </p>
            <a
              href="#"
              className="bg-[#4c0d94] text-white px-10 py-4 rounded-full text-xs hover:bg-[#3c0676] text-center"
            >
              SHOP DEALS
            </a>
          </div>

          {/* Center Box: Essentials */}
          <div className="bg-gray-200 rounded-4xl text-left flex flex-col items-start gap-4 lg:py-16 lg:px-10 md:py-10 md:px-6 py-6 px-6">
            <h3 className="font-eina font-bold text-[#4c0d94] text-lg flex items-center">
              <FaTag className="text-[#C702FC] h-4 w-4 mr-2" />
              Everyday Essentials
            </h3>
            <p className="font-medium text-gray-900 text-xs">
              Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more.
              It all adds up to great savings!
            </p>
            <a
              href="#"
              className="bg-[#4c0d94] text-white px-10 py-4 rounded-full text-xs hover:bg-[#3c0676] text-center"
            >
              SHOP ESSENTIALS
            </a>
          </div>

          {/* Right Box: Download App */}
          <div className="bg-gray-200 rounded-4xl text-left flex flex-col items-start gap-4 lg:py-16 lg:px-10 md:py-10 md:px-6 py-6 px-6">
            <h3 className="font-eina font-bold text-[#4c0d94] text-lg flex items-center">
              <FaTag className="text-[#C702FC] h-4 w-4 mr-2" />
              Download App
            </h3>
            <p className="font-medium text-gray-900 text-xs">
              Download the Moola App and start collecting cash back and bonus gift vouchers.
            </p>
            <a
              href="#"
              className="bg-[#4c0d94] text-white px-10 py-4 rounded-full text-xs hover:bg-[#3c0676] text-center"
            >
              DOWNLOAD APP
            </a>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-center mt-22">
          <h2 className="font-eina font-bold text-[#4c0d94] lg:text-4xl md:text-2xl sm:text-2xl">
            What Do Customers Think About Moola?
          </h2>
        </div>

        <div className="grid grid-cols-1 font-eina font-semibold lg:grid-cols-3 gap-8 mt-8 mx-10 lg:mx-40 md:mx-30 sm:mx-10 items-start justify-center"> 
          {/* Left Review Box */}
          <div className="bg-white h-full shadow-xl/20 inset-shadow-sm rounded-4xl flex flex-col items-center text-center gap-4 lg:py-16 lg:px-10 md:py-10 md:px-6 py-6 px-6">
            <p className="text-gray-500 text-xs flex-grow">
              This is a great app that saves money. Saved over 200 dollars so far!
            </p>
            <div className="flex items-center gap-1 mt-4">
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
            </div>
            <div>
              <Image
                className="h-10 w-auto mt-4"
                src="/applestore.png"
                alt="Apple App Store Logo" 
                width={80} 
                height={27} 
              />
            </div>
          </div>

          {/* Center Review Box */}
          <div className="bg-white h-full shadow-xl/20 inset-shadow-sm rounded-4xl flex flex-col items-center text-center gap-4 lg:py-16 lg:px-10 md:py-10 md:px-6 py-6 px-6">
            <p className="text-gray-500 text-xs flex-grow"> 
              Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store.
              It also helped me organize all my rewards cards in one place which stream-lined my wallet.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
            </div>
            <div>
              <Image
                className="h-10 w-auto mt-4"
                src="/google.png" 
                alt="Google Logo" 
                width={80} 
                height={27}
              />
            </div>
          </div>

          {/* Right Review Box */}
          <div className="bg-white h-full shadow-xl/20 inset-shadow-sm rounded-4xl flex flex-col items-center text-center gap-4 lg:py-16 lg:px-10 md:py-10 md:px-6 py-6 px-6">
            <p className="text-gray-500 text-xs flex-grow">
              It&apos;s very easy to use, has more than 200 brands, and also lots of discounts and bonuses.
              Once you&apos;ve paid you can receive the gift cards within 1 minute.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
              <FaStar className="text-[#ff9e00] h-4 w-4" />
            </div>
            <div>
              <Image
                className="h-10 w-auto mt-4"
                src="/googleplay.png"
                alt="Google Play Store Logo"
                width={80} 
                height={24}
              />
            </div>
          </div>
        </div>

      </main> {/* End main tag */}

      {/* Footer Section */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}