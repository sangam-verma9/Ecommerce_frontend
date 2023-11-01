import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { login, clearError } from "../../action/userAction";
import { useAlert } from "react-alert";
import Loading from "../layout/loading/Loading";
const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const location = useLocation();
  function loginSubmit(event) {
    event.preventDefault();
    // console.log(" login form submitted");
    dispatch(login(loginEmail, loginPassword));
  }
  const redirect = location.search ? location.search.split("=")[1] : "/user";
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
      // return alert.error(error);
    }
    if (isAuthenticated) {
      navigate(redirect);
      alert.success("Login successfully");
    }
  }, [error, dispatch, alert, isAuthenticated, navigate, redirect]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | login"} />
          <section className=" bg-sky-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-sky-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-300 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e">
                    Welcome Back
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
                        value={loginEmail}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@gmail.com"
                        required={true}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Password <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="remember" className="text-gray-500">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <Link
                        to={"/user/forgetpassword"}
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <button
                      type="submit"
                      className="w-full  bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={loginSubmit}
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light ">
                      Don’t have an account yet?{" "}
                      <Link
                        to={"/user/signup"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </Link>
                    </p>
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

export default Login;
