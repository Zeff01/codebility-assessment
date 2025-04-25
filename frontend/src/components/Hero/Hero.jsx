import React from 'react'
import ProductCarousel from './ProductCarousel'
import Promotions from './Promotions'
import HeroText from './HeroText'

const Hero = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center px-4 py-8">
            <div className="w-full min-h-[36rem] max-h-screen flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-4">
                <HeroText/>
                <ProductCarousel/>
            </div>
            <Promotions/>
        </div>
    )
}

export default Hero