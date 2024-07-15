import React from 'react';

function Product({ item, addtocart }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img src={item.img} alt={item.name} className="w-32 h-32 object-cover mb-4 rounded" />
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p className="text-lg text-gray-700 mb-2">${item.price}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={() => addtocart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
