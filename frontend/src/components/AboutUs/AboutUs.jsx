import React from 'react'
import SectionTitle from '../Commons/SectionTitle'

const AboutUs = () => {
    return (
        <div className="w-full h-[28rem] flex flex-col justify-center items-center gap-8">
            <SectionTitle title="About Us" />
            <p className="text-center w-3/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-primaryTextColor text-2xl font-bold"><a href="/">Brew Bliss</a></h1>
        </div>
    )
}

export default AboutUs