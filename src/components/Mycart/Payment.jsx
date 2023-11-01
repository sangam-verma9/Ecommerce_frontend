import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import CheckoutStep from "./CheckoutStep";
import { useAlert } from "react-alert";
import { clearError, newOrder } from "../../action/orderAction";
import { useNavigate } from "react-router-dom";
import Loading from "../layout/loading/Loading";

// import axios from "axios";
// import {
//   CardNumberElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

const Payment = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  // const stripe = useStripe();
  const navigate = useNavigate();
  // const element = useElements();

  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);
  const { error,loading } = useSelector((state) => state.newOrder);
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const paybtn = useRef(null);
  const [cardno, setCardno] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // const paymentdata = {
  //   amount: Math.round(orderInfo.total * 100),
  // };

  const order = {
    shippingInfo: {
      address: shippingInfo.address,
      city: shippingInfo.city,
      state: shippingInfo.state,
      country: shippingInfo.country,
      pincode: shippingInfo.pincode,
      phoneNo: shippingInfo.phoneno,
    },
    orderItems: cartItems,
    paymentInfo: {
      id: "12345test",
      status: "success",
    },
    itemsPrice: orderInfo.subtotal,
    shippingPrice: orderInfo.shippingcharges,
    taxPrice: orderInfo.gst,
    totalPrice: orderInfo.total,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // paybtn.current.disabled = true;
    if(!cardno || !cvv || !expiry){
      alert.error("fill details");
      return;
    }
    dispatch(newOrder(order));
    alert.success("order placed");
    navigate("/order/success")
    
    // alert.success("order placed");
    // navigate("/order/me")
    //***** for stripe payment below lines
    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "/api/v1/payment/process",
    //     paymentdata,
    //     config
    //   );
    //   const client_secret = data.client_secret;
    //   if (!stripe || !element) return;
    //   const result = await stripe.confirmCardPayment(client_secret, {
    //     payment_method: {
    //       card: element.getElement(cardno),
    //       billing_details: {
    //         name: user.name,
    //         email: user.email,
    //         address: {
    //           line1: shippingInfo.address,
    //           city: shippingInfo.city,
    //           postal_code: shippingInfo.pincode,
    //           state: shippingInfo.state,
    //           country: shippingInfo.country,
    //         },
    //       },
    //     },
    //   });
    //   if (result.error) {
    //     paybtn.current.disabled = false;
    //     alert.error(result.error.message);
    //   } else {
    //     if (result.paymentIntent.status === "succeeded") {
    //       navigate("/");
    //     } else {
    //       alert.error("There is some issue while payment");
    //     }
    //   }
    // } catch (error) {
    //   paybtn.current.disabled = false;
    //   alert.error(error.response.data.message);
    // }
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
  }, [error, alert, dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | Payment"} />
          <CheckoutStep activeStep={2} />
          <section className=" bg-sky-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-sky-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-300 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e">
                    Payment
                  </h1>
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="cardno"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Your CardNo <span className=" text-red-700">*</span>
                      </label>

                      <input
                        type="number"
                        name="cardno"
                        id="cardno"
                        value={cardno}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1234 1234 1234 1234"
                        required={true}
                        onChange={(e) => setCardno(e.target.value)}
                        maxLength={16}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="expiry"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Expiry <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="date"
                        name="expiry"
                        id="expiry"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="03/12"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        CVV <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        id="cvv"
                        maxLength={3}
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="•••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                      />
                    </div>

                    <input
                      type="submit"
                      className="w-full cursor-pointer  bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={submitHandler}
                      ref={paybtn}
                      value={`Pay ₹${orderInfo && orderInfo.total}`}
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Payment;
