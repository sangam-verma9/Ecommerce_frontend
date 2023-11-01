import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import googleplay from "./google-play.svg";
import appstore from "./app-store.svg";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" bg-gray-700 text-white grid grid-cols-1 md:grid-cols-3">
        <div className=" py-4 px-5 flex items-center justify-center flex-col font-serif">
          DOWNLOAD OUR APP
          <div className=" my-2">
            <Link
              className=" flex justify-center items-center  py-1 px-2 rounded hover:text-sky-400"
              to="https://playstore.com"
            >
              <img src={googleplay} alt="Google-paly" />
            </Link>
          </div>
          <div className=" mt-2">
            <Link
              className=" flex justify-center items-center  py-1 px-1 rounded hover:text-sky-400"
              to="https://applestore.com"
            >
              <img src={appstore} alt="App-store" />
            </Link>
          </div>
        </div>
        <div className=" py-4 px-5 flex items-center justify-center flex-col">
          <h1 className=" text-6xl md:text-8xl font-serif cursor-pointer">
            kitcart<span className=" text-sky-500">.com</span>
          </h1>
          <h4 className=" mt-4">High Quality is our first priority.</h4>
          <h4 className=" mt-3">Copyright 2023 &copy; kitcart</h4>
        </div>
        <div className=" py-4 px-5 text-xl flex items-center justify-center flex-col">
          <h3 className="mb-1 font-serif">Follow Us</h3>
          <div className=" flex">
            <a href="https://instagram.com/" className=" mx-2">
              <FaInstagram
                size="30px"
                className="hover:text-sky-400 cursor-pointer"
              />
            </a>
            <a href="https://facebook.com" className=" mx-2">
              <AiFillFacebook
                size="30px"
                className="hover:text-sky-400 cursor-pointer"
              />
            </a>
            <a href="https://twitter.com" className=" mx-2">
              <AiFillTwitterSquare
                size="30px"
                className="hover:text-sky-400 cursor-pointer"
              />
            </a>
            <a href="https://youtube.com" className=" mx-2">
              <AiFillYoutube
                size="30px"
                className="hover:text-sky-400 cursor-pointer"
              />
            </a>
          </div>
          <div className=" mt-4">
            <a href="mailto:kitcart32@gmail.com">
              Mail to:&nbsp;
              <span className=" text-sky-500 font-serif cursor-pointer hover:text-sky-400">
                kitcart32@gmail.com
              </span>
            </a>
          </div>
          <div className=" mt-2">
            Made by&nbsp;
            <span className=" text-sky-500 font-serif cursor-pointer  hover:text-sky-400">
              Sangam
            </span>
            ❤️
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
