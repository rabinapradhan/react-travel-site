import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1240px] h-full mx-auto px-4 py-16">
      <div className="border inline-block  border-gray-600 w-20"></div>
      <span className="pl-3 text-lg text-gray-600">Tour gallery</span>
      <h2 className="lg:text-5xl text-4xl my-6 ">
        Best Tourist's Shared Photos
      </h2>
      <div className="grid lg:grid-cols-5 my-4 lg:grid-rows-2 gap-4">
        <img
          src={img1}
          alt="/"
          className="w-full h-[500px] object-cover lg:col-span-3 col-span-2 row-span-2"
        />
        <img src={img2} alt="/" className="w-full h-full object-cover" />
        <img src={img3} alt="/" className="w-full h-full object-cover" />
        <img src={img4} alt="/" className="w-full h-full object-cover" />
        <img src={img5} alt="/" className="w-full h-full object-cover" />
      </div>
      <button className="btn">
        <a href="https://rabinapradhan.github.io/react-travel-site/">
          See More..
        </a>
      </button>
    </div>
  );
};

export default Gallery;
