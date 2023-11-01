import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { clearError, updatePassword } from "../../action/userAction";
import { useAlert } from "react-alert";
import Loading from "../layout/loading/Loading";
const Changepassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const { error, loading, isUpdated } = useSelector((state) => state.profile);
  function updatehandler(event) {
    event.preventDefault();
    dispatch(updatePassword(oldpassword, newpassword, confirmpassword));
    navigate("/user/login");
  }
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (isUpdated) {
      alert.success("Reset successfully");
    }
  }, [error, dispatch, alert, navigate, isUpdated]);
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
                    Change Password
                  </h1>
                  <form className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        htmlFor="oldpassword"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Old Password <span className=" text-red-700">*</span>
                      </label>
                      <input
                        type="password"
                        name="oldpassword"
                        id="oldpassword"
                        value={oldpassword}
                        onChange={(e) => setOldpassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required={true}
                        autoComplete="flase"
                      />
                    </div>
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
                        value={newpassword}
                        onChange={(e) => setNewpassword(e.target.value)}
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

export default Changepassword;
