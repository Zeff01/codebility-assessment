import React from 'react'

const PromotionCard = ({ backgroundImages }) => {
    return (
        <a className="md:w-full lg:w-1/3 2xl:h-56 xl:h-40 lg:h-36  overflow-hidden rounded-xl" href="/">
            <div className="w-full h-full">
                <img className="w-full h-full object-cover object-center" src={backgroundImages} alt="promotion goes here" />
            </div>
        </a>
    )
}

export default PromotionCard