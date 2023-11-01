import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { saveShippingInfo } from "../../action/cartAction";
import { Country, State } from "country-state-city";
import CheckoutStep from "./CheckoutStep";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (phoneno.length > 10 || phoneno.length < 10) {
      alert.error("Phone No. should to 10 digits");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pincode, phoneno })
    );
    navigate("/order/confirm");
  };
  useEffect(() => {
    if (shippingInfo) {
      setAddress(shippingInfo.address);
      setCity(shippingInfo.city);
      setCountry(shippingInfo.country);
      setPhoneno(shippingInfo.phoneno);
      setPincode(shippingInfo.pincode);
      setState(shippingInfo.state);
    }
  }, [shippingInfo]);

  return (
    <>
      <>
        <MetaData title={"Kit Cart | Shipping"} />
        <CheckoutStep activeStep={0} />
        <section className=" bg-sky-100">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-sky-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-300 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e">
                  Shipping Details
                </h1>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    {/* <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Address <span className=" text-red-700">*</span>
                    </label> */}
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={address}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Address"
                      required={true}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    {/* <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      City <span className=" text-red-700">*</span>
                    </label> */}
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                    />
                  </div>
                  <div>
                    {/* <label
                      htmlFor="pincode"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Pincode <span className=" text-red-700">*</span>
                    </label> */}
                    <input
                      type="number"
                      name="pincode"
                      id="pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Pin Code"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                    />
                  </div>
                  <div>
                    {/* <label
                      htmlFor="phoneno"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Phone No. <span className=" text-red-700">*</span>
                    </label> */}
                    <input
                      type="number"
                      name="phoneno"
                      id="phoneno"
                      value={phoneno}
                      onChange={(e) => setPhoneno(e.target.value)}
                      placeholder="Phone No."
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                    />
                  </div>
                  <div>
                    {/* <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Country <span className=" text-red-700">*</span>
                    </label> */}
                    <select
                      value={country}
                      name="country"
                      id="country"
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Country"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                    >
                      <option value="country">Country</option>
                      {Country &&
                        Country.getAllCountries().map((item) => {
                          return (
                            <option key={item.isoCode} value={item.isoCode}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  {country && (
                    <div>
                      {/* <label
                      htmlFor="state"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Country <span className=" text-red-700">*</span>
                    </label> */}
                      <select
                        value={state}
                        name="state"
                        id="state"
                        onChange={(e) => setState(e.target.value)}
                        placeholder="State"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                      >
                        <option value="state">State</option>
                        {State &&
                          State.getStatesOfCountry(country).map((item) => {
                            return (
                              <option key={item.isoCode} value={item.isoCode}>
                                {item.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state ? false : true}
                    className="w-full  bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={submitHandler}
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Shipping;
