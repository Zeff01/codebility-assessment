import Link from "next/link";

import Image from "next/image";
import facebook from "../../../public/facebook.png";
import youtube from "../../../public/youtube.png";

import instagram from "../../../public/instagram.png";
import linkedln from "../../../public/linkedln.png";
import twitter from "../../../public/twitter.png";

export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "Services",
      links: [
        { name: "Shop", href: "/shop", id: "shop" },
        {
          name: "Winter Holiday Sale",
          href: "/winter-holiday-gift-sale",
          id: "sale",
        },
        { name: "How It Works", href: "/how", id: "how-it-works" },
        { name: "Refer & Earn", href: "/referral-program", id: "refer-&-earn" },
        {
          name: "Merchant Solutions",
          href: "/partners",
          id: "merchant-solutions",
        },
      ],
    },

    {
      id: 2,
      title: "Company",
      links: [
        { name: "About us", href: "/about-us", id: "about-us" },
        { name: "Contact", href: "/contact", id: "contact" },
        { name: "Help Center", href: "/help-center", id: "help-center" },
      ],
    },
    {
      id: 3,
      title: "Legal",
      links: [
        { name: "Terms of use", href: "/terms", id: "terms" },
        {
          name: "Privacy Policy",
          href: "/privacy-policy",
          id: "privacy-policy",
        },
        { name: "Cookie Policy", href: "/cookie-policy", id: "cookie-policy" },
      ],
    },
  ];

  return (
    <footer>
      <div className=" max-sm:px-10 md:px-60 bg-primary py-5 text-gray">
        <div className="links grid grid-cols-2 gap-5 md:grid-cols-3">
          {footerLinks.map((link) => (
            <div className="" key={link.id}>
              <h1 className="font-bold">{link.title}</h1>

              <ul>
                {link.links.map((item) => (
                  <li
                    key={item.id}
                    className="hover:underline transition-all duration-500"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-sm:flex-col py-3 bg-secondary justify-between items-center md:px-60">
        <div className=" items-start text-gray text-sm">
          © {new Date().getFullYear()} Moola — All rights reserved.
        </div>
        <div className="socials flex gap-2">
          <a
            href="https://web.facebook.com/MoolaCanada?_rdc=1&_rdr#"
            className="hover:cursor-pointer"
          >
            <Image src={facebook} alt="facebook icon" className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com/moolacanada/"
            className="hover:cursor-pointer"
          >
            <Image src={instagram} alt="instagram icon" className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com/@moola8709"
            className="hover:cursor-pointer"
          >
            <Image src={youtube} alt="youtube icon" className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/moolacanada/"
            className="hover:cursor-pointer"
          >
            <Image src={linkedln} alt="linkedln icon" className="h-7 w-7" />
          </a>

          <a href="https://x.com/moolacanada" className="hover:cursor-pointer">
            <Image src={twitter} alt="twitter icon" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
