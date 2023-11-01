import React, { useState,useEffect } from "react";
import {  useNavigate  } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearError, resetpassword} from "../../action/userAction";
import { useAlert } from "react-alert";
import Loading from "../layout/loading/Loading";

const Resetpassword = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const alert = useAlert();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const {error, success,loading} =useSelector(state=>state.forgotpassword)
  function updatehandler(event) {
    event.preventDefault();
    dispatch(resetpassword(token,password, confirmpassword));
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
      // return alert.error(error);
    }
    if (success) {
      alert.success("Reset successfully");
      navigate("/user/login")
    }
  }, [error, dispatch, alert, navigate, success]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | Change Password"} />
          <section className=" bg-sky-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-sky-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-300 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e">
                    Reset Password
                  </h1>
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="newpassword"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        New Password <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="password"
                        name="newpassword"
                        id="newpassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                        autoComplete="false"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confrimpassword"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Confirm Password{" "}
                        <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="password"
                        name="confrimpassword"
                        id="confrimpassword"
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                        autoComplete="false"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full  bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={updatehandler}
                    >
                      Change
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

export default Resetpassword;
