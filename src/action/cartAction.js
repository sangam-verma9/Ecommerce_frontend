import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";

//add to cart
export const addToCart = (id, quantity) => async (dispatch, getstate) => {
  const { data } = await axios.get(
    `https://ecommerce-z4d5.onrender.com/api/v1/products/${id}`
  );
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.image[0].url,
      stock: data.product.stock,
      quantity,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
};

// remove from cart
export const removeFromCart = (id) => async (dispatch, getstate) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems));
};
//save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
