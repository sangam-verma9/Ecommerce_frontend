import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  MY_ORDER_FAIL,
} from "../constants/orderConstants";
import axios from "axios";

export const newOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "https://ecommerce-z4d5.onrender.com/api/v1/order/new",
      order,
      config
    );
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDER_REQUEST });
    const { data } = await axios.get(
      "https://ecommerce-z4d5.onrender.com/api/v1/order/me"
    );
    dispatch({
      type: MY_ORDER_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: MY_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const orderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://ecommerce-z4d5.onrender.com/api/v1/order/${id}`
    );
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
