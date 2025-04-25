import React from "react";
import Image from "next/image";
import visa from "../../../public/images/visa.svg";
import mastercard from "../../../public/images/mastercard.svg";
import discover from "../../../public/images/discover.svg";
import moneris from "../../../public/images/moneris.svg";
import lock from "../../../public/images/lock.svg";
import logoWhite from "../../../public/images/logoWhite.svg";
import { footer } from "../data/data_NavLink";
import NavLink from "./NavLink";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="mt-10">
      {/* footer top */}
      <div className="bg-[#5713bd] py-3 px-5  text-white">
        <div className="max-w-7xl mx-auto py-3 flex justify-between items-center flex-col md:flex-row gap-y-5 md:gap-y-0">
          {/* first flex */}
          <div className="flex gap-5 items-center">
            <h2 className="text-sm capitalize font-bold">
              {" "}
              Accept Payment Methods
            </h2>
            <section className="flex gap-5">
              <Image src={visa} width={30} height={20} alt="visa" />
              <Image src={mastercard} width={30} height={20} alt="mastercard" />
              <Image src={discover} width={30} height={20} alt="discover" />
            </section>
          </div>
          {/* second flex */}
          <div className="flex gap-2 items-center">
            <Image src={lock} width={30} height={20} alt="lock" />
            <h2 className="text-sm capitalize font-bold">Payment Powered by</h2>
            <Image
              src={moneris}
              className="relative bottom-1.5"
              width={80}
              height={40}
              alt="moneris"
            />
          </div>
        </div>
      </div>
      {/* footer center */}
      <div className="bg-[#750dea] py-3 text-white pt-10">
        <div className="max-w-7xl mx-auto py-3">
          {/* logo and nav */}
          <div className="flex flex-col md:flex-row items-center  justify-between px-4 sm:px-6 gap-6 md:gap-0">
            <Image
              src={logoWhite}
              alt="logo"
              priority
              width={120}
              height={40}
              className="w-[100px] sm:w-[120px] h-auto"
            />
            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex items-center gap-x-8 md:gap-x-15 lg:gap-x-30 text-sm md:text-base justify-center md:justify-end">
                <NavLink navbarItems={footer} />
              </div>
            </div>
          </div>
          {/* social */}
          <div className="mt-10">
            <Social />
          </div>
          {/* info */}
          <p className="text-center text-sm md:text-base mt-5 w-[80%] md:w-[60%] mx-auto">
            Designated trademarks and brands are the property of their
            respective owners. Moola Inc. and its products are not affiliated or
            endorsed by such owners. Use of this (website/app) constitutes
            acceptance of Moola Inc. Privacy Policy and Terms of Use. Copyright
            © 2025 Moola Inc. All rights reserved.
          </p>
        </div>
      </div>
      {/* footer bottom */}
      <div className="bg-[#8942f4]  py-4 text-white">
        <div className="flex justify-center text-sm">
          <h1> Copyright © 2025 Quizeo Inc. All rights reserved. </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
