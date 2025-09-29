import Home from '../assests/Screenshot 2025-09-29 212123.png'
function Home (){
    return (
        <div>
        <div className='flex gap-10 px-10 border py-8 bg-red-700 text-white'>
            <div>
                <p>Abi </p>
            </div>
            <div>
            <input type='text' placeholder='enter search..'/>
            </div>
            <div className='flex gap-5 px-30 justify-between '>
                <p>Track Order</p>
                <p>Cart</p>
                <p>Login/Signup</p>
            </div>
            </div>
            <div className='flex gap-10  justify-evenly border py-5 bg-white'>
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
                    <img src={Home} alt='home' />
                </div>
                <div>
                    <p>Menu</p>
                    <p>What will you wish for?</p>
                </div>


        </div>
    )

}
export default Home