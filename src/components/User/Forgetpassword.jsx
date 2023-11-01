import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { clearError, forgetpassword } from "../../action/userAction";
import { useAlert } from "react-alert";
import Loading from "../layout/loading/Loading";

const Forgetpassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [email, setEmail] = useState("");
  const { error, loading, message } = useSelector(
    (state) => state.forgotpassword
  );
  const navigate = useNavigate();
  function submitform(event) {
    event.preventDefault();
    dispatch(forgetpassword(email));
  }
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
      // return alert.error(error);
    }
    if (message) {
      return alert.success(message);
    }
  }, [error, dispatch, alert, navigate, message]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | Forgot Password"} />
          <section className=" bg-sky-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-sky-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-300 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e">
                    Forget Password
                  </h1>
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Your email <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@gmail.com"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full  bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={submitform}
                    >
                      Send Email
                    </button>
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

export default Forgetpassword;
