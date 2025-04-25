import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'

const LandingPage = () => {
    return (
        <div className="w-7xl min-h-screen border border-red-500 mx-auto">
            <Header/>
            <Hero/>
            <FeaturedProducts/>
        </div>
    )
}

export default LandingPage