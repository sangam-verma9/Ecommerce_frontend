import React from "react";
import { Link } from "react-router-dom";

const MycartCard = ({ product, removeitem }) => {
  return (
    <>
      <div className=" flex">
        <Link to={`/product/${product.product}`}>
          <img src={product.image} alt="img" className=" w-20 h-24" />
        </Link>

        <div className="flex flex-col">
          <p className=" p-1 capitalize">{product.name}</p>
          <p className=" p-1">₹ {product.price}</p>
          <p className=" p-1 text-red-400 cursor-pointer" onClick={()=>removeitem(product.product)}>Remove</p>
        </div>
      </div>
    </>
  );
};

// note-- here we use product as product is see reducer of cart
export default MycartCard;
