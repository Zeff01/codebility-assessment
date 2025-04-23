import Image from "next/image";
import Visa from "../../public/visa.svg";
import MasterCard from "../../public/mastercard.svg";
import Discover from "../../public/discover.svg";
import {
  Facebook,
  HeartHandshake,
  Instagram,
  Linkedin,
  Lock,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <div className=''>
      <div className='bg-violet-800 max-w-full p-4 lg:px-20 text-white flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between lg:items-center'>
        <div className='flex gap-5 items-center '>
          <p className='text-sm font-semibold'>Accepted Payment Methods</p>
          <div className='flex gap-2'>
            <Image src={Visa} alt='Visa' width={30} height={30} />
            <Image src={MasterCard} alt='MasterCard' width={30} height={30} />
            <Image src={Discover} alt='Discover' width={30} height={30} />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Lock className='w-4 h-4' />
          <p className='text-sm font-semibold'>Payments Powered by</p>
        </div>
      </div>
      <div className='bg-violet-600 max-w-full p-4 lg:px-20 text-white '>
        <div className='w-full mt-5'>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[5rem] w-full text-center items-center'>
            <li>
              <div className='flex gap-1 items-center justify-center text-white'>
                <HeartHandshake className='w-10 h-10' />
                <h1 className='text-3xl font-semibold '>Codey</h1>
              </div>
            </li>
            <li className='underline font-semibold'>Privacy Policy</li>
            <li className='underline font-semibold'>Terms & Conditions</li>
            <li className='underline font-semibold'>Help Center</li>
            <li className='underline font-semibold'>Contact Us</li>
          </ul>
        </div>
        <div className='w-full mt-7 flex flex-col gap-3 justify-center items-center'>
          <div className='flex   items-center gap-5'>
            <Instagram />
            <Twitter />
            <Facebook />
            <Youtube />
            <Linkedin />
          </div>

          <p className='text-sm text-center lg:w-[50rem]'>
            Designated trademarks and brands are the property of their
            respective owners. Moola Inc. and its products are not affiliated or
            endorsed by such owners. Use of this (website/app) constitutes
            acceptance of Moola Inc. Privacy Policy and Terms of Use. Copyright
            © 2025 Moola Inc. All rights reserved.
          </p>
        </div>
      </div>
      <div className='bg-violet-500 p-4 text-white text-center text-sm font-semibold'>
        <span>Copyright &copy; 2025 Codey Inc. All rights reserved.</span>
      </div>
    </div>
  );
}
