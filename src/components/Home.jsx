import screenhost from '../assests/Screenshot 2025-09-29 212123.png'

function Home() {
    return (
        <div>
            <div className=' relative  left-[70%] text-white w-full '>
                <p className='text-5xl'>Perfect Gift </p>
                <p className='text-3xl p-2'>For Festive Wishws</p>
            </div>
            <div>
                <img src={screenhost} alt="Screenshot"  />
            </div>

        </div>
    )

}
export default Home