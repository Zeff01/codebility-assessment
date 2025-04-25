import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div className="w-full px-4 flex flex-col items-center justify-center gap-4 py-4 sticky top-0 bg-white z-50">
            <NavBar/>
            <div className="w-full">
                <SearchBar/>
            </div>
        </div>
    )
}

export default Header