import React from 'react'
import Card from '../Component/Card'
import TitleHook from '../Hook/TitleHook'

const Home = () => {
  TitleHook("Home")
  const items=[
        {id:1,"name":"headphone","price":"43","img":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"},
        {id:2,"name":"Bag","price":"34","img":"https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFnfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"},
        {id:3,"name":"Mobile","price":"55","img":"https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"},
        {id:4,"name":"Shoe","price":"100","img":"https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"},
        {id:5,"name":"Mouse","price":"6","img":"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"}
    ]
  return (
    <div className='m-10 shadow-2xs flex gap-5 flex-wrap justify-center items-center flex-row p-5'>
       {
        items.map((p)=>(<Card key={p.id} product={p.name} img={p.img} des={p.price} n={p.id}/>))
       }
    </div>
  )
}

export default Home