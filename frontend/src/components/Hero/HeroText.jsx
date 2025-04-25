import React from 'react'

const HeroText = () => {
    return (
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-4 py-8 lg:py-0">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Elevate Your Mornings <br className="hidden lg:block" /> 
                    with Brew Bliss Coffee
                </h1>
                <h2 className="text-xl md:text-2xl mt-4 text-gray-700">
                    Artisanal blends crafted for the discerning palate.
                </h2>
            </div>
            <button className="bg-accentColor text-secondaryTextColor font-semibold px-6 py-3 rounded-md cursor-pointer hover:opacity-90 transition-opacity text-lg">
                Pour Me a Cup
            </button>
        </div>
    )
}

export default HeroText