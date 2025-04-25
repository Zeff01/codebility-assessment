import React from 'react'
import SectionTitle from '../Commons/SectionTitle'

const AboutUs = () => {
    return (
        <div className="w-full min-h-[24rem] flex flex-col justify-start items-center gap-8 px-4 py-12">
            <SectionTitle title="About Us" />
            <p className="text-center w-full md:w-4/5 lg:w-3/5 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-primaryTextColor text-xl md:text-2xl font-bold"><a href="/">Brew Bliss</a></h1>
        </div>
    )
}

export default AboutUs