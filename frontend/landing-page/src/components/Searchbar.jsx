import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Searchbar = () => {
  return (
    <>
        <div className="w-full bg-purple-700 px-8 py-4 flex items-center justify-center h-20 relative">
            <input
                type="text"
                placeholder="Search..."
                className="w-full h-full outline-none text-gray-600 placeholder-gray-600 p-6 bg-white rounded-full"
            />
            <button className="absolute right-10 px-6 py-2  ">
                <Icon icon="material-symbols:search-rounded" className="w-7 h-7 text-purple-900" />
            </button>
        </div>
    </>
  )
}

export default Searchbar