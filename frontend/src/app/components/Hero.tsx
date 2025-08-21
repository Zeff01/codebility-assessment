import { FaGooglePlay } from "react-icons/fa"
import { IoMdAppstore } from "react-icons/io"

export default function Hero() {
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="w-full h-120 border flex flex-col justify-center px-20 gap-5 bg-black/75 rounded-xl bg-blend-darken bg-[url('/wallet.png')] bg-center bg-contain bg-no-repeat ">
        <h3 className="text-2xl text-white">GIFTING MADE EASIER</h3>
        <h2 className="text-white text-4xl font-semibold">Buy a Gift Card,</h2>
        <h2 className="text-white text-4xl font-semibold">
          Get Cash Back Rewards
        </h2>
        <button className="p-4 bg-moola text-white rounded-3xl self-start hover:scale-105 cursor-pointer duration-200">
          Shop Weekly Deals
        </button>
      </div>
      <div className="h-70 flex max-[1000px]:flex-col max-[1000px]:h-150 gap-5 justify-between">
        <div className="w-1/2 max-[1000px]:w-full  h-full bg-orange-300/75 rounded-xl bg-blend-darken bg-[url('/investment.png')] flex gap-2 justify-between px-5 py-15 bg-center bg-contain bg-no-repeat">
          <div className="flex flex-col justify-between w-1/2">
            <h3 className="text-white text-2xl font-semibold">
              Send gift cards instantly through text
            </h3>
            <div className="flex gap-2 ">
              <button className="bg-moola rounded-xl flex gap-1 items-center text-white p-2 text-sm hover:scale-105 duration-200 cursor-pointer">
                <IoMdAppstore /> App Store
              </button>
              <button className="bg-moola rounded-xl flex gap-1 items-center text-white p-2 text-sm hover:scale-105 duration-200 cursor-pointer">
                <FaGooglePlay /> Google Play
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-[1000px]:w-full  h-full bg-blue-400/75 rounded-xl flex gap-2 justify-between px-5 py-15 bg-blend-darken bg-[url('/barbecue.png')] bg-center bg-contain bg-no-repeat">
          <div className="flex flex-col justify-between w-1/2">
            <h3 className="text-white text-2xl font-semibold">
              Invite a friend & get 1% Moola cash back on all their purchases.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
