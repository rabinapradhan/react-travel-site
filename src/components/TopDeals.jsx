import React from "react";
import Mustang from "../assets/Mustang.jpg";
import Maldives from "../assets/Maldives.jpg";
import Oslob from "../assets/Oslob.jpg";
import Paris from "../assets/Paris.jpg";
import DealCards from "./DealCards";
const TopDeals = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[1240px] py-16 px-4 mx-auto ">
        <div className="w-20 border-gray-600 inline-block border"></div>
        <span className="pl-3 text-lg text-gray-600">Featured tours</span>
        <h2 className="py-4">Tours at the best price</h2>
        {/*Cards */}

        <div className="grid md:grid-cols-3 gap-4">
          <DealCards
            bg={Mustang}
            title="Upper Mustang , Nepal"
            tag="-20%"
            original={"$1500"}
            discount={"$1000"}
          />
          <DealCards bg={Maldives} title="Maldives" discount={"$1500"} />
          <DealCards
            bg={Oslob}
            title="Oslob, Phillipines"
            original={"$2000"}
            discount={"$1800"}
            tag="-10%"
          />
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
