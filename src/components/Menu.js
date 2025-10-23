import React from 'react'
import img1 from '../assests/1.webp'
import img2 from '../assests/2.webp'
import img3 from '../assests/3.webp'
import img4 from '../assests/4.webp'
import img5 from '../assests/5.webp'


export const Menu = () => {
  return (
    <div>
    
                <div className=' text-center bg-pink-200 text-4xl p-16'>
                    <p className='text-red-700 '>Menu</p>
                    <p>What will you wish for?</p>
                </div>
                
                <div className='flex gap-4 bg-pink-100 p-5'>
                    <div>
                        <img src={img1} alt="img1" className='text-center' />
                        <p className='text-center text-2xl'>CLASSIC</p>
                    </div>
                    <div>
                        <img src={img2} alt="img2" />
                        <p className='text-center text-2xl'>GOURMET</p>
                    </div>
                    <div>
                        <img src={img3} alt="img3" />
                        <p className='text-center text-2xl'>DESIGNER</p>
                    </div>
                    <div>
                        <img src={img4} alt="img4" />
                        <p className='text-center text-2xl'>DESSERTS</p>
                    </div>
                    <div>

                        <img src={img5} alt="img5" />
                        <p className='text-center text-2xl'>COOKIES</p>
                    </div>
                </div>
            </div>
  )
}
