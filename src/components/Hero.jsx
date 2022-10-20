import React from "react";
import travelVid from "../assets/travelVid.mp4";
const Hero = () => {
  return (
    <div className="w-screen  h-screen  relative text-white ">
      <video
        src={travelVid}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-[30%]  h-full md:left-40 left-10  md:max-w-xl max-w-md mx-auto  ">
        <h1 className="md:text-4xl lg:text-6xl text-3xl">
          {" "}
          Let`s Make Your Best Trip Ever{" "}
        </h1>
        <p className="py-4 text-xl">
          Our team of tour agents can provide you an unforgettable travel
          experience taking all your wishes and needs into account.
        </p>
        <button className="px-6 mt-3 py-3  border border-gray-300 text-lg hover:bg-blue-400 hover:border-none duration-300 ">
          Book A Tour{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
