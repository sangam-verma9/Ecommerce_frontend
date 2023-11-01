import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { signup, clearError } from "../../action/userAction";
import { useAlert } from "react-alert";
import Loading from "../layout/loading/Loading";
// import userimg from "../../images/userprofile.png"
const Signup = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  // const [avtar, setAvtar] = useState("");
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  // const avtarHandler=(e)=>{
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvtar(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // }
  const signupSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(name, email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
      // return alert.error(error);
    }
    if (isAuthenticated) {
      navigate("/user");
    }
  }, [error, dispatch, alert, isAuthenticated, navigate]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | signup"} />
          <section className="bg-sky-100 py-5">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
              <div className="w-full bg-sky-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-300 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create an account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Your name <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John Doe"
                        required={true}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Confirm password{" "}
                        <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="confirm-password"
                        name="confirm-password"
                        id="confirm-password"
                        value={confirmpassword}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />
                    </div>
                    {/* <div>
                      <label
                        htmlFor="avtar"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Avtar <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="file"
                        name="avtar"
                        id="avtar"
                        value={avtar}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                        onChange={avtarHandler}
                      />
                    </div> */}

                    <button
                      type="submit"
                      className="w-full  bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={signupSubmit}
                    >
                      Create an account
                    </button>
                    <p className="text-sm font-light ">
                      Already have an account?{" "}
                      <Link
                        to={"/user/login"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
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

export default Signup;
