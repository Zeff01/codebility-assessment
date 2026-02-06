import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-gray-300  bottom-0  text-xs'>

            <p className='text-center py-5'>© <span>{new Date().getFullYear()}</span> Ralph Reeven Carandang.  <br />All rights reserved.</p>
       
    </footer>
  )
}

export default Footer