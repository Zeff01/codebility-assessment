import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='border-b border-gray-300  py-5'>
        <div className='padding-x max-container flex justify-between text-sm'>
            <div>
                <Link href={'/'} className='font-bold'>Codebility</Link>
            </div>

            <div>
                <ul className='flex gap-4 text-zinc-700 '>
                    <Link href={'/'} className='hover:text-black'>Browse</Link>
                    <Link href={'/about'} className='hover:text-black'>About</Link>
                </ul>
            </div>
        </div>

    </nav>
  )
}

export default Navbar