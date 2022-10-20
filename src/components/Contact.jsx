import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-screen  h-full my-16">
      <div className="max-w-[1240px] bg-[#00203FFF] h-full mx-auto px-4 py-8">
        <div className="w-20 border border-gray-600 inline-block"></div>
        <span className="pl-3 text-lg text-gray-600">Booking</span>
        <h2 className="text-white lg:text-5xl text-4xl my-4">
          Book a tour now
        </h2>
        <form className="my-8 grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8">
          <div className="flex flex-col">
            <label className="py-4  text-gray-300 text-xl">CheckIn Date</label>
            <input
              type="date"
              className="border p-4 w-full  bg-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-4  text-gray-300 text-xl">
              CheckOut Date*
            </label>
            <input
              className="border p-4 w-full  bg-white focus:outline-none "
              type="date"
              required
            />
          </div>
          <div className="flex flex-col ">
            <label className="py-4  text-gray-300 text-xl">Destination</label>
            <select className="border p-4 bg-white text-black focus:outline-none ">
              <option value="Cebu,Phillipines"> Cebu</option>
              <option value="Everest Camp">Everest Base Camp</option>
              <option value="Boracay">Boracay, Phillipine</option>
              <option value="Malaysia">Malaysia</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="py-4  text-gray-300 text-xl">Name</label>
            <input
              className="border p-4 bg-white focus:outline-none "
              type="text"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="py-4  text-gray-300 text-xl">Phone</label>
            <input
              className="border p-4 bg-white focus:outline-none "
              type="number"
              required
              placeholder="Enter your Phone"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-4  text-gray-300 text-xl">Email</label>
            <input
              className="border p-4 bg-white focus:outline-none "
              type="email"
              required
              placeholder="Enter your Email"
            />
          </div>
          <button className="px-6 py-3 mt-3 text-white  bg-[#f5c02e] uppercase text-lg ">
            Book a tour now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
