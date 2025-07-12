import {
  FacebookIcon,
  InstagramIcon,
  LockIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";

/**
 * Footer component
 *
 * A responsive reusable footer component that can be used to create a footer.
 *
 * @returns Footer component
 *
 * @example
 * <Footer />
 */

function Footer() {
  return (
    <main className='flex flex-col'>
      <header className='bg-[#5713bd] p-6'>
        <section className='w-full 2xl:max-w-7xl mx-auto px-4 text-white flex items-center gap-8 justify-center flex-col md:flex-row md:justify-between'>
          <div className='flex items-center gap-4'>
            <p className='text-xs font-semibold'>Accepted Payment Methods</p>
            <div className='flex items-center gap-4'>
              <Image
                src='https://www.moola.com/assets/media/icons/visa.svg'
                alt='visa'
                width={30}
                height={30}
              />
              <Image
                src='https://www.moola.com/assets/media/icons/mastercard.svg'
                alt='mastercard'
                width={30}
                height={30}
              />
              <Image
                src='https://www.moola.com/assets/media/icons/discover.svg'
                alt='discover'
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <LockIcon className='w-4 h-4' />
            <p className='text-xs font-semibold'>Secure Payment</p>
            <Image
              src='https://www.moola.com/assets/media/icons/moneris.svg'
              alt='moneris'
              width={100}
              height={100}
              className='object-contain -mt-4'
            />
          </div>
        </section>
      </header>
      <div className='flex-1 p-8 bg-[#750dea] pt-16'>
        <div className='w-full 2xl:max-w-7xl mx-auto px-4 flex flex-col gap-12'>
          <section
            id='links'
            className='flex items-center justify-center flex-col md:flex-row md:gap-28 gap-12'>
            <Image
              src='https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_white.svg'
              alt='moola'
              width={100}
              height={100}
              className='object-contain'
            />
            <div className='flex items-center flex-col md:flex-row gap-12 md:gap-28 text-white text-sm font-semibold'>
              <a href='#' className='underline'>
                Privacy Policy
              </a>
              <a href='#' className='underline'>
                Terms of Service
              </a>
              <a href='#' className='underline'>
                Help Center
              </a>
              <a href='#' className='underline'>
                Contact Us
              </a>
            </div>
          </section>
          <section
            id='socials'
            className='flex items-center justify-center text-white gap-12 md:gap-4'>
            <InstagramIcon className='w-5 h-5' />
            <TwitterIcon className='w-5 h-5 fill-white' />
            <FacebookIcon className='w-5 h-5 fill-white' />
            <YoutubeIcon className='w-5 h-5 ' />
            <LinkedinIcon className='w-5 h-5 fill-white' />
          </section>
          <section className='text-xs flex items-center justify-center w-full'>
            <p className='max-w-2xl text-white font-semibold text-center'>
              Designated trademarks and brands are the property of their
              respective owners. Moola Inc. and its products are not affiliated
              or endorsed by such owners. Use of this (website/app) constitutes
              acceptance of Moola Inc. Privacy Policy and Terms of Use.
              Copyright © 2025 Moola Inc. All rights reserved.
            </p>
          </section>
        </div>
      </div>
      <footer className='bg-[#8942f4] flex items-center justify-center p-4'>
        <p className='text-xs text-white font-semibold'>
          Copyright © 2025 Moola Inc. All rights reserved.
        </p>
      </footer>
      <div
        id='download'
        className='w-full justify-center p-6 flex items-center gap-4 md:hidden'>
        <Image
          src='https://www.moola.com/assets/media/images/app-store.png'
          alt='app-store'
          width={300}
          height={300}
        />
        <Image
          src='https://www.moola.com/assets/media/images/play-store.png'
          alt='play-store'
          width={300}
          height={300}
        />
      </div>
    </main>
  );
}

export default Footer;
