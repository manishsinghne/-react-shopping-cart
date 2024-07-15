import React, { useState } from 'react'
import { data } from './data'
import Product from './Product'
import Basket from './Basket'
 import Header from './Header'
function Home() {
  const [cart, setcart] = useState([])
  const [hide, sethide] = useState(false)
  // console.log(cart)
  const addtocart = (data) => {
    // console.log(data)
    setcart([...cart, { ...data, qun: 1 }])
  }
const showcart=()=>{
  sethide(true)
}
const showproduct=()=>{
  sethide(false)
}
  return (
    <div>
      <Header carts={cart.length}  showcart={showcart}showproduct={showproduct}/>
      { hide ?
      <Basket cartdata={cart} setcart={setcart} />:
      <div className='flex flex-col  flex-wrap  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3'>
        {data.map((item, ind) => {
          return <Product key={ind} item={item} addtocart={addtocart} />
        })}
      </div>
}
    </div>
  )
}

export default Home
