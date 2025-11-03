import React from 'react'
import Home from './Home'
import { Menu } from './Menu'
import India from './India'
import Ourpromise from './Ourpromise'
import Magigal from './Magigal'
import Recently from './Recently'


export const Header = () => {
    return (
        <div>
            <div className='flex gap-10 px-10 border py-8 bg-red-700 text-white justify-between  sticky'>
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
               <a href="/Cake" >Cakes</a>
                <a href='./themecake'>Theme Cakes</a>
                <a>By Relationship</a>
                <a>Desserts</a>
                <a>Birthday</a>
                <a>Anniversary</a>
                <a>Occasions</a>
                <a>Customized Cakes</a>
            </div>
            <Home />
            <Menu />
            <India />
            <Ourpromise />
            <Magigal />
            <Recently />
            


        </div>
        
    )
}
