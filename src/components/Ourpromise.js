import React from 'react'
import img1 from "../assests/o1.png"
import img2 from "../assests/o2.jpg"
import img3 from "../assests/o3.jpg"
import img4 from "../assests/o4.jpg"


const Ourpromise = () => {
  return (
    <div>
        <div className='border bg-pink-100 mt-5'>
        <p className='text-red-600 text-4xl text-center p-5'>Our Promise</p>
        <p className='text-2xl text-center'>There’s no secret spell—only honest, hard work!</p>
    </div>
    <div className='flex gap-4 justify-evenly p-5 bg-pink-100'>
        <div>
            <img src={img1} alt="img1" className='text-center w-60 h-52  ' />
            <p className='text-center text-2xl'>ON-TIME DELIVERY</p>
        </div>
        <div>
            <img src={img2} alt="img2" className='text-center w-60 h-52' />
            <p className='text-center text-2xl'>500+ DESIGNS</p>
        </div>
        <div>
            <img src={img3} alt="img3" className='text-center w-60 h-52' />
            <p className='text-center text-2xl'>2 CR+ ORDERS</p>
        </div>
        <div>
            <img src={img4} alt="img4" className='text-center w-60 h-52' />
            <p className='text-center text-2xl'>BAKED FRESH</p>
        </div>
     
     
     
  



    </div>
    </div>
  )
}

export default Ourpromise