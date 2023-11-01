import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import "./search.css";
import MetaData from "../layout/MetaData";

const categories = [
  "Laptop",
  "Footwear",
  "T shirt",
  "Smart phone",
  "Electronices",
  "Kids wear",
];

const Search = () => {
  const [keyword, setkeyword] = useState("");
  const [price, setPrice] = useState([0, 30000]);
  const [category, setCatgory] = useState("");
  const navigate = useNavigate();
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const searchhandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}/${price[0]}/${price[1]}`);
    } else if (category.trim()) {
      navigate(`/products/ /${price[0]}/${price[1]}/${category}`);
    } else {
      navigate(`/products/ /${price[0]}/${price[1]}`);
    }
  };
  return (
    <>
      <MetaData title={`Kit Cart | Search`} />
      <div className="continer grid grid-cols-1 md:grid-cols-2 ">
        <div className="searchbar text-xl md:text-2xl m-3 flex items-center justify-center">
          <div className=" m-1 p-2">
            <form onSubmit={searchhandler} className="flex items-center">
              <input
                type="text"
                className="search"
                onChange={(e) => setkeyword(e.target.value)}
                placeholder="What are you looking for? .."
              />

              <button type="submit" className="btnsearch bg-sky-200">
                <ImSearch />
              </button>
            </form>
          </div>
        </div>

        <div className="filterbox ">
          <Typography className=" text-center">Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aris-labelledby="range-slider"
            min={0}
            max={30000}
          />
          <Typography>Categories</Typography>
          <ul className="categoryBod w-80">
            {categories.map((category) => (
              <li
                className="category-link"
                key={category}
                onClick={() => setCatgory(category)}
              >
                <input type="checkbox" name="" id={category} /> {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Search;
