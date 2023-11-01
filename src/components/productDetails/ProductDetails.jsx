import React, { useEffect, useState } from "react";
import Carousal from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import Loading from "../layout/loading/Loading";
import MetaData from "../layout/MetaData";
import {
  clearError,
  getProductDetails,
  newReview,
} from "../../action/productAction";
import { addToCart } from "../../action/cartAction";
import userimg from "../../images/userprofile.png";
import { useAlert } from "react-alert";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";
const ProductDetails = () => {
  const alert = useAlert();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const { product, loading, error } = useSelector(
    (state) => state.productDetail
  );

  const { success, error: reviewerror } = useSelector(
    (state) => state.newReview
  );
  const increaseq = () => {
    if (product.stock <= quantity) {
      alert.error("Stock Not Avilable");
      return;
    }
    let x = quantity + 1;
    setQuantity(x);
  };
  const decreaseq = () => {
    let x = quantity;
    if (x > 1) {
      x -= 1;
    }
    setQuantity(x);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (reviewerror) {
      alert.error(reviewerror);
      dispatch(clearError());
    }
    if (success) {
      alert.success("Review Sumitted Successfully");
      dispatch({
        type: NEW_REVIEW_RESET,
      });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, reviewerror, success]);
  const options = {
    readOnly: true,
    value: product.ratings,
    precision: 0.5,
  };
  const addtocartHandler = () => {
    dispatch(addToCart(id, quantity));
    alert.success("Added to cart");
  };

  const reviewsubmitHandler = () => {
    const myform = new FormData();
    myform.set("rating", rating);
    myform.set("comment", comment);
    myform.set("productId", id);
    dispatch(newReview(myform));
    setOpen(false);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={`Kit Cart | ${product.name}`} />
          <div className="productdetails grid md:grid-cols-2 grid-cols-1 p-5">
            <div className="carousal">
              <div className="sampleimgs px-4">
                <div>
                  {product.image &&
                    product.image.map((item, i) => {
                      return (
                        <img
                          src={item.url}
                          className="sampleimginner"
                          alt={"product img"}
                          key={i}
                        />
                      );
                    })}
                </div>
              </div>
              <Carousal className="carousalinner">
                {product.image &&
                  product.image.map((item, i) => {
                    return (
                      <img
                        src={item.url}
                        className="carousalimg"
                        alt={"product img"}
                        key={i}
                      />
                    );
                  })}
              </Carousal>
            </div>
            <div className="details ">
              <div>
                <h1 className=" text-3xl capitalize font-serif mt-2">
                  {product.name}
                </h1>
                <h3>Product: {product._id}</h3>
                <h1
                  className=" text-2xl font-bold my-2"
                  style={{ fontFamily: "cursive" }}
                >
                  <span className=" pr-4 text-red-500">
                    -{product.discount}%
                  </span>
                  ₹{product.price}
                </h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
                  <h2>
                    <Rating {...options} />
                  </h2>
                  <h3>
                    Reviews:
                    <span className="p-2">({product.numberOfReviews})</span>
                  </h3>
                </div>

                <div className="quantity my-3">
                  <button className=" btnqd" onClick={decreaseq}>
                    -
                  </button>
                  <input
                    type="number"
                    readOnly
                    value={quantity}
                    className="inquantity"
                  />
                  <button className="btnqe " onClick={increaseq}>
                    +
                  </button>
                </div>
                <h3 className=" text-sm font-bold">
                  Status:
                  {product.stock > 0 ? (
                    <span className=" text-green-600">Instock</span>
                  ) : (
                    <span className=" text-red-600">Outofstock</span>
                  )}
                </h3>
                <h3>
                  <span className=" text-xl font-serif">Discription:</span>
                  <span className="productdis">{product.discription}</span>
                </h3>
                <div className=" flex justify-center items-center my-3">
                  {/* <div>
                    <button className="font-serif btnbuy bg-red-400 hover:bg-red-300">
                      Buy Now
                    </button>
                  </div> */}
                  <div>
                    <button
                      className="font-serif btnbuy bg-red-400 hover:bg-red-300"
                      onClick={addtocartHandler}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews px-5">
            <div className=" flex justify-between">
              <h1 className=" text-center text-3xl font-serif border-b-2 m-2">
                Reviews
              </h1>
              <div>
                <button
                  className=" m-2 text-sm font-bold bg-sky-500 px-3 py-2 hover:bg-sky-400"
                  onClick={submitReviewToggle}
                >
                  Submit Review
                </button>
              </div>
            </div>
            <Dialog
              aria-labelledby="simple-dialog-title"
              open={open}
              onClose={submitReviewToggle}
            >
              <DialogTitle>Submit Review</DialogTitle>
              <DialogContent className="submitDialog">
                <Rating
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  size="large"
                />
                <textarea
                  className="submitDialogTextArea"
                  cols="30"
                  rows="5"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={submitReviewToggle}>
                  Cancel
                </Button>
                <Button color="primary" onClick={reviewsubmitHandler}>
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
            <div className="userreview m-4">
              {product.reviews && product.reviews[0] ? (
                product.reviews.map((item, i) => (
                  <div className="userreview m-3 flex" key={item._id}>
                    <div className=" p-2">
                      <img src={userimg} alt="user" />
                    </div>
                    <div className="p-2">
                      <div className=" flex pb-2">
                        <h2 className=" font-thin capitalize">{item.name}</h2>
                        <h4 className=" ml-2 bg-sky-500 p-1 rounded">
                          {item.rating}⭐
                        </h4>
                      </div>

                      <h3 className=" font-serif">{item.comment}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <div className="notreview"> Review Not Given Yet</div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
