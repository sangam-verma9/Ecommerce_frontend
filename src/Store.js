import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
} from "./reducers/productReducer";
import {
  forgotpasswordReducer,
  profileReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  myordersReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";
const reducer = combineReducers({
  products: productReducer,
  productDetail: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotpassword: forgotpasswordReducer,
  cart: cartReducer,
  newOrder: orderReducer,
  myOrders: myordersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
});
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippInfo"))
      : {},
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
