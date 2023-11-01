import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  // UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  // UPDATE_PASSWORD_RESET,
  LOGOUT_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "https://ecommerce-z4d5.onrender.com/api/v1/login",
      { email, password },
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "https://ecommerce-z4d5.onrender.com/api/v1/register",
      { name, email, password },
      config
    );
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// load user form cookies
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(
      "https://ecommerce-z4d5.onrender.com/api/v1/me"
    );
    // console.log("user request ");
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// logout user
export const logoutUser = () => async (dispatch) => {
  try {
    await axios.post("https://ecommerce-z4d5.onrender.com/api/v1/logout");
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateProfile = (name, email) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      "https://ecommerce-z4d5.onrender.com/api/v1/me/update",
      { name, email },
      config
    );
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updatePassword =
  (oldpassword, newpassword, confirmpassword) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        "https://ecommerce-z4d5.onrender.com/api/v1/password/update",
        { oldpassword, newpassword, confirmpassword },
        config
      );
      dispatch({
        type: UPDATE_PASSWORD_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const forgetpassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "https://ecommerce-z4d5.onrender.com/api/v1/forgot/password",
      { email },
      config
    );
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,  
    });
  }
};

export const resetpassword = (token, password,confirmpassword) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `https://ecommerce-z4d5.onrender.com/api/v1/password/reset/${token}`,
      { password, confirmpassword },
      config
    );
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
