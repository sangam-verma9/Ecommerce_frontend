import React, { useEffect } from "react";
// import Carousal from "react-material-ui-carousel";
import "./home.css";
import Productcard from "./Productcard";
import MetaData from "../layout/MetaData";
import { clearError, getProducthome } from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../layout/loading/Loading";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
// import homeimg1 from "./imageshome/homeimg1.png";
// import homeimg2 from "./imageshome/homeimg2.png";
import homeimg3 from "./imageshome/homeimg3.png";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProducthome());
  }, [dispatch, error, alert]);

  return (
    <>
      <img src={homeimg3} alt="img3" />
      {/* <Carousal>
        <img src={homeimg1} alt="img1" />
        <img src={homeimg2} alt="img2" />
        <img src={homeimg3} alt="img3" />
      </Carousal> */}
      <div className="featuredp">
        <h3 className=" md:text-2xl sm:text-xl p-1 font-mono">
          Featured Product
        </h3>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Kit cart" />
          <div className="home">
            <div className="products grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-auto items-center  gap-4">
              {products &&
                products.map((product) => (
                  <Productcard product={product} key={product._id} />
                ))}
            </div>
          </div>
          <div className=" text-center text-xl md:text-2xl m-5 ">
            <Link to={"/products"} className="bg-sky-400 p-3 rounded">
              <button className=" font-bold"> All Products</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
