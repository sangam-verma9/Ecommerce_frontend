import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile, clearError, loadUser } from "../../action/userAction";
import { useAlert } from "react-alert";
import Loading from "../layout/loading/Loading";

const Editprofile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { user,loading } = useSelector(
    (state) => state.user
  );
  const { error } = useSelector((state) => state.profile);
  function updatehandler(event) {
    event.preventDefault();
    dispatch(updateProfile(name,email));
    dispatch(loadUser());
    navigate("/user")
    alert.success("Update successfully");
  }
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
      // return alert.error(error);
    }
      if (user) {
        setEmail(user.email);
        setName(user.name)
      }
  }, [error,user, dispatch, alert]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | Update"} />
          <section className=" bg-sky-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-sky-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-300 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e">
                    Update Profile
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
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Name <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full  bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={updatehandler}
                    >
                      Update
                    </button>
                    <p className="text-sm font-light ">
                      Don’t wanted to update?{" "}
                      <Link
                        to={"/user"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Cancel
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

export default Editprofile;
