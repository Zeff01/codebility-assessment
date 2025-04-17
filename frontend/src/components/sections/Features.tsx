import Image from "next/image";
import Button from "../buttons/Button";

const features = [
  {
    title: "Deals Each Week",
    description:
      "Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal.",
    buttonTitle: "SHOP DEALS",
  },
  {
    title: "Everyday Essentials",
    description:
      "Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!",
    buttonTitle: "SHOP ESSENTIALS",
  },
  {
    title: "Download App",
    description:
      "Download the Moola App and start collecting cash back and bonus gift vouchers.",
    buttonTitle: "DOWNLOAD APP",
  },
];

const Features = () => {
  return (
    <section className="max-w-[1216px] w-full mx-auto px-4">
      <div className="w-full text-center mt-8 mb-8 min-[1200px]:mb-20">
        <h1 className="text-2xl min-[1200px]:text-4xl font-semibold min-[1200px]:w-[717px] mx-auto text-[#4c0d94] leading-9 min-[1200px]:leading-12 mb-4">
          Moola Saves Money On Gifts & Everyday Essentials
        </h1>
        <p className="min-[1200px]:max-w-[677px] mx-auto text-xs text-neutral-900/80">
          When we think about saving money, we often think about cutting back on
          non-essentials. However, that&apos;s usually not possible for special
          occasions or everyday purchases - gifts and dinners add up. So, making
          some small tweaks + great deals can make a big impact on your wallet.
          Through Moola, you can easily buy gift cards to your favourite stores
          at a lower price. Why not shop smarter, score deals, and savour the
          savings!
        </p>
      </div>
      <div className="flex flex-col min-[1200px]:flex-row">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-[80%] min-[1200px]:w-[348px] mx-auto min-[1200px]:mb-0 mb-8 bg-[#ececec] py-12 px-8 rounded-3xl flex flex-col"
          >
            <div className="flex items-center flex-1 mb-4">
              <Image
                src="https://www.moola.com/assets/media/images/info-card-tag.svg"
                alt="tag"
                height={35}
                width={35}
              />
              <h3 className="text-lg font-bold text-[#4c0d94] ">
                {feature.title}
              </h3>
            </div>
            <p className="text-xs flex-2 text-left mb-3 text-neutral-900/80">
              {feature.description}
            </p>
            <Button className="max-w-[190px] bg-[#4c0d94] py-4 border-0 text-sm">
              {feature.buttonTitle}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
