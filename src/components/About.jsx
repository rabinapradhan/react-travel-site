import React from "react";
import santorini from "../assets/santorini.jpg";
import santorini2 from "../assets/santorini2.jpg";
import santorini3 from "../assets/santorini3.jpg";
const About = () => {
  return (
    <div id="about" className="py-16  bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid px-4 grid-cols-1 lg:grid-cols-3">
        <div className="lg:w-full  md:max-w-md max-w-xs mx-auto">
          <h2>Explore all the beautiful places of the world with us.</h2>
          <p className="py-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi
            neque fuga quis impedit ab, modi debitis soluta voluptates corporis
            vitae reprehenderit deserunt omnis tenetur magni cupiditate maxime
            non repellat autem? Provident, sunt, libero impedit aspernatur
            voluptatum quidem quis doloremque, ut deleniti optio soluta. Sequi
          </p>
          <button className="mb-6 btn">
            <a href="/">Read More</a>
          </button>
        </div>
        <div className="relative w-[300px] h-[300px] md:w-[500px] lg:col-span-2 mx-auto md:h-[500px]">
          <img src={santorini} alt="/" className="w-full h-full object-cover" />

          <div className="md:w-[300px] w-[180px] h-auto  absolute left-[-20%] top-0">
            <img
              src={santorini2}
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-[300px]  w-[180px] h-auto  absolute bottom-0 right-[-20%]">
            <img src={santorini3} alt="/" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
