import "./App.css";
import React from "react";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import { Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./components/Route/ProtectedRoute";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import User from "./components/User/User";
import Contact from "./components/Contact/Contact";
import Mycart from "./components/Mycart/Mycart";
import Confirmorder from "./components/Mycart/Confirmorder";
import Shipping from "./components/Mycart/Shipping";
import ProductDetails from "./components/productDetails/ProductDetails";
import Search from "./components/Search/Search";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
// import store from "./Store";
import { useDispatch } from "react-redux";
import { loadUser } from "./action/userAction";
import Changepassword from "./components/User/Changepassword";
import Editprofile from "./components/User/Editprofile";
import Forgetpassword from "./components/User/Forgetpassword";
import Resetpassword from "./components/User/Resetpassword";
// import axios from "axios";
import Payment from "./components/Mycart/Payment";
import Ordersuccess from "./components/Mycart/Ordersuccess";
import Myorders from "./components/Mycart/Myorders";
import Orderdetails from "./components/Mycart/Orderdetails";
import Dashboard from "./components/admin/Dashboard";
import NewProduct from "./components/admin/NewProduct";
import Allproducts from "./components/admin/Allproducts";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";
import Reviews from "./components/admin/Reviews";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

function App() {
  const dispatch = useDispatch();
  // const [stripeapikey, setStripeapikey] = useState("");
  // const getStripeKey = async () => {
  //   const { data } = await axios.get("/api/v1/stripeapikey");
  //   setStripeapikey(data.StripeApiKey);
  // };
  React.useEffect(() => {
    // console.log("use effect called")
    dispatch(loadUser());
    // getStripeKey();
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:keyword/:pricegte/:pricelte"
          element={<Products />}
        />
        <Route
          path="/products/:keyword/:pricegte/:pricelte/:category"
          element={<Products />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/resetpassword" element={<Changepassword />} />
        <Route path="/user/editprofile" element={<Editprofile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/forgetpassword" element={<Forgetpassword />} />
        <Route path="/password/reset/:token" element={<Resetpassword />} />
        <Route path="/cart" element={<Mycart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/process/payment" element={<Payment />} />
        <Route path="/myorders" element={<Myorders />} />

        <Route path="/orderdetails/:id" element={<Orderdetails />} />
        <Route path="/order/confirm" element={<Confirmorder />} />
        <Route path="/order/success" element={<Ordersuccess />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Allproducts />} />
        <Route path="/admin/create" element={<NewProduct />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/reviews" element={<Reviews />} />

        {/* {stripeapikey && (
            <Elements stripe={loadStripe(stripeapikey)}>
              <ProtectedRoute
                
                path="/process/payment"
                element={<Payment />}
              />
            </Elements>
          )} */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
