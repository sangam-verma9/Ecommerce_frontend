import React from "react";
import SidePannel from "./SidePannel";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <>
      <SidePannel />
      <>
        <div className="dashboardh mx-auto">Dashboard</div>

        <div className=" m-8 flex justify-center ">
          <div className=" flex flex-col mx-5 rounded-full bg-sky-100 h-40 w-40 p-12 justify-center text-center">
            <h1>Total Amount</h1>
            <h1>₹2000</h1>
          </div>
          <div className=" flex flex-col mx-5 rounded-full bg-sky-200 h-40 w-40 p-12 justify-center text-center">
            <h1>Products</h1>
            <h1>200</h1>
          </div>
          <div className=" flex flex-col mx-5 rounded-full bg-sky-300 h-40 w-40 p-12 justify-center text-center">
            <h1>Orders</h1>
            <h1>31</h1>
          </div>
          <div className=" flex flex-col mx-5 rounded-full bg-sky-400 h-40 w-40 p-12 justify-center text-center">
            <h1>Users</h1>
            <h1>34</h1>
          </div>
        </div>
      </>
    </>
  );
};

export default Dashboard;
