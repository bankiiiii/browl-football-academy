import React from "react";
import logo from "../assets/logo.png";
// import { BsChatSquareDots } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center">
        <img
          src={logo}
          alt=""
          size={30}
          className="w-10 h-10 gap-4 flex text-[var(--primary-dark)] mr-2 "
        />
        <a href="/" className="text-xl font-bold text-green-700">
          BROWL Football Academy
        </a>
      </div>
      <p className="flex items-center m-auto justify-center p-4 text-gray-500">
        Address: Ogolonto C&S grammar school
      </p>
      <h3 className="font-bold flex m-auto items-center justify-center ">
        TRAINING DAYS
      </h3>

      <p className="flex items-center m-auto justify-center pb-2">
        [Tuesdays, Thursdays and Saturdays]
      </p>

      <div className="flex items-center justify-center m-auto p-4 text-gray-400">
        <small>&copy; BANKIII. All rights reserved</small>
      </div>
    </div>
  );
};

export default Footer;
