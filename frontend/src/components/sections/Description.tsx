import Image from "next/image";

const Description = () => {
  return (
    <div className="max-w-[1216px] w-full mx-auto px-4">
      <div className="py-5 px-4 mt-8 mb-8 min-[1200px]:mb-20 bg-[#fbe6ff] shadow-[0_4px_4px_2px_rgba(0,0,0,0.25)] rounded-[10px]">
        <div className="text-center">
          <h2 className="text-[28px] font-semibold text-[#4c0d94] mb-4">
            Virtual Gifting With A Personal Touch
          </h2>
          <p className="min-[1200px]:max-w-[568px] w-full min-[1200px]:mx-auto text-xs text-neutral-900/80">
            You can&apos;t always be there in person for special celebrations,
            but you can always send your regards and congratulations through
            email or text. <i>It&apos;s the thought that counts!!</i> Through
            Moola, you can send gifts from big and niche brands to your loved
            ones instantly.
          </p>
        </div>
        <div className="flex flex-col min-[1200px]:flex-row items-center justify-center">
          <Image
            src="https://www.moola.com/assets/media/gif/attachment.gif"
            alt="gif"
            height={300}
            width={300}
            unoptimized
            className="my-4 min-[1200px]:order-2 w-[300px] min-[1200px]:w-[325px]"
          />
          <div className="w-[93%] min-[1200px]:w-[300px] mb-4 min-[1200px]:order-1">
            <h3 className="text-[#4c0d94] text-lg font-bold mb-4 leading-5">
              Hassle-free <br /> long distance gift giving
            </h3>
            <p className=" text-sm text-neutral-900 mb-3">
              Say goodbye to the stress of finding the perfect gift and having
              it arrive on-time. With Moola, you can easily search, purchase and
              send digital gift cards in less than 1 minute.
            </p>
          </div>
          <div className="w-[93%] min-[1200px]:w-[300px] min-[1200px]:pb-[30px] mb-4 min-[1200px]:order-3">
            <h3 className="text-[#4c0d94] text-lg font-bold mb-4 leading-5">
              Monitor gift delivery as if
              <br /> you&apos;re there
            </h3>
            <p className=" text-sm text-neutral-900 mb-3">
              Stop questioning if a recipient has received your gift. Track gift
              card delivery and open rates on the Moola App.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
