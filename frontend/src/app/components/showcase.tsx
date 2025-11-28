import React from 'react'
import PrimaryButton from './Primarybutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faLock, faStar } from '@fortawesome/free-solid-svg-icons'

const Showcase = () => {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-4'>
        {/* Cards */}
        <div className='flex flex-col md:flex-row gap-4 md:py-16'>
            <div className="relative w-full h-[180px] md:h-[250px] overflow-hidden rounded-lg bg-gradient-to-r from-green-900 to-green-700 hover:shadow-xl transition-all duration-300">
                <div className='absolute top-8 flex justify-end w-full opacity-60'>
                    <img
                        src="../media/card1.svg"
                        alt="Shop hero"
                        className="w-1/2 h-full z-0"
                    />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center gap-4 px-6">
                    <p className='text-xl font-bold text-white'>Your shopping, guaranteed.</p>
                    <p className='text-sm w-3/4 md:w-1/2 text-white'>Shop with confidence backed by secure checkout and trusted protection.</p>
                    <PrimaryButton className='rounded-full w-fit font-["Outfit"] font-light shadow-md'>FAQs</PrimaryButton>
                </div>
            </div>
            <div className="relative w-full h-[180px] md:h-[250px] overflow-hidden rounded-lg bg-gradient-to-r from-green-900 to-green-700 hover:shadow-xl transition-all duration-300">
                <div className='absolute top-8 flex justify-end w-full pr-8 opacity-60'>
                    <img
                        src="../media/card2.svg"
                        alt="Shop hero"
                        className="w-2/5 h-full z-0"
                    />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center gap-4 px-6">
                    <p className='text-xl font-bold text-white'>Shop on the go.</p>
                    <p className='text-sm w-3/4 md:w-1/2 text-white'>Download our app for faster checkout and a smoother shopping experience.</p>
                    <PrimaryButton className='rounded-full w-fit font-["Outfit"] font-light shadow-md'>Download App</PrimaryButton>
                </div>
            </div>
        </div>
        {/* LEFT TEXT */}
        <div className='flex flex-col justify-center items-center py-8'>
            <p className="text-5xl font-['Outfit'] font-bold leading-14 mb-6">
                A Better Way to Shop Online
            </p>

            <p className="text-gray-600 mb-6 max-w-2xl text-left sm:text-center">
                Discover a platform designed to make shopping simpler, faster, 
                and more secure. From flexible options to a seamless experience 
                across devices—we’re here to help you shop with confidence.
            </p>

            {/* FEATURE LIST */}
            <div className="flex flex-col md:flex-row gap-6 py-8">
                <div className="flex flex-col items-start gap-3 bg-theme-color/10 p-4 rounded-md mb-4 hover:scale-[1.05] hover:shadow-lg transition-all duration-300">
                    <FontAwesomeIcon icon={faLock} className="text-green-700 text-4xl my-4"/>
                    <div className='space-y-2'>
                        <p className="text-black font-bold">Secure & Trusted</p>
                        <p className="text-neutral-600 text-sm font-light">Your safety is our priority. Shop with confidence knowing your data is protected.</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3 bg-theme-color/10 p-4 rounded-md mb-4 hover:scale-[1.05] hover:shadow-lg transition-all duration-300">
                    <FontAwesomeIcon icon={faBolt} className="text-blue-500 text-4xl my-4"/>
                    <div className='space-y-2'>
                        <p className="text-black font-bold">Fast & Flexible Options</p>
                        <p className="text-neutral-600 text-sm font-light">Enjoy quick checkout and multiple payment methods tailored to your needs.</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3 bg-theme-color/10 p-4 rounded-md mb-4 hover:scale-[1.05] hover:shadow-lg transition-all duration-300">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-4xl my-4"/>
                    <div className='space-y-2'>
                        <p className="text-black font-bold">Smart Recommendations</p>
                        <p className="text-neutral-600 text-sm font-light">Get personalized suggestions that make your shopping easier and more enjoyable.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase