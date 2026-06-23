import React from 'react'
import BookButton from '../components/BookButton'

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/75 backdrop-blur-[20px]">
        <div className='mx-auto max-w-7xl flex items-center justify-between px-8 py-4.5 gap-2 sm:gap-0'>
            {/* Logo */}
            <a href='#home' className="cursor-pointer font-bold tracking-tight text-white shrink-0 text-[1rem] sm:text-4xl">
                moo<span className="text-primary">la</span>
            </a>
            {/* Sections */}
            <div className='hidden gap-9 text-sm font-medium md:flex'>
                <a className='cursor-pointer text-white/75'>How it works</a>
                <a href="#features" className='cursor-pointer text-white/75'>Features</a>
                <a className='cursor-pointer text-white/75'>Results</a>
            </div>
            {/* Main Navs */}
            <div className='flex items-center gap-2 sm:gap-6 text-sm'>
                <a className='cursor-pointer'>Marketplace</a>
                <a className='cursor-pointer'>Login</a>
                <BookButton label='Book a demo'/>
            </div>
        </div>
    </nav>
  )
}

export default Navigation