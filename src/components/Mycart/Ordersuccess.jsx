import React from "react";
import MetaData from "../layout/MetaData";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Ordersuccess = () => {
  return (
    <>
      <MetaData title={"Kit Cart | Order Success"} />
      <div className="bg-sky-50 grid justify-center items-center h-80">
        <div>
          <div className=" flex text-3xl  font-bold">
            <BsCheckCircleFill className=" m-2 text-green-500" />
            <p>Order Placed Successfully</p>
          </div>
          <div className=" text-center m-5">
            <Link to={"/myorders"} className="px-5 py-3 m-10 bg-sky-300">
              MY ORDERS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordersuccess;
