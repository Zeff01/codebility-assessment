import React from 'react'

const PromotionCard = ({ backgroundImages }) => {
    return (
        <a className="w-1/3 h-56 border border-purple-600 overflow-hidden rounded-xl" href="/">
            <div className="w-full h-full">
                <img className="w-full h-full object-cover object-center" src={backgroundImages} alt="promotion goes here" />
            </div>
        </a>
    )
}

export default PromotionCard