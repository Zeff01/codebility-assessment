import React from 'react'
import SearchSvg from '../Commons/SearchSvg'

const SearchBar = () => {
    return (
        <form className="w-full h-12 flex border border-tertiaryColor rounded-full items-center justify-center overflow-hidden">
            <input className="w-full h-full px-6 outline-none" type="text" placeholder="Seach in our Products" />
            <button className="bg-accentColor w-24 h-full flex items-center justify-center p-3 cursor-pointer" type="submit">
                <SearchSvg/>
            </button>
        </form>
    )
}

export default SearchBar