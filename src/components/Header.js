import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='flex gap-10 px-10 border py-8 bg-red-700 text-white justify-between sticky'>
        <div>
          <p className='text-4xl'>Abi</p>
        </div>
        <div>
          <input type='text' placeholder='enter search..' className='w-96 p-2 rounded-3xl' />
        </div>
        <div className='flex gap-20 px-30'>
          <p>Track Order</p>
          <p>Cart</p>
          <p>Login/Signup</p>
        </div>
      </div>

      <div className='flex gap-30 justify-evenly border py-5 bg-white'>
        {/* ✅ Either use navigate OR Link */}
        {/* <a onClick={() => navigate('/cake')}>Cakes</a> */}
        <Link to="/cake" className="cursor-pointer">Cakes</Link>
        <Link to="/themecake">Theme Cakes</Link>
        <Link to="#">By Relationship</Link>
        <Link to="#">Desserts</Link>
        <Link to="#">Birthday</Link>
        <Link to="#">Anniversary</Link>
        <Link to="#">Occasions</Link>
        <Link to="#">Customized Cakes</Link>
      </div>
    </div>
  )
}

export default Header;
