import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import SpringImg from '../../assets/images/spring.png'
import SlideImg from '../../assets/images/slide4.png'

const Hero = () => {
    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        arrows: false,
        pagination: true,
        perPage: 1,
    };

    return (
        <Splide options={options} aria-label="Hero Splide">
            <SplideSlide>
                <div className="card rounded-4 springimg"
                    style={{
                        backgroundImage: `url(${SpringImg})`,
                    }} >
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="card p-3 p-lg-5 rounded-4"
                    style={{
                        backgroundImage: `url(${SlideImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                    }} >
                    <div className="card-body p-3 p-lg-5">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <h3 class="text-primary mb-3">GIFTING MADE EASIER</h3>
                                <h1 class="slider-title text-primary mb-3 mb-lg-4">Buy A Gift Card, <br /> <span>Get Cash Back Rewards</span></h1>
                                <button className="custom-btn">Shop Weekly Deals</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide >
    );
}

export default Hero
