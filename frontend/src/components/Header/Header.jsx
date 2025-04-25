import React from 'react'
import NavBar from './NavBar'
import SearchBar from './SearchBar'

const Header = () => {
    return (
        <div className="w-full px-4 flex flex-col items-center justify-center">
            <NavBar/>
            <SearchBar/>
        </div>
    )
}

export default Header