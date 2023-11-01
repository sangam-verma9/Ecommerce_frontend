import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const Product = ({ product }) => {
   const options = {
     readOnly: true,
     value: product.ratings,
     precision: 0.5,
   };
  return (
    <>
      <div className="card">
        <Link className=" text-decoration-none" to={`product/${product._id}`}>
          <div className="flex flex-col">
            <img src={product.image[0].url} alt={product.name} />
            <p className=" text-center text-3xl font-serif capitalize">
              {product.name}
            </p>
            <div className=" flex gap-4 justify-center flex-col md:flex-row items-center">
              <Rating {...options} />
              <span className="p-2">({product.numberOfReviews})</span>
            </div>
            <div className=" flex justify-center flex-col md:flex-row">
              <span className=" text-2xl py-2 px-4 text-center  text-red-600">
                {`-${product.discount}%`}
              </span>
              <span className=" text-2xl py-2 px-4 text-center font-bold">
                {`₹${product.price}`}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
