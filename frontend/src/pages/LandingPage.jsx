import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'

const LandingPage = () => {
    return (
        <>
        <div className="w-7xl min-h-screen border border-red-500 mx-auto">
            <Header/>
            <Hero/>
            <FeaturedProducts/>
            <AboutUs/>
        </div>
        <Footer/>
        </>
    )
}

export default LandingPage