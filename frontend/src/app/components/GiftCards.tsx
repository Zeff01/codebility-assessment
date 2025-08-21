import Image from "next/image"

export default function GiftCard() {
  //i could've maybe just used an array and pass it as props amd map it instead of hardcoding every card
  return (
    <section className="w-full flex flex-col gap-2 mt-10">
      <div className="grid grid-cols-5 max-[1000px]:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
        <div className="h-60 shadow-xl flex flex-col rounded-xl border-gray-300 border cursor-pointer hover:scale-105 duration-200">
          <div className="h-[55%] bg-gray-200 w-full flex items-center rounded-t-xl justify-center">
            <div className="bg-white h-15 w-15 rounded-xl flex items-center justify-center">
              <Image src={"/next.svg"} width={50} height={50} alt="next" />
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Next JS</h4>
            <div className="flex flex-col">
              <p className="text-sm">Buy Now and Get </p>
              <button className="bg-green-700 text-start text-sm text-white rounded-r-xl">
                1.5% More
              </button>
            </div>
          </div>
        </div>
        <div className="h-60 shadow-xl flex flex-col rounded-xl border-gray-300 border cursor-pointer hover:scale-105 duration-200">
          <div className="h-[55%] bg-gray-200 w-full flex items-center rounded-t-xl justify-center">
            <div className="bg-black h-15 w-15 rounded-xl flex items-center justify-center">
              <Image src={"/vercel.svg"} width={50} height={50} alt="vercel" />
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Vercel</h4>
            <div className="flex flex-col">
              <p className="text-sm">Buy Now and Get </p>
              <button className="bg-green-700 text-start text-sm text-white rounded-r-xl">
                10.5% More
              </button>
            </div>
          </div>
        </div>
        <div className="h-60 shadow-xl flex flex-col rounded-xl border-gray-300 border cursor-pointer hover:scale-105 duration-200">
          <div className="h-[55%] bg-gray-200 w-full flex items-center rounded-t-xl justify-center">
            <div className="bg-white h-15 w-15 rounded-xl flex items-center justify-center">
              <Image src={"/window.svg"} width={50} height={50} alt="window" />
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Window</h4>
            <div className="flex flex-col">
              <p className="text-sm">Buy Now and Get </p>
              <button className="bg-green-700 text-start text-sm text-white rounded-r-xl">
                1.2% More
              </button>
            </div>
          </div>
        </div>
        <div className="h-60 shadow-xl flex flex-col rounded-xl border-gray-300 border cursor-pointer hover:scale-105 duration-200">
          <div className="h-[55%] bg-gray-200 w-full flex items-center rounded-t-xl justify-center">
            <div className="bg-white h-15 w-15 rounded-xl flex items-center justify-center">
              <Image src={"/globe.svg"} width={50} height={50} alt="globe" />
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <h4 className="font-semibold text-sm">Globe</h4>
          </div>
        </div>
        <div className="h-60 shadow-xl flex flex-col rounded-xl border-gray-300 border cursor-pointer hover:scale-105 duration-200">
          <div className="h-[55%] bg-gray-200 w-full flex items-center rounded-t-xl justify-center">
            <div className="bg-white h-15 w-15 rounded-xl flex items-center justify-center">
              <Image src={"/file.svg"} width={50} height={50} alt="file" />
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <h4 className="font-semibold text-sm">File</h4>
            <div className="flex flex-col">
              <p className="text-sm">Buy Now and Get </p>
              <button className="bg-green-700 text-start text-sm text-white rounded-r-xl">
                5.5% More
              </button>
            </div>
          </div>
        </div>
        <div className="h-60 shadow-xl flex flex-col rounded-xl border-gray-300 border cursor-pointer hover:scale-105 duration-200">
          <div className="h-[55%] bg-gray-200 w-full flex items-center rounded-t-xl justify-center">
            <div className="bg-white h-15 w-15 rounded-xl flex items-center justify-center">
              <Image src={"/react.svg"} width={50} height={50} alt="react" />
            </div>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            <h4 className="font-semibold text-sm">React</h4>
            <div className="flex flex-col">
              <p className="text-sm">Buy Now and Get </p>
              <button className="bg-green-700 text-start text-sm text-white rounded-r-xl">
                7.5% More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
