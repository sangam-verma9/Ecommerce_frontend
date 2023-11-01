import React from "react";
import { useSelector} from "react-redux";
import MetaData from "../layout/MetaData";
import CheckoutStep from "./CheckoutStep";
import { useNavigate } from "react-router-dom";
const Confirmorder = () => {
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  let subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  let shippingcharges= subtotal>2000?0 :200;
  let gst = (subtotal * 0.18).toFixed(2);
  let total = (
    Number(subtotal) +
    Number(shippingcharges) +
    Number(gst)
  ).toFixed(2);
  const proccedToPayment=()=>{
    const data={
      subtotal,
      shippingcharges,
      gst,
      total
    }
    sessionStorage.setItem("orderInfo",JSON.stringify(data));
    navigate("/process/payment")
  }
  return (
    <>
      <MetaData title={"Kit Cart | Confirm order"} />
      <CheckoutStep activeStep={1} />
      <div className="grid md:grid-cols-2 grid-cols-1 m-3 md:m-5 p-5 items-center ">
        <div className=" m-3  p-2">
          <div className="shippinginfo">
            <h2 className="font-bold  text-2xl">Shipping Info</h2>
            <div className="name m-2 p-1 ">Name: {user.name}</div>
            <div className="phone m-2 p-1 ">Phone: {shippingInfo.phoneno}</div>
            <div className="address m-2 p-1 ">
              Address: {shippingInfo.address},{shippingInfo.pincode},
              {shippingInfo.state},{shippingInfo.country}
            </div>
          </div>
          <div className="cartitems">
            <h2 className="font-bold  text-2xl">Cart Items</h2>
            <div>
              {cartItems.map((item,i) => (
                <div className=" flex p-4 m-2 items-center" key={i}>
                  <div>
                    <img src={item.image} alt="img" className=" w-20 h-24" />
                  </div>
                  <div>
                    <p className=" mx-3 capitalize ">{item.name}</p>
                  </div>
                  <div className="justify-end mx-auto">
                    <p className=" mx-2 ">{`${item.quantity}X${item.price}=₹${
                      item.quantity * item.price
                    }`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ordersummery">
          <div className="m-5">
            <h2 className="font-bold  text-2xl text-center p-2">
              Order Summery
            </h2>
            <hr />
            <div className="subtotoal m-2 p-1 ">
              Subtotal:<span className="float-right">₹{subtotal}</span>{" "}
            </div>
            <div className="Shippingcharge m-2 p-1 ">
              Shipping Charges:
              <span className="float-right">₹{shippingcharges}</span>
            </div>
            <div className="gst m-2 p-1 ">
              GST:<span className="float-right">₹{gst}</span>
            </div>
            <hr />
            <div className="gst m-2 p-1 ">
              Total<span className="float-right">₹{total}</span>
            </div>
            <div className=" text-center">
              <button className="font-bold bg-sky-300 px-3  py-2 w-80" onClick={proccedToPayment}>
                Procced To Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmorder;
