import React, { useState } from 'react'
import CartSvg from '../Commons/CartSvg'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full h-16 bg-white flex items-center relative">
            <div className="flex items-center gap-2">
                <button 
                    className="lg:hidden p-2 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <h1 className="text-primaryTextColor text-2xl font-bold"><a href="/">Brew Bliss</a></h1>
            </div>

            <div className="flex-1 flex justify-center">
                <ul className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent gap-4 lg:gap-16 items-center justify-center py-4 lg:py-0 shadow-lg lg:shadow-none z-50`}>
                    <li className="font-semibold"><a href="#">Home</a></li>
                    <li className="font-semibold"><a href="#">Our Products</a></li>
                    <li className="font-semibold"><a href="#">Blog</a></li>
                    <li className="font-semibold"><a href="#">About</a></li>
                    <li className="font-semibold"><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="flex items-center">
                <button className="cursor-pointer w-10 h-10 p-2">
                    <CartSvg/>
                </button>
            </div>
        </div>
    )
}

export default NavBar