import React from "react";
import { BiTime } from "react-icons/bi";
const DealCards = ({ bg, title, tag, original, discount }) => {
  return (
    <div id="deals" className="w-full h-full border shadow-md flex flex-col">
      <div className="w-full h-full relative">
        <img src={bg} alt="/" className="w-full h-full object-cover/center" />
        <span className="absolute top-0 m-2 left-0 text-4xl font-bold  p-2  text-red-600">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <span className="flex  text-gray-600">
          <BiTime size={20} className="mr-2" /> 10 Days Trip
        </span>
        <h4 className="py-3 text-lg font-bold">{title}</h4>
        <h3>
          <span className="text-red-600 mr-2 font-bold">
            <s>{original}</s> {discount}
          </span>
          / Per Person
        </h3>
      </div>
    </div>
  );
};

export default DealCards;
