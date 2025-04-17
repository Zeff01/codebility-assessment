import Image from "next/image";

const brands = [
  {
    name: "Amazon.ca",
    src: "https://api.moola.com/assets/images/d65c70c5-c7aa-4161-9e5b-118ad8b71740.jpg",
    buy: false,
  },
  {
    name: "Petsmart",
    src: "https://api.moola.com/assets/images/192168207_49_-1478502323.jpg",
    percent: "6",
    buy: true,
  },
  {
    name: "DoorDash",
    src: "https://api.moola.com/assets/images/192168207_49_-174967065.jpg",
    percent: "1.5",
    buy: true,
  },
  {
    name: "Starbucks",
    src: "https://api.moola.com/assets/images/192168207_56_-2024490794.png",
    buy: false,
  },
  {
    name: "Uber",
    src: "https://api.moola.com/assets/images/7f5241a0-df66-4cb3-ba97-e1d3a590440c.jpg",
    percent: "1",
    buy: true,
  },
  {
    name: "Walmart Canada",
    src: "https://api.moola.com/assets/images/192168207_49_-347948234.png",
    percent: "1",
    buy: true,
  },
  {
    name: "Wayfair",
    src: "https://api.moola.com/assets/images/7_781508128.png",
    percent: "1",
    buy: true,
  },
  {
    name: "Esso™ and Mobil...",
    src: "https://api.moola.com/assets/images/192168207_51_859781913.jpg",
    percent: "1",
    buy: true,
  },
];

const PopularDeals = () => {
  return (
    <section className="max-w-[1216px] w-full mx-auto p-4">
      <div className="w-full text-center mt-8 mb-8 min-[1200px]:mb-20">
        <h1 className="text-2xl min-[1200px]:text-4xl font-semibold text-[#4c0d94] leading-9 min-[1200px]:leading-12 mb-4">
          Send A Gift Card and <br /> Collect Rewards
        </h1>
        <p className="min-[1200px]:max-w-[677px] mx-auto text-xs text-neutral-900/80">
          Moola provides unbeatable deals on the gift cards you love. Buy for a
          friend or better yet, for yourself and collect rewards. With Moola,
          giving the perfect gift and saving money on the brands you love has
          never been easier or more convenient. Shop over 250 brands across
          Canada.
        </p>
      </div>
      <div className="flex flex-wrap justify-between">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="w-[150px] min-[417px]:w-[185px] min-[1200px]:w-[220px] mb-4 rounded-lg shadow-[-1px_2px_8px_rgba(0,0,0,0.19)] hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer border border-gray-300"
          >
            <div className="p-6 text-center bg-[#ececec] flex justify-center items-center">
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                height={96}
                width={96}
                className="rounded-[20px]"
              />
            </div>
            <div className="p-4 min-h-[107px]">
              <h3 className="text-sm font-semibold text-[#494c56] py-1.5">
                {brand.name}
              </h3>
              <h3 className="text-sm font-[family-name:var(--font-roboto)]">
                {brand.buy ? "Buy Now and Get" : ""}
              </h3>
              {brand.name !== "Amazon.ca" && brand.name !== "Starbucks" && (
                <h3 className="w-full rounded-r-full bg-[#393] text-sm font-bold text-white pl-1">
                  {brand.percent}% More
                </h3>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDeals;
