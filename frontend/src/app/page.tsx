import ButtonCardComponent from "@/components/ButtonCardComponent";
import CustomerCardComponent from "@/components/CustomerCard";
import ImageSwiper from "@/components/ImageSwiper";
import StoreCardComponent from "@/components/StoreCard";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const stores = [
    { image: "/shops/shop1.jpg", shopName: "Petsmart", promo: 6 },
    { image: "/shops/shop2.jpg", shopName: "Walmart Canada", promo: 1 },
    { image: "/shops/shop3.jpg", shopName: "DoorDash", promo: 1.5 },
    { image: "/shops/shop4.jpg", shopName: "Starbucks"},
    { image: "/shops/shop5.jpg", shopName: "Esso™ and Mobil...", promo: 1 },
    { image: "/shops/shop6.jpg", shopName: "Amazon.ca"},
  ];

  const cards = [
    {
      title: "Deals Each Week",
      description: "Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal",
      buttonText: "SHOP DEALS",
    },
    {
      title: "Everyday Essentials",
      description: "Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!",
      buttonText: "SHOP ESSENTIALS",
    },
    {
      title: "Download App",
      description: "Download the Moola App and start collecting cash back and bonus gift vouchers.",
      buttonText: "DOWNLOAD APP",
    },
  ]

  const reviews = [
    {
      comment: "This is a great app that saves money. Saved over 200 dollars so far!",
      stars: "/reviews/5stars.png",
      brand: "/reviews/apple-store-icon.png",
    },
    {
      comment: "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.",
      stars: "/reviews/5stars.png",
      brand: "/reviews/google-store-icon.png",
    },
    {
      comment: "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute.",
      stars: "/reviews/5stars.png",
      brand: "/reviews/google-play-store-icon.png",
    },
  ]

  return (
    <div className="">
      {/* search box */}
      <div className="w-full bg-[#7514e3] flex justify-center px-5 lg:px-10">
        <div className="flex w-full max-w-6xl items-center py-5">
          {/* Input */}
          <input
            type="text"
            placeholder="Search over 250 gift card brands"
            className="bg-white w-full rounded-l-full px-4 py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />

          {/* Search button */}
          <button
            className="flex h-full items-center justify-center bg-[#4c0d94] rounded-r-full px-6 py-2 hover:bg-purple-700"
            aria-label="Search"
          >
            <Search className="text-white" size={20} />
          </button>
        </div>
      </div>
      {/* content */}
      <div className="w-full bg-white flex flex-col items-center px-5 space-y-5 py-5 lg:px-10">
        {/* swiper */}
        <div className="max-w-6xl">
          <ImageSwiper images={[
            { src: "/slides/slide1.png", alt: "First image" },
            { src: "/slides/slide2.png", alt: "Second image" },
          ]}/>
        </div>
        {/* featured images */}
        <div className="w-full max-w-6xl flex flex-col sm:flex-row gap-4 justify-between">
          <ImageSwiper images={[
            { src: "/slides/slide3.png", alt: "3rd image" },
          ]}/>
          <ImageSwiper images={[
            { src: "/slides/slide4.png", alt: "4th image" },
          ]}/>
        </div>
        {/* send gift card */}
        <div className="my-10 max-w-6xl">
          <p className="text-[#4c0d94] text-[24px] sm:text-[36px] font-semibold sm:leading-[48px] text-center mb-4"> Send a Gift Card and<br></br>Collect Rewards</p>
          <p className="text-gray-900 text-[12px] leading-[18px] text-center mb-4 max-w-[677px]">Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada.</p>
        </div>
        {/* stores */}
        <div className="max-w-6xl flex flex-wrap lg:gap-5 justify-center xl:justify-between gap-10">
          {stores.map((store, index) => (
            <StoreCardComponent
              key={index}
              image={store.image}
              storeName={store.shopName}
              promo={store.promo}
            />
          ))}
        </div>
        {/* virtual gifting */}
        <div className="max-w-6xl bg-[#fbe6ff] rounded-xl shadow-[0_4px_4px_2px_#00000040] flex flex-col text-black mt-20 py-10 px-5 sm:px-10">
          <div className="text-center space-y-4">
            <p className="text-[#4c0d94] text-[24px] md:text-[28px]  font-semibold">Virtual Gifting With A Personal Touch</p>
            <p className="text-sm text-gray-700 lg:mx-30 xl:mx-74">You can't always be there in person for special celebrations, but you can always send your regards and congratulations through email or text. It's the thought that counts!! Through Moola, you can send gifts from big and niche brands to your loved ones instantly.</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start justify-center">
            <div className="text-center md:text-start md:w-75 space-y-4 mt-10">
              <p className="text-[#4c0d94] text-[18px] font-semibold">Hassle-free <br></br> long distance gift giving</p>
              <p className="text-sm text-gray-700">Say goodbye to the stress of finding the perfect gift and having it arrive on-time. With Moola, you can easily search, purchase and send digital gift cards in less than 1 minute.</p>
            </div>
            <Image
              alt="Logo"
              width={300}
              height={300}
              src="/attachment.gif"
              className="my-5"
            />
            <div className="text-center md:text-start md:w-75 space-y-4 mt-10">
              <p className="text-[#4c0d94] text-[18px] font-semibold">Monitor gift delivery as if <br></br>you're there</p>
              <p className="text-sm text-gray-700">Stop questioning if a recipient has received your gift. Track gift card delivery and open rates on the Moola App.</p>
            </div>
          </div>
        </div>
        {/* moola saves */}
        <div className="my-10 max-w-6xl">
          <p className="text-[#4c0d94] text-[24px] md:text-[36px] font-semibold md:leading-[48px] text-center mb-4"> Moola Saves Money On Gifts & <br></br> Everyday Essentials</p>
          <p className="text-gray-900 text-[12px] leading-[18px] text-center mb-4 max-w-[677px]">When we think about saving money, we often think about cutting back on non-essentials. However, that's usually not possible for special occasions or everyday purchases - gifts and dinners add up. So, making some small tweaks + great deals can make a big impact on your wallet. Through Moola, you can easily buy gift cards to your favourite stores at a lower price. Why not shop smarter, score deals, and savour the savings!</p>
        </div>
        {/* button card */}
        <div className="w-full max-w-6xl flex justify-center flex-wrap xl:justify-between gap-10">
          {cards.map((card, index) => (
            <ButtonCardComponent
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </div>
        {/* reviews */}
        <div className="w-full max-w-6xl my-20">
          <p className="text-[28px] font-semibold text-center text-[#55199b] pb-5">What Do Customers Think About Moola</p>
          <div className="w-full max-w-6xl flex justify-center flex-wrap xl:justify-between gap-10">
            
            {reviews.map((review, index) => (
              <CustomerCardComponent
                key={index}
                comment={review.comment}
                stars={review.stars}
                brand={review.brand}
              />
            ))}
          </div>
        </div>
      </div>
      {/* subfooter */}
      <div className="w-full bg-[#5713bd] py-5 sm:h-[70px] flex justify-center items-center px-5 lg:px-10">
        <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <p className="text-xs text-white font-medium">Accepted Payment Methods</p>
            <Image
              alt="Logo"
              width={25}
              height={19}
              src="/subfooter/visa.svg"
            />
            <Image
              alt="Logo"
              width={25}
              height={19}
              src="/subfooter/mastercard.svg"
            />
            <Image
              alt="Logo"
              width={25}
              height={19}
              src="/subfooter/discover.svg"
            />
          </div>
          <div className="flex gap-3 items-center">
            <Image
              alt="Logo"
              width={15}
              height={15}
              src="/subfooter/lock.svg"
            />
            <p className="text-xs text-white font-medium">Payments Powered by</p>
            <Image
              alt="Logo"
              width={85}
              height={25}
              src="/subfooter/moneris.svg"
              className="mb-[13px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
