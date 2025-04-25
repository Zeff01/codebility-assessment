import React from 'react'

const HeroText = () => {
    return (
        <div className="w-1/2 h-[36rem] border-blue-800 border flex flex-col justify-center items-start gap-4">
            <h1 className="text-5xl font-bold text-nowrap">
                Elevate Your Mornings <br /> 
                with Brew Bliss Coffee
            </h1>
            <h2 className="text-2xl text-nowrap">
                Artisanal blends crafted for the discerning palate.
            </h2>
            <button className="bg-accentColor text-secondaryTextColor font-semibold px-4 py-2 rounded-md cursor-pointer">
                Pour Me a Cup
            </button>
        </div>
    )
}

export default HeroText