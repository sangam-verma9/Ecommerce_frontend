import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loading from "../layout/loading/Loading";
import { clearError, myOrders } from "../../action/orderAction";
import { Link } from "react-router-dom";
import noorder from "./noorder.png";
import { useAlert } from "react-alert";
const Myorders = () => {
  const alert = useAlert();
  const { loading, orders, error } = useSelector((state) => state.myOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch,alert]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={"Kit Cart | My Orders"} />
          {!orders ? (
            <div className="flex justify-center">
              <img src={noorder} alt="No order" className=" m-5 " />
              <div>
                <Link to={"/products"} className=" m-3 px-5 py-3 bg-sky-300">
                  BUY NOW
                </Link>
              </div>
            </div>
          ) : (
            <div className=" md:m-8 m-2">
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
                              to={`/orderdetails/${order._id}`}
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
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Myorders;
