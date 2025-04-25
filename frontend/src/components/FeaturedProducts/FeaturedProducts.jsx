import React from 'react'
import SectionTitle from '../Commons/SectionTitle'
import ProductContainer from './ProductContainer'

const FeaturedProducts = () => {
    return (
        <div className="w-full h-[32rem] flex flex-col justify-center items-center border border-red-500">
            <SectionTitle title="Featured Products"/>
            <ProductContainer/>
        </div>
    )
}

export default FeaturedProducts