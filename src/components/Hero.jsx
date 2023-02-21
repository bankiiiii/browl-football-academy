import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29jY2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">DISCOVER YOURSELF</h1>
          <h2 className="text-4xl py-4 italic">
            with <span className="text-red-700"> BrowlFAC </span>
          </h2>
          <p className="text-white">
            Are you willing to challenge yourself everyday to be better than you
            were yesterday? Do you have a burning passion for football and the
            drive required to set you apart from your competitors? Join us at
            Browl Football Academy and you'll be joining a club, a community, a
            family. Where better never stops.
            <span className="font-bold text-red-700 ml-1">UP BROWLFAC!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
