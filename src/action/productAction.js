import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getProducthome = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    let link = `https://ecommerce-z4d5.onrender.com/api/v1/products/home`;
    const { data } = await axios.get(link);
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProduct =
  (keyword = "", pricegte = 0, pricelte = 30000, category = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      let link = `https://ecommerce-z4d5.onrender.com/api/v1/products?price[gte]=${pricegte}&price[lte]=${pricelte}&keyword=${keyword}`;
      if (category) {
        link = `https://ecommerce-z4d5.onrender.com/api/v1/products?price[gte]=${pricegte}&price[lte]=${pricelte}&category=${category}&keyword=${keyword}`;
      }

      // console.log(link);
      const { data } = await axios.get(link);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://ecommerce-z4d5.onrender.com/api/v1/products/${id}`
    );
    // console.log(data);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `https://ecommerce-z4d5.onrender.com/api/v1/review`,
      reviewData,
      config
    );
    // console.log(data);
    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    const { data } = await axios.post(
      `https://ecommerce-z4d5.onrender.com/api/v1/admin/products/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
