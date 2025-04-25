import React from 'react'
import Twitter from '../../assets/svgs/twitter'
import IG from '../../assets/svgs/ig'
import Youtube from '../../assets/svgs/youtube'
import Facebook from '../../assets/svgs/facebook'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="relative w-full h-96 bg-primaryTextColor border border-red-500 flex flex-col justify-center items-center gap-8">
            <div className="flex gap-16 items-center justify-center">
                <h1 className="text-secondaryTextColor text-2xl font-bold"><a href="/">Brew Bliss</a></h1>
                <ul className="flex gap-16 items-center justify-center">
                    <li className="text-secondaryTextColor underline font-light"><a href="/">Privacy Policy</a></li>
                    <li className="text-secondaryTextColor underline font-light"><a href="/">Terms & Condition</a></li>
                    <li className="text-secondaryTextColor underline font-light"><a href="/">Help Center</a></li>
                    <li className="text-secondaryTextColor underline font-light"><a href="/">Contact Us</a></li>
                </ul>
            </div>
            <div className="flex gap-16 items-center justify-center">
                {/* socials */}
                <a href="/"><Twitter/></a>
                <a href="/"><IG/></a>
                <a href="/"><Youtube/></a>
                <a href="/"><Facebook/></a>
            </div>
            <p className="text-center w-2/5 text-secondaryTextColor">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, consequatur dolorum similique laboriosam rerum quisquam cum officia unde ex, illo nobis porro. Molestias, soluta cumque neque iste autem maxime animi?</p>
            <p className="absolute bottom-0 w-full py-4 text-secondaryTextColor text-center text-xs">Copyright &copy; {currentYear} Brew Bliss Inc. All rights reserved.</p>
        </div>
    )
}

export default Footer