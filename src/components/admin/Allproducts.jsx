import React from "react";
import SidePannel from "./SidePannel";
import "./dashboard.css";

const Allproducts = () => {
  return (
    <>
      <SidePannel />
      <div className="dashboardh mx-auto">All Products</div>
      {/* <div className=" md:m-8 m-2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left ">
            <thead className="text-xs  uppercase bg-gray-50 dark:bg-sky-400 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order, i) => (
                  <tr
                    className="bg-white border-b dark:bg-sky-200 dark:border-gray-700"
                    key={i}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      {order._id}
                    </th>
                    <td className="px-6 py-4 text-yellow-500">
                      {order.orderStatus}
                    </td>
                    <td className="px-6 py-4">
                      {order.cretedAt.substring(0, 10)}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/order/${order._id}`}
                        className="font-medium text-sky-500 hover:underline"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default Allproducts;
