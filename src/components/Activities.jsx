import React from "react";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          Compact Training
        </h3>
        <img
          src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-full object-cover relative border-4 border-red-500 shadow-lg "
        />
      </div>
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          MatchDay
        </h3>
        <img
          src="https://images.unsplash.com/photo-1487466365202-1afdb86c764e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2NlciUyMG1hdGNoZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-full object-cover relative border-4 border-red-500 shadow-lg "
        />
      </div>
      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold">
          Spaced Training
        </h3>
        <img
          src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-full object-cover relative border-4 border-red-500 shadow-lg "
        />
      </div>
    </div>
  );
};

export default Activities;
