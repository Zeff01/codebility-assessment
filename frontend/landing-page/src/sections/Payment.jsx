import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Payment = () => {
  return (
    <>
    <div className="py-12 px-4 md:px-0 bg-white space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-purple-700">We accept payments in various methods</h1>
        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">Choose from a variety of secure payment methods to complete your purchase with ease and confidence.</p>
        <div className='flex justify-center items-center space-x-24'>
            <Icon icon="logos:visa" className='w-16 h-16 md:w-20 md:h-20 text-gray-700'/>
            <Icon icon="logos:mastercard" className='w-16 h-16 md:w-20 md:h-20 text-gray-700'/>
            <Icon icon="logos:discover" className='w-16 h-16 md:w-20 md:h-20 text-gray-700'/>
        </div>
        <div className='flex justify-center items-end space-x-2'>
            <p className='text-gray-600 text-sm md:text-base'>Payments powered by</p>
            <img src="/moneris.png" className='w-24 h-8 md:w-28 md:h-8 object-contain'/>
        </div>
    </div>
    </>
  )
}

export default Payment