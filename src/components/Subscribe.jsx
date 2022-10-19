import React from "react";
import img5 from "../assets/5.jpg";
const Subscribe = () => {
  return (
    <div className="w-full  h-[260px] relative ">
      <img
        src={img5}
        className="w-full h-full absolute object-cover top-0 left-0"
        alt=""
      />
      <div className="absolute top-0 left-0 bg-gradient-to-tr h-full w-full from-black/60"></div>
      <div className="md:max-w-2xl max-w-md mx-auto relative  h-full  flex flex-col justify-evenly px-4 py-8">
        <h2 className=" text-white font-bold ">Sign Up for 10% Discount</h2>
        <form className=" my-6 flex justify-between bg-white w-full">
          <input
            type="email"
            required
            placeholder="Enter your Email"
            className="flex-1 focus:outline-none p-4  placeholder:text-gray-600"
          />
          <input
            type="submit"
            className="border-none cursor-pointer  bg-blue-300 px-9 py-4"
            value="Subscribe"
          />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
