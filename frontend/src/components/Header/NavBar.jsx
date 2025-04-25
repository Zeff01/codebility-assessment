import React from 'react'
import CartSvg from '../Commons/CartSvg'

const NavBar = () => {
    return (
        <div className="w-full h-16 bg-white flex justify-between items-center">
            <h1 className="text-primaryTextColor text-2xl font-bold"><a href="/">Brew Bliss</a></h1>
            <ul className="flex gap-16 items-center justify-center">
                <li className="font-semibold"><a href="#">Home</a></li>
                <li className="font-semibold"><a href="#">Our Products</a></li>
                <li className="font-semibold"><a href="#">Blog</a></li>
                <li className="font-semibold"><a href="#">About</a></li>
                <li className="font-semibold"><a href="#">Contact</a></li>
            </ul>
            <button className="cursor-pointer w-10 h-10 p-2">
                <CartSvg/>
            </button>
        </div>
    )
}

export default NavBar