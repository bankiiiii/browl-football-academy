import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Players from "../pages/Players";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between absolute items-center  z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#players">Players</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* <Router>
        <Routes>
          <Route path="/" element={<Players />} />
          {/* <a href="#players">Players</a> */}
      {/* </Routes> */}
      {/* </Router> */}

      <div className="flex justify-between">
        <a
          href="https://twitter.com/_bankiiii"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="mx-4 hover:text-green-700" />
        </a>
        <FaFacebookF className="mx-4 hover:text-green-700" />
        <FaGooglePlusG className="mx-4 hover:text-green-700" />
        <FaInstagram className="mx-4 hover:text-green-700" />
      </div>
      {/* hamburger styling*/}

      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>

      {/* mobilEMenu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden  md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12 ">
          <li className="text-2xl py-8 ">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8 ">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8 ">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8 ">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
