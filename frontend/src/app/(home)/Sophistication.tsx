import Image from "next/image";

type Tag = {
  count: string;
  title: string;
  paragraph: string;
};

const Sophistication = () => {
  const tags: Tag[] = [
    {
      count: "01",
      title: "Digital Identity Key",
      paragraph:
        "Secure your account with biometric keys and encrypted digital identity protocols.",
    },
    {
      count: "02",
      title: "Wealth Aggregation",
      paragraph:
        "Link your legacy and digital assets through our secure architectural portal.",
    },
    {
      count: "03",
      title: "Architectural Control",
      paragraph:
        "Manage your treasury with advanced automation and precise analytical tools",
    },
  ];

  return (
    <div>
      <div className="px-4 max-w-7xl mx-auto py-[clamp(1rem,8vw,30rem)]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex order-2 lg:order-1 justify-center flex-col gap-15">
            {tags.map((tag) => {
              return (
                <div className="flex gap-6" key={tag.title}>
                  <h1 className="text-[clamp(1.875rem,4vw,4.5rem)] font-bold text-gray-100">
                    {tag.count}
                  </h1>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#031635] font-semibold text-lg">
                      {tag.title}
                    </h2>
                    <p className="max-w-[39ch] text-md">{tag.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex order-1 lg:order-2 flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-[#00a776] font-semibold text-sm">PROCESS</h3>
              <h1 className="text-[clamp(1.3rem,7vw,2.25rem)] leading-none font-bold max-w-[20ch]">
                Sophistication Simplified. Crafted for the Modern Steward.
              </h1>
            </div>
            <div className="relative w-full max-w-140 aspect-[12/9] xl:w-140 xl:h-100 overflow-hidden rounded-2xl border-3 border-gray-200">
              <Image
                src="/images/sophistication.png"
                alt="Portfolio Image"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sophistication;
