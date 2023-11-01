import React from "react";
import { Link } from "react-router-dom";
import "./sidepannel.css";
const SidePannel = () => {
  return (
    <>
      <div className=" flex  p-5 w-full justify-evenly">
        <div className=" m-5 font-bold text-xl">
          <Link to={"/admin/dashboard"} className="bg-sky-200 p-3 rounded-xl">
            Dashboard
          </Link>
        </div>

        <div class="dropdown m-5">
          <span className="bg-sky-200 p-3 rounded-xl font-bold text-xl text-black">
            Products
          </span>
          <div className="dropdown-content">
            <Link to={"/admin/products"} className=" text-black py-2 px-5 hover:bg-sky-400 bg-sky-300 m-2 rounded-2xl">
              All
            </Link>
            <Link to={"/admin/create"} className=" text-black p-2 hover:bg-sky-400 bg-sky-300 m-2 rounded-2xl">
              Create
            </Link>
          </div>
        </div>

        <div className=" m-5 font-bold text-xl">
          <Link to={"/admin/orders"} className="bg-sky-200 p-3 rounded-xl">
            Orders
          </Link>
        </div>
        <div className=" m-5  font-bold text-xl">
          <Link to={"/admin/users"} className="bg-sky-200 p-3 rounded-xl">
            {" "}
            Users
          </Link>
        </div>
        <div className=" m-5  font-bold text-xl">
          <Link to={"/admin/reviews"} className="bg-sky-200 p-3 rounded-xl">
            Reviews
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidePannel;
