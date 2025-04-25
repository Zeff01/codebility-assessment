import React from 'react'
import SectionTitle from '../Commons/SectionTitle'
import ProductContainer from './ProductContainer'

const FeaturedProducts = () => {
    return (
        <div className="w-full h-[28rem] flex flex-col justify-center items-center">
            <SectionTitle title="Featured Products"/>
            <ProductContainer/>
        </div>
    )
}

export default FeaturedProducts