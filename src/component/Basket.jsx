import React, { useEffect, useState } from 'react';
function Basket({ cartdata,setcart }) {
  const [totalPrice,settotalprice]=useState(0)

  useEffect(()=> {  const Price = cartdata.reduce((total, item) => total + item.price * item.qun, 0);
settotalprice(Price)
  },[cartdata])

const increase=(index)=>{
const incdata= cartdata.map((item,ind)=>{
  return  index===ind ? {...item, qun: item.qun+1} : item
})
setcart(incdata)
}
const decrease=(index)=>{
  const  decdata= cartdata.map((item,ind)=>{
    return index===ind && item.qun>1 ?{...item,qun:item.qun-1}: item
  })
  setcart(decdata)
}

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartdata.map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <img src={item.img} alt={item.name} className="w-32 h-32 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <div className="flex items-center space-x-4 mb-2">
              <button className="bg-blue-500 text-white rounded-full p-2" onClick={()=>increase(index)}>+</button>
              <span className="text-lg">{item.qun}</span>
              <button className="bg-blue-500 text-white rounded-full p-2" onClick={()=>decrease(index)}>-</button>

            </div>
            <h3 className="text-lg font-semibold text-gray-700">${item.price}</h3>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
        <h2 className="text-xl font-bold">Total Price:</h2>
        <h3 className="text-xl font-semibold text-gray-800">${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Basket;
