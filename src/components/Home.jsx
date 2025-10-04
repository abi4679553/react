import screenhost from '../assests/desserts-rose-petals-black-background.jpg'
import img1 from '../assests/1.webp'
import img2 from '../assests/2.webp'
import img3 from '../assests/3.webp'
import img4 from '../assests/4.webp'
import img5 from '../assests/5.webp'

function Home() {
    return (
        <div>
            <div className='flex gap-10 px-10 border py-8 bg-red-700 text-white justify-between  sticky'>
                <div>
                    <p className='text-4xl'>Abi </p>
                </div>
                <div>
                    <input type='text' placeholder='enter search..' className='w-96 p-2 rounded-3xl' />
                </div>
                <div className='flex gap-20 px-30  '>
                    <p>Track Order</p>
                    <p>Cart</p>
                    <p>Login/Signup</p>
                </div>
            </div>
            <div className='flex gap-30  justify-evenly border py-5 bg-white'>
                <p>Cakes</p>
                <p>Theme Cakes</p>
                <p>By Relationship</p>
                <p>Desserts</p>
                <p>Birthday</p>
                <p>Anniversary</p>
                <p>Occasions</p>
                <p>Customized Cakes</p>
            </div>
            <div>
                <img src={screenhost} alt="Screenshot" />
            </div>

            <div className='bg-pink-50 py-20 text-5xl '>
                <div className=' text-center'>
                    <p className='text-red-700 '>Menu</p>
                    <p>What will you wish for?</p>
                </div>
                
                <div className='flex gap-5 min-w-full  h-60 justify-evenly px-10  py-20'>
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

            <div>
                <p>India Loves</p>
            </div>



        </div>
    )

}
export default Home