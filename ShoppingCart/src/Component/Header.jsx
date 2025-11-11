import React, { useEffect } from 'react'
import {Link,NavLink} from 'react-router-dom';
import { useState } from 'react';
import { useCart } from "../context/CartContext"

const Header = () => {
    const [theme,setTheme]=useState(false);
    const [isActive,setActive]=useState(false);
    const activeClass="text-blue-700  font-bold";
    const inactiveClass=" text-gray-700 dark:text-gray-400 font-bold";

   useEffect(()=>{
    if(theme===true){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }},[theme]);
    const {total,totalAmount}=useCart();
  return (
    <div className="shadow-xl mt-1.5 bg-gray-100 p-4 text-white text-center text-2xl font-bold h-25 dark:bg-gray-800 flex justify-around
     sticky top-0 z-10 flex-wrap gap-5">
        <nav  className="space-x-4 dark:text-white">
        <NavLink to='/' className={({isActive})=>isActive?activeClass:inactiveClass}>Home</NavLink>
        <NavLink to='/cart' className={({isActive})=>isActive?activeClass:inactiveClass}>Cart</NavLink>
        
        </nav>
        <button className='text-gray-500 dark:text-white hover:cursor-pointer mt-3.5' onClick={()=>setTheme(!theme)}> switch theme</button>
        <Link to="/cart" className='text-gray-600 dark:text-white '> cart: {total}/${totalAmount}</Link>
        
          
    </div>
  )
}

export default Header