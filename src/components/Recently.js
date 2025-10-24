import React from 'react'
import img1 from "../assests/r1.webp"
import img2 from "../assests/r2.webp"
import img3 from "../assests/r3.webp"
import img4 from "../assests/r4.webp"

const Recently = () => {
    return (
        <div>
            <div className='flex gap-5'>
                <div>
                    <img src={img1} alt="img1" />
                    <p className='text-center text-2xl'>Chocolate Vanilla cake</p>
                </div>
                <div>
                    <img src={img2} alt="img2" />
                    <p className='text-center text-2xl'> Pineapple Cake</p>
                </div>
                <div>
                    <img src={img3} alt="img3" />
                    <p className='text-center text-2xl'>Tropical Fruit Almond Cake</p>
                </div>
                <div>
                    <img src={img4} alt="img4" />
                    <p className='text-center text-2xl'>Rich Chocolate Truffle Cake</p>
                </div>

            </div>
        </div>
    )
}

export default Recently