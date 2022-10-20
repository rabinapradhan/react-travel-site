import React from "react";
import img5 from "../assets/5.jpg";
const Subscribe = () => {
  return (
    <div className="w-screen h-[260px] relative ">
      <img
        src={img5}
        className="w-full h-full absolute object-cover top-0 left-0"
        alt="/"
      />
      <div className="absolute top-0 left-0 bg-gradient-to-tr h-full w-full from-black/60"></div>

      <div className=" md:max-w-lg max-w-xs py-3 mx-auto relative">
        <h2 className="lg:text-5xl text-3xl font-bold text-white ">
          Sign Up for 10% Discount
        </h2>
        <form className="my-6 flex  w-full">
          <input
            className="focus:outline-none p-2 placeholder:text-gray-600"
            type="email"
            required
            placeholder="Enter your Email"
          />
          <button className="p-2 bg-blue-300 border">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
