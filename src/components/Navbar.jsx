import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

import { useState, useEffect } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="lg:bg-transparent select-none bg-[#333] text-white absolute z-10 w-screen h-[80px]">
      <nav className="container h-full mx-auto flex justify-between items-center px-4">
        <div>
          <h1 className="text-4xl font-bold md:text-3xl">Blue Cloud</h1>
        </div>
        <ul className="md:flex cursor-pointer  hidden">
          <li>
            {" "}
            <Link to="/" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="about" smooth={true} offset={-100} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="deals" smooth={true} offset={-100} duration={500}>
              Top Deals
            </Link>
          </li>
          <li>
            <Link to="package" smooth={true} offset={100} duration={500}>
              Package
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} offset={100} duration={500}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={40} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/*hamburger menu */}
        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? <AiOutlineClose size={30} /> : <HiOutlineMenu size={30} />}
        </div>
        {/*mobile menu dropdown */}
        <div
          className={
            nav
              ? "flex flex-col  md:hidden w-screen text-white absolute bg-[#333] justify-start top-[80px] duration-200 left-0 "
              : "absolute  left-[-100%]"
          }
        >
          <ul className="cursor-pointer">
            <li className="border-b ">
              <Link to="about" smooth={true} offset={40} duration={500}>
                About
              </Link>
            </li>

            <li className="border-b ">
              <Link to="deals" smooth={true} offset={40} duration={500}>
                Top Deals
              </Link>
            </li>
            <li className="border-b ">
              <Link to="package" smooth={true} offset={40} duration={500}>
                Package
              </Link>
            </li>

            <li className="border-b ">
              <Link to="gallery" smooth={true} offset={40} duration={500}>
                Gallery
              </Link>
            </li>

            <li className="border-b ">
              <Link to="contact" smooth={true} offset={40} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
