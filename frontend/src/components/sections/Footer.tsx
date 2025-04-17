import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  "Privacy Policy",
  "Terms & Conditions",
  "Help Center",
  "Contact Us",
];

const socials = [
  { name: "instagram", src: "/socials/instagram.svg" },
  { name: "twitter", src: "/socials/twitter.svg" },
  { name: "facebook", src: "/socials/facebook.svg" },
  { name: "youtube", src: "/socials/youtube.svg" },
  { name: "linkedin", src: "/socials/linkedin.svg" },
];

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="px-4 bg-[#5713bd]">
        <div className="max-w-[1140px] max-[760px]:h-[105px] h-[70px] flex max-[760px]:flex-col justify-between mx-auto items-center">
          <div className="flex flex-1 justify-start items-center">
            <span className="text-white mr-2 text-xs">
              Accepted Payment Methods
            </span>
            <Image
              src="https://www.moola.com/assets/media/icons/visa.svg"
              alt="visa card"
              height={19}
              width={29}
              className="mx-4 w-[29px] h-[19px]"
            />
            <Image
              src="https://www.moola.com/assets/media/icons/mastercard.svg"
              alt="mastercard"
              height={19}
              width={29}
              className="mx-4 w-[29px] h-[19px]"
            />
            <Image
              src="https://www.moola.com/assets/media/icons/discover.svg"
              alt="discover"
              height={19}
              width={29}
              className="mx-4 w-[29px] h-[19px]"
            />
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Image
              src="https://www.moola.com/assets/media/icons/lock.svg"
              alt="lock icon"
              height={15}
              width={15}
              className="mr-2"
            />
            <span className="text-white mr-2 text-xs">Payments Powered by</span>
            <Image
              src="https://www.moola.com/assets/media/icons/moneris.svg"
              alt="Moneris"
              height={0}
              width={0}
              className="pb-[13px] w-[85px] h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#750dea] text-center">
        <div>
          <ul className="max-[1024px]:mt-[65px] max-[1024px]:w-full max-[1024px]:p-0 min-[1400px]:mt-7 mb-4 pt-4 pl-8 inline-block min-[1024px]:text-justify">
            <li className="top-7 relative max-[1024px]:w-full max-[1024px]:mr-0 mr-[90px] min-[1230px]:mr-[126px] inline-block">
              <Link
                href={"/"}
                className="max-[1024px]:flex max-[1024px]:justify-center"
              >
                <Image
                  src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_white.svg"
                  alt="logo"
                  width={140}
                  height={28}
                  className="align-middle"
                />
              </Link>
            </li>
            {footerLinks.map((link) => (
              <li
                key={link}
                className="top-[1.250em] max-[1024px]:w-full max-[1024px]:mr-0 relative mr-[90px] min-[1230px]:mr-[126px] inline-block  mb-3"
              >
                <p className="max-[760px]:text-sm text-sm font-medium text-white underline text-center cursor-pointer max-[1024px]:text-lg max-[1024px]:mt-[45px]">
                  {link}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="mt-8 pl-8 inline-block text-justify">
            {socials.map((social) => (
              <li key={social.name} className="mb-3 inline-block mr-6">
                <Image
                  src={social.src}
                  alt={social.name}
                  height={20}
                  width={20}
                  className="w-5 h-5 object-contain cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
        <p className="max-w-[735px] mx-auto text-xs font-medium text-center inline-block text-white p-4 mb-3">
          Designated trademarks and brands are the property of their respective
          owners. Moola Inc. and its products are not affiliated or endorsed by
          such owners. Use of this (website/app) constitutes acceptance of Moola
          Inc. Privacy Policy and Terms of Use. Copyright © 2025 Moola Inc. All
          rights reserved.
        </p>
      </div>
      <div className="bg-[#8942f4] p-4 text-center">
        <p className="text-xs text-white ">
          {" "}
          Copyright © 2025 Moola Inc. All rights reserved.{" "}
        </p>
      </div>
      <div className="flex min-[1280px]:hidden w-full justify-center items-center gap-4 min-[1025px]:gap-0 max-[400px]:flex-col">
        <Image
          src="https://www.moola.com/assets/media/images/app-store.png"
          alt="App store button"
          width={176}
          height={62}
          className="mb-6 mt-4"
        />
        <Image
          src="https://www.moola.com/assets/media/images/play-store.png"
          alt="Google play button"
          width={176}
          height={62}
          className="mb-6 mt-4"
        />
      </div>
    </footer>
  );
};

export default Footer;
