import React from 'react'
import { useCart } from '../context/CartContext';
const CartCard = ({n,img,product,des}) => {

    const itemtoRemove={n,product,des,img};
    const {removeFromCart}=useCart();
  return (
   <>
   


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={img}  alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700  dark:text-white">{des}</p>
        <button onClick={()=>removeFromCart(itemtoRemove)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-red-700 dark:focus:ring-blue-800">
            Remove
            
        </button>
    </div>
</div>

   </>
  )
}

export default CartCard;