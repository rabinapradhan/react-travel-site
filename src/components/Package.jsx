import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import { packageData } from "./data";

const Package = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="package" className="w-full">
      <div className="max-w-[1240px]  mx-auto py-16 px-4">
        <div className="w-20 border-gray-600 inline-block border"></div>
        <span className="pl-3 text-lg text-gray-600">Destinations</span>
        <h2 className="py-4 ">Popular Tour Package</h2>
        <Slider {...settings}>
          {packageData.map((item) => (
            <div
              key={item.id}
              className="card w-[450px] px-2 pt-8  h-[450px]  overflow-hidden"
            >
              {/*Cards */}
              <div className="border w-full h-full flex shadow-md  flex-col rounded-md">
                <div className="card-top w-full  relative ">
                  <img
                    className="w-full  h-[240px] rounded-md rounded-b-none object-cover"
                    src={item.linkImg}
                    alt={item.title}
                  />
                  <div className="absolute top-0 left-0 w-[50px] m-2 h-[50px] flex justify-center items-center rounded-full bg-red-400">
                    <span>{item.tag}</span>
                  </div>
                </div>
                <div className="card-body w-full h-full flex flex-col  px-4 py-8">
                  <h3 className="font-bold text-xl tracking-wide">
                    {item.title}
                  </h3>
                  <div
                    style={{ color: "#FFC107" }}
                    className="flex py-2 max-w-[100px]  justify-between"
                  >
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <span className="text-lg">{item.days}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Package;
