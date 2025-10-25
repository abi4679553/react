import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
            <p className='bg-pink-100 text-center border p-20 text-xl '>Bakingo - Your Trusted FSSAI Certified Online Bakery for Every Celebration</p>
        </div>
        <div className='flex gap-32 justify-evenly bg-pink-200 p-4 '>
            <p className='text-2xl text-red-600 '>Subscribe To Our Newsletter</p>
            <input type='text' placeholder=' enter email...' className='rounded-2xl w-64 h-9'/>
        </div>
        <div className='bg-pink-200 flex gap-20 text-red-600 justify-evenly p-10'>
        <div>
            <p className='text-2xl'>⭐ABI </p>
            <p>© 2025</p>
            <p></p>
        </div>
        <div>
            <p className='text-2xl'>Know Us</p>
            <p>Our Story</p>
            <p>Contact Us</p>
            <p>Locate Us</p>
            <p>Blog</p>
            <p>Media</p>
            <p>Careers</p>
        </div>
        <div>
            <p className='text-2xl'>Need Help</p>
            <p>FAQ</p>
            <p>Cancellation and Refund</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Sitemap</p>
        </div>
        <div>
            <p className='text-xl'>More Info</p>
            <p>Corporate Cakes</p>
            <p>Coupons & Offers</p>
            <p>Download App</p>
        </div>
      
    </div>
    <div className='bg-pink-200 text-center p-4 '>
      <p>....🔷....</p>
    </div>
    </div>
  )
}

export default Footer