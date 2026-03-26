"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { TextAlignJustify } from "lucide-react";

type NavLinks = {
  label: string;
  href: string;
  children?: NavLinks[];
};

const Header = () => {
  const navLinks: NavLinks[] = [
    { label: "Features", href: "/" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];

  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-100 bg-white">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-6">
            <TextAlignJustify className="block md:hidden" size={30} />
            <div>
              <p className="text-3xl text-[#1a2b4b] font-semibold">Moola</p>
            </div>
          </div>

          <ul className="hidden md:flex gap-8 font-semibold">
            {navLinks.map((link) => {
              return (
                <li key={link.href}>
                  <Link
                    className={`${pathname === link.href ? "text-[#1a2b4b] after:scale-x-100 -translate-y-1" : "text-gray-700"} hover:text-[#59fdbd] block  relative after:content-[''] after:transition-transform after:duration-300 after:h-0.75 after: after:scale-x-0 after:bg-[#59fdbd] after:absolute after:w-full after:origin-left after:block after:-bottom-2`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden md:flex">
            <button className="bg-[#59fdbd] text-[#031635] py-3 px-6 rounded-xl font-semibold transition-all duration-300 ease-in-out hover:bg-[#48e0a8] hover:shadow-[0_0_20px_rgba(89,253,189,0.4)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
