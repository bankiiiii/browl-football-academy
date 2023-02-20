import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import logo from "../assets/logo.png";

const TopBar = () => {
  return (
    <div className=" flex justify-between items-center px-4 py-2">
      <div className="flex items-center ">
        <div>
          <img
            src={logo}
            alt=""
            size={30}
            className="w-10 h-10 gap-4 flex text-[var(--primary-dark)] mr-2 "
          />
        </div>
        <h1 className="text-xl font-bold text-green-700">
          Browl Football Academy
        </h1>
      </div>

      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="text-[var(--primary-dark)]"
          />
          <p className="pt-1">Open All Day</p>
        </div>

        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <a href="tel:+1-234-567-8910">+1-234-567-8910</a>
        </div>

        <button className="animate-pulse">
          SUPPORT <span className="">💪</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
