import {Routes, Route} from 'react-router-dom';
import Home from "./../Pages/Home.jsx";
import Cart from './../Pages/Cart.jsx';

import React from 'react'

const AllRoutes = () => {
  return (
      <div className="dark:bg-slate-800">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>


    </div>

  )
}

export default AllRoutes