import React from "react";
import TALK from "../assets/talk.jpeg";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto p-4 w-full px-4 py-16">
      <h2 className="text-center text-red-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4 group">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={TALK} alt="" />
        </div>
        <div>
          <img
            className="w-full h-full object-cover hover:!scale-100"
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1508087625439-de3978963553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1631495634750-0f14320bc0a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNvY2NlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500
