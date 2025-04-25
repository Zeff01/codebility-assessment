import React from 'react'
import PromotionCard from './PromotionCard'

const images = [
    'https://img.pikbest.com/backgrounds/20210623/coffee-shop-promotion-banner_6026970.jpg!sw800',
    'https://png.pngtree.com/png-clipart/20210620/original/pngtree-coffee-promotion-banner-png-image_6440528.jpg',
    'https://img.pikbest.com/backgrounds/20210618/brown-coffee-shop-promotion-banner_6021538.jpg!w700wp',
];

const Promotions = () => {
    return (
        <div className="w-full h-auto flex flex-col md:flex-col lg:flex-row justify-center items-center gap-4 py-8 overflow-hidden">
            <PromotionCard backgroundImages={images[0]} />
            <PromotionCard backgroundImages={images[1]} />
            <PromotionCard backgroundImages={images[2]} />
        </div>
    );
};


export default Promotions