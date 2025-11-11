import React from 'react'
import { useCart } from '../context/CartContext';

const Card = ({n,img,product,des}) => {
    const {addToCart,cartItems,removeFromCart}=useCart();
    const toGiveproduct={n,img,product,des};

    
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
        {cartItems.find((currentItem) => currentItem.n === n) ? (
  <button
    onClick={() => removeFromCart(toGiveproduct)}
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-red-700 dark:focus:ring-blue-800"
  >
    Remove
  </button>
) : (
  <button
    onClick={() => addToCart(toGiveproduct)}
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Add
  </button>
)}

    </div>
</div>

   </>
  )
}

export default Card