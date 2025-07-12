"use client";

import Button from "@/features/dashboard/components/ui/button";
import Menu from "@/features/dashboard/components/ui/menu";
import Image from "next/image";

interface LinksType {
  label: string;
  href: string;
}

function Header() {
  const links: LinksType[] = [
    { label: "Shop", href: "#" },
    { label: "Winter Holiday Sale", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Refer & Earn", href: "#" },
    { label: "Merchant Solutions", href: "#" },
  ];
  return (
    <header className='w-full flex items-center justify-between gap-4 py-4 px-6 2xl:max-w-7xl 2xl:mx-auto '>
      <Image
        width={120}
        height={28}
        src='https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg'
        alt='Moola Logo'
        loading='lazy'
      />
      <section className=' items-center hidden 2xl:flex gap-16'>
        {links.map((link) => (
          <a
            href={link.href}
            key={link.label}
            className='text-sm font-semibold text-gray-600 hover:text-gray-900'>
            {link.label}
          </a>
        ))}
      </section>
      <section className='flex items-center  gap-4'>
        <div className='hidden 2xl:flex'>
          <Button
            className='text-[0.70rem] text-white uppercase bg-gradient-to-r from-[#c701fc] to-[#750dea] hover:from-[#b001e0] hover:to-[#650dd0]'
            radius='full'>
            Download Now
          </Button>
        </div>
        <div className='flex items-center gap-1'>
          <Image
            width={18}
            height={18}
            src='https://www.moola.com/assets/media/icons/flags/ca.svg'
            alt='Canada Flag'
            loading='lazy'
          />
          <span className='text-xs font-semibold'>CAD</span>
        </div>
        <div className='flex 2xl:hidden'>
          <Menu>
            <Menu.Dropdown>
              <Menu.List>
                {links.map((link) => (
                  <Menu.Item key={link.label} href={link.href}>
                    {link.label}
                  </Menu.Item>
                ))}
              </Menu.List>
            </Menu.Dropdown>
          </Menu>
        </div>
      </section>
    </header>
  );
}

export default Header;
