import React from "react";
import "./mycart.css";
import MycartCard from "./MycartCard";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { addToCart, removeFromCart } from "../../action/cartAction";
import emptyimg from "./emptycart.png";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
const Mycart = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const increaseq = (id, quantity, stock) => {
    let x = quantity + 1;
    if (x > stock) {
      alert.error("Stock Not Avilable");
      return;
    }
    dispatch(addToCart(id, x));
  };
  const decreaseq = (id, quantity) => {
    let x = quantity - 1;
    if (x <= 0) {
      return;
    }
    dispatch(addToCart(id, x));
  };
  const { cartItems } = useSelector((state) => state.cart);
  const deleteitemfromcart = (id) => {
    dispatch(removeFromCart(id));
  };
  const chckoutHandler = () => {
    navigate("/user/login?redirect=/shipping");
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div>
          <div className=" flex justify-center  text-center">
            <img src={emptyimg} alt="cartempty"></img>
          </div>
          <div className=" items-center text-center m-5">
            <Link
              to="/products"
              className="btn bg-sky-300 p-2 m-8 text-xl font-bold rounded"
            >
              Buy Now
            </Link>
          </div>
        </div>
      ) : (
        <>
          <MetaData title={`Kit Cart | My Cart`} />
          <div className="p-5 md:m-5 grid grid-cols-3 bg-sky-100">
            <div className="productlist text-xl font-bold">Products</div>
            <div className="productq text-center text-xl font-bold ">
              Quantity
            </div>
            <div className="productprice text-right text-xl font-bold">
              Price
            </div>
          </div>
          <div className="productcards p-5 md:m-5">
            {cartItems.map((product) => (
              <div className="grid grid-cols-3 p-2" key={product.product}>
                <MycartCard product={product} removeitem={deleteitemfromcart} />
                <div className=" text-center my-auto">
                  <button
                    className=" btnqd text-xl"
                    onClick={() => decreaseq(product.product, product.quantity)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    readOnly
                    value={product.quantity}
                    className="inquantity text-xl"
                  />
                  <button
                    className="btnqe text-xl"
                    onClick={() =>
                      increaseq(
                        product.product,
                        product.quantity,
                        product.stock
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <div className="text-right my-auto text-xl">
                  ₹{product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="seprator bg-sky-300 h-1  m-5"></div>
          <div className="totalproductprice p-5 md:m-5 text-2xl font-bold bg-sky-100">
            Gross Total{" "}
            <span className=" float-right text-xl">{`₹${cartItems.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            )}`}</span>
          </div>
          <div className=" text-right">
            <button
              className=" btn bg-sky-300 p-3 mx-5 my-2 font-bold"
              onClick={chckoutHandler}
            >
              Checkout Now
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Mycart;

// for calutating to total gross price we use reduce function which all for all array indexs
