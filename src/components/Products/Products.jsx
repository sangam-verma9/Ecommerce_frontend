import React, { useEffect } from "react";
import "./products.css";
import Productcard from "./Productcard";
import MetaData from "../layout/MetaData";
// import {clearError} from "../../action/productAction"
import { getProduct } from "../../action/productAction";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../layout/loading/Loading";
import { useAlert } from "react-alert";
import noproductimg from "./noproductimg.png";

const Products = () => {
  const alert = useAlert();
  const { keyword } = useParams();
  const { pricegte } = useParams();
  const { pricelte } = useParams();
  const { category } = useParams();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      return alert.error(error);
      // alert.error(error);
      // dispatch(clearError());
    }
    dispatch(getProduct(keyword, pricegte, pricelte, category));
  }, [dispatch, error, alert, keyword, pricegte, pricelte, category]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Kit Cart | Products" />
          <div className="backgroundcol">
            {products.length>0 ? (
              <div className="products grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 mx-auto items-center justify-center gap-4">
                {products &&
                  products.map((product) => <Productcard product={product} key={product._id} />)}
              </div>
            ) : (
              <div className=" flex justify-center text-center">
                <img src={noproductimg} alt="noproduct"></img>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
