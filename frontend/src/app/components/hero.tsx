import React from 'react'
import PrimaryButton from './Primarybutton'

const Hero = () => {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-4'>
        {/* Hero */}
        <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden rounded-lg">
            <div className='absolute top-8 flex justify-end w-full'>
                <img
                    src="../media/option2.svg"
                    alt="Shop hero"
                    className="w-3/5 md:w-1/2 h-full z-0"
                />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center gap-4 py-16">
                <p className='font-["Outfit"] font-bold text-4xl sm:text-[min(8vw,7.5rem)] leading-[min(8vw,7rem)] uppercase cursor-default'>
                    Shop <br/> without <br/> <span className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-900 to-green-700 hover:from-green-950 hover:to-green-800 transition-colors duration-500'>Limits!</span>
                </p>
                <p className='text-md md:text-lg w-3/4 md:w-1/2 text-neutral-600'>Discover a new way to shop—simple, flexible, and built around your needs.</p>
                <PrimaryButton className='rounded-full w-fit font-["Outfit"] font-light'>Shop Now!</PrimaryButton>
            </div>
        </div>

        {/* Counters */}
        <div className='flex flex-col sm:flex-row gap-4 justify-between py-8'>
            <div className='flex gap-8 [&>div>h4]:font-["Outfit"] [&>div>h4]:font-bold [&>div>p]:text-md [&>div>p]:font-["Roboto"] [&>div>p]:font-light [&>div>p]:leading-4'>
                <div>
                    <h4>10K+</h4>
                    <p>Orders Delivered</p>
                </div>
                <div>
                    <h4>5K+</h4>
                    <p>Products Available</p>
                </div>
                <div>
                    <h4>200+</h4>
                    <p>Partner Stores</p>
                </div>
            </div>
            <div>
                <p className='font-["Roboto"] font-light'>Follow Us</p>
                <div className='space-x-2'>
                    <button className='bg-green-900 text-white text-xs px-4 py-1 rounded-full cursor-pointer'>
                        Facebook
                    </button>
                    <button className='bg-green-900 text-white text-xs px-4 py-1 rounded-full cursor-pointer'>
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero