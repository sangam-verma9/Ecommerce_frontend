import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { clearError, orderDetails } from "../../action/orderAction";
import Loading from "../layout/loading/Loading";
const Orderdetails = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { order, loading, error } = useSelector((state) => state.orderDetails);
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(orderDetails(id));
  }, [dispatch, id, alert, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | Order Details"} />
          <div className="grid md:grid-cols-2 grid-cols-1 m-3 md:m-5 p-5 items-center ">
            <div>
              <div className="shippinginfo">
                <h2 className="font-bold  text-2xl">Shipping Info</h2>
                <div className="name m-2 p-1 ">Name: {order.user.name}</div>
                <div className="phone m-2 p-1 ">
                  Phone: {order.shippingInfo.phoneNo}
                </div>
                <div className="address m-2 p-1 ">
                  Address: {order.shippingInfo.address},
                  {order.shippingInfo.pincode},{order.shippingInfo.state},
                  {order.shippingInfo.country}
                </div>
              </div>
              <div className="cartitems">
                <h2 className="font-bold  text-2xl">Cart Items</h2>
                <div>
                  {order.orderItems.map((item, i) => (
                    <div className=" flex p-4 m-2 items-center" key={i}>
                      <div>
                        <img
                          src={item.image}
                          alt="img"
                          className=" w-20 h-24"
                        />
                      </div>
                      <div>
                        <p className=" mx-3 capitalize ">{item.name}</p>
                      </div>
                      <div className="justify-end mx-auto">
                        <p className=" mx-2 ">{`${item.quantity}X${
                          item.price
                        }=₹${item.quantity * item.price}`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ordersummery">
              <h2 className="m-5 p-2 text-2xl font-bold">
                # Order Id: <span className=" text-gray-400">{order._id}</span>
              </h2>
              <div className="m-5">
                <h2 className="font-bold  text-2xl text-center p-2">
                  Order Summery
                </h2>
                <hr />
                <div className="subtotoal m-2 p-1 ">
                  Subtotal:
                  <span className="float-right">₹{order.itemsPrice}</span>{" "}
                </div>
                <div className="Shippingcharge m-2 p-1 ">
                  Shipping Charges:
                  <span className="float-right">₹{order.shippingPrice}</span>
                </div>
                <div className="gst m-2 p-1 ">
                  GST:<span className="float-right">₹{order.taxPrice}</span>
                </div>
                <hr />
                <div className="gst m-2 p-1 ">
                  Total<span className="float-right">₹{order.totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Orderdetails;
