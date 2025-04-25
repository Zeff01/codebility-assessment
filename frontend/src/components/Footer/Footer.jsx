import React from 'react'
import Twitter from '../../assets/svgs/twitter'
import IG from '../../assets/svgs/ig'
import Youtube from '../../assets/svgs/youtube'
import Facebook from '../../assets/svgs/facebook'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="relative w-full min-h-[24rem] bg-primaryTextColor flex flex-col justify-center items-center gap-8 px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center w-full">
                <h1 className="text-secondaryTextColor text-2xl font-bold"><a href="/">Brew Bliss</a></h1>
                <ul className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center justify-center text-center">
                    <li className="text-secondaryTextColor underline font-light"><a href="/">Privacy Policy</a></li>
                    <li className="text-secondaryTextColor underline font-light"><a href="/">Terms & Condition</a></li>
                    <li className="text-secondaryTextColor underline font-light"><a href="/">Help Center</a></li>
                    <li className="text-secondaryTextColor underline font-light"><a href="/">Contact Us</a></li>
                </ul>
            </div>

            <div className="flex flex-wrap gap-8 lg:gap-16 items-center justify-center">
                <a href="/" className="hover:opacity-80 transition-opacity">
                    <Twitter className="w-6 h-6"/>
                </a>
                <a href="/" className="hover:opacity-80 transition-opacity">
                    <IG className="w-6 h-6"/>
                </a>
                <a href="/" className="hover:opacity-80 transition-opacity">
                    <Youtube className="w-6 h-6"/>
                </a>
                <a href="/" className="hover:opacity-80 transition-opacity">
                    <Facebook className="w-6 h-6"/>
                </a>
            </div>

            <p className="text-center w-full lg:w-2/5 text-secondaryTextColor text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, consequatur dolorum similique laboriosam rerum quisquam cum officia unde ex, illo nobis porro. Molestias, soluta cumque neque iste autem maxime animi?
            </p>

            <p className="absolute bottom-0 w-full py-4 text-secondaryTextColor text-center text-xs border-t border-gray-700">
                Copyright &copy; {currentYear} Brew Bliss Inc. All rights reserved.
            </p>
        </div>
    )
}

export default Footer