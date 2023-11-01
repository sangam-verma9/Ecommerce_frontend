import React, { useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { PiPassword } from "react-icons/pi";
import {BsBox}from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logoutUser } from "../../action/userAction";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import userimg from "./userprofile.png";
import Loading from "../layout/loading/Loading";
const User = () => {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const logouthandller = () => {
    dispatch(logoutUser());
    navigate("/");
    return alert.success("logout sucessfull");
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | User"} />
          <div className="py-20 ">
            <div className="flex flex-wrap w-10/12 m-auto justify-evenly bg-sky-300 p-10">
              <div className="md:w-1/4 p-5">
                <img
                  src={userimg}
                  alt="user_profile"
                  className="rounded-full"
                  style={{ width: "180px" }}
                />
              </div>
              <div className="border-r-2 border-black p-5 lg:block hidden"></div>
              <div className="p-5 align-middle">
                <ul>
                  <li className="py-5">
                    <h1 className="text-xl md:text-3xl font-bold flex flex-col md:flex-row justify-center">
                      <div className=" text-center p-2 capitalize">
                        {user.name} &nbsp; &nbsp;{" "}
                      </div>
                      <div className=" flex justify-center text-center">
                        {user.role === "admin" ? (
                          <Link
                            className=" p-3 rounded-full bg-sky-200 m-2 hover:bg-sky-100 hover:text-sky-400"
                            title="Dashbord"
                            to={"/admin/dashboard"}
                          >
                            <BiSolidDashboard />
                          </Link>
                        ) : (
                          ""
                        )}

                        <Link
                          className=" p-3 rounded-full bg-sky-200 m-2 hover:bg-sky-100 hover:text-sky-400"
                          title="Update info"
                          to={"editprofile"}
                        >
                          <RiEdit2Fill />
                        </Link>

                        <Link
                          className=" p-3 rounded-full bg-sky-200 m-2 hover:bg-sky-100 hover:text-sky-400"
                          title="Rest password"
                          to={"resetpassword"}
                        >
                          <PiPassword />
                        </Link>
                        <button
                          className=" p-3 rounded-full bg-sky-200 m-2 hover:bg-sky-100 hover:text-sky-400"
                          title="Logout"
                          onClick={logouthandller}
                        >
                          <AiOutlineLogout />
                        </button>
                      </div>
                    </h1>
                  </li>

                  <li className="py-1">
                    <h2 className="text-2xl">📧&nbsp;{user.email}</h2>
                  </li>
                </ul>
                <div className=" text-3xl flex m-3 justify-center p-3">
                  <Link
                    className=" p-3 bg-sky-200 m-2 rounded-full hover:bg-sky-100 hover:text-sky-400"
                    title="My cart"
                    to={"/cart"}
                  >
                    <FaShoppingCart />
                  </Link>
                  <Link
                    className=" p-3 bg-sky-200 m-2  rounded-full hover:bg-sky-100 hover:text-sky-400 "
                    title="Ordres"
                    to={"/myorders"}
                  >
                    <BsBox />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default User;
