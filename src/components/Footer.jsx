import React from "react";
import { MdLocationPin } from "react-icons/md";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full bg-gray-200  text-black">
      <div className="max-w-[1240px] mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 justify-center gap-8 ">
          <div className="w-full flex-1">
            <h3 className="md:text-4xl text-3xl font-bold">About Us</h3>
            <p className="py-4 text-justify">
              Our tour agency is the leading provider of cheap air tickets as
              well as amazing offers for tourists and people who like to explore
              the untraveled world paths. We can create the most unforgettable
              holiday for you, your family, and friends!
            </p>
          </div>
          <div className="w-full flex-1">
            <h3 className="md:text-4xl text-3xl font-bold">
              Contact Information
            </h3>
            <div className="pt-6">
              <span className="flex items-center">
                <MdLocationPin size={20} className="mr-3" /> 2130 Fulton Street
                San Diego, CA 93837-1700 USA
              </span>
            </div>
            <div className="py-4">
              <span className="flex items-center">
                <AiFillPhone size={20} className="mr-3" />
                1-722-4564-678
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <AiFillMail size={20} className="mr-3" s />
                infotravel@gmail.com
              </span>
            </div>
          </div>

          <div className="w-full flex-1  ">
            <h3 className="md:text-4xl text-3xl font-bold">Newsletter</h3>
            <p className="py-6">
              Sign up to our newsletter and be the first to know about the
              latest news, special offers, events, and discounts.
            </p>
            <form className=" bg-white text-black items-center justify-between lg:w-full mx-auto max-w-[680px]  border flex">
              <input
                className="bg-transparent p-2 focus:outline-none flex-1 "
                type="text"
              />

              <div className=" bg-blue-400 text-white text-xl  py-2 px-6">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col mt-8 md:flex-row items-center justify-between">
          <div></div>
          <div>
            <p>&copy; 2022 All Rights Reserved. Privacy Policy</p>
            <div className="flex justify-evenly my-4 ">
              <BsFacebook size={20} />
              <BsInstagram size={20} />
              <AiFillMail size={20} />
              <BsTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
