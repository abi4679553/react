import React from 'react'
import img1 from "../assests/image.png"
import img2 from "../assests/i2.webp"
import img3 from "../assests/i3.webp"
import img4 from "../assests/i4.webp"
import img5 from "../assests/i5.webp"

const India = () => {
  return (
    <div>
        <div className='p-30 text-center border bg-white py-10'>
            <p className='text-red-600 text-4xl '>⭐ India Loves</p>
            <p className='text-2xl'>Bestsellers from across the country</p>
        </div>
        <div className='flex gap-4  bg-white'>
            <div>
                <img src={img2} alt="img2" className='text-center  w-72 h-64' />
                <p className='text-center text-2xl'>Almond Cake</p>
                <p className='text-center'> 4.9 ★(2.0K Reviews)</p>
            </div>
            <div>
                <img src={img1} alt="img1" className='text-center w-72 h-64' />
                <p className='text-center text-2xl'>Rich Chocolate Cake</p>
                <p className='text-center'>4.9 ★(7.2K Reviews)</p>
            </div>

       <div>
            <img src={img3} alt="img3" className='text-center  w-72 h-64' />
            <p className='text-center text-2xl'>Pineapple Cake</p>
            <p className='text-center'> 4.9 ★(1.5K Reviews)</p>
        </div>

        <div>
            <img src={img4} alt="img4" className='text-center  w-72 h-64' />
            <p className='text-center text-2xl'>Butterscotch Cake</p>
            <p className='text-center'> 4.9 ★(2.5K Reviews)</p>
        </div>

        <div>
            <img src={img5} alt="img5" className='text-center  w-72 h-64' />
            <p className='text-center text-2xl'> ChocoTruffle Cake ..</p>
            <p className='text-center'> 4.9 ★(503K Reviews)</p>
        </div>


        </div>









    </div>
  )
}

export default India