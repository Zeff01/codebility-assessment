import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import Banner from "../../components/banner";
import AdsMessage from "../../components/ads-message";
import Products from "../../components/products";
export default function Home() {
  return (
    <div className=" h-screen w-full">
      <header className=" p-3 flex flex-row items-center justify-between">
        <button id="logo">
          <span className=" text-black">Tipsy</span>
          <span className=" text-red-500">Drinks</span>
        </button>
        <div className=" flex flex-row items-center">
          <button className=" bg-gradient-to-r from-red-500 to-red-900 py-3 px-3 md:px-6 font-bold text-xs rounded-full text-white mr-2 md:mr-4">
            DOWNLOAD NOW
          </button>
          <Image
            src="/icons/ph-flag.svg"
            alt="flag"
            width={0}
            height={0}
            className=" w-auto h-6 mr-1"
          />
          <p className=" text-sm font-bold">PH</p>
        </div>
      </header>
      <div className=" bg-red-500 w-full py-4 px-6 flex flex-row">
        <input
          type="search"
          placeholder="Search for drinks..."
          className=" w-full rounded-l-full bg-white p-2 px-4 outline-0"
        />
        <button className=" p-2 rounded-r-full bg-red-900 w-[20vw] md:w-[6vw] flex justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className=" w-auto h-4 text-white"
          />
        </button>
      </div>{" "}
      <Banner />
      <AdsMessage />
      <Products />
      <footer className=" w-full bg-gradient-to-r from-red-500 to-red-900 py-4 md:py-8 px-4 md:px-12 flex flex-col items-center">
        <ol className=" text-xs flex flex-row justify-around text-white font-bold underline md:text-base cursor-pointer w-full">
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>Help Center</li>
          <li>Contact Us</li>
        </ol>
        <div className=" mt-6 flex justify-center space-x-6">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-white h-5 w-5 hover:text-gray-300 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-white h-5 w-5 hover:text-gray-300 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white h-5 w-5 hover:text-gray-300 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTiktok}
            className="text-white h-5 w-5 hover:text-gray-300 cursor-pointer"
          />
        </div>
        <p className=" text-center font-bold text-sm w-[80%] md:w-[50%] text-white mt-6">
          Must be 21 or older to purchase. Please drink responsibly. Crafted
          with care for your good times.
        </p>
      </footer>
      <div className=" w-full bg-red-500 p-2 md:p-6 text-center">
        <p className=" text-white font-bold text-sm md:text-base">
          © 2025 Tipsy Drinks. All rights reserved.
        </p>
      </div>
    </div>
  );
}
