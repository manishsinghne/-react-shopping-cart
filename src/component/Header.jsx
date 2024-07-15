import React from 'react';
import { TiShoppingCart } from "react-icons/ti";

function Header({ carts, showcart, showproduct }) {
  return (
    <header className="bg-blue-500 shadow-md p-4 flex justify-between items-center">
      <div onClick={showproduct} className="text-2xl font-bold cursor-pointer">
        Shopping Cart
      </div>
      <div onClick={showcart} className="relative cursor-pointer text-xl">
         <TiShoppingCart  className="text-5xl" />

        <sup className="bg-red-500 text-white rounded-full px-3 py-3 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
          {carts}
        </sup>
      </div>
    </header>
  );
}

export default Header;
