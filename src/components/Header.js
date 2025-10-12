import React from 'react'

export const Header = () => {
  return (
    <div>     <div className='flex gap-10 px-10 border py-8 bg-red-700 text-white justify-between  sticky'>
                <div>
                    <p className='text-4xl'>Abi </p>
                </div>
                <div>
                    <input type='text' placeholder=' enter search..' className='w-96 p-2 rounded-3xl' />
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
</div>
  )
}
