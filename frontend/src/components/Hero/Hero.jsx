import React from 'react'
import ProductCarousel from './ProductCarousel'
import Promotions from './Promotions'
import HeroText from './HeroText'

const Hero = () => {
    return (
        <div className="border border-lime-400 px-4 w-full flex flex-col justify-center items-center">
            <div className="w-full h-[36rem] flex justify-center items-center">
                <HeroText/>
                <ProductCarousel/>
            </div>
            <Promotions/>
        </div>
    )
}

export default Hero