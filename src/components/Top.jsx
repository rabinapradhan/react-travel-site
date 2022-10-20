import React from "react";

import { FaArrowCircleUp } from "react-icons/fa";
const Top = () => {
  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={gotoTop}
      title="Scroll To Top"
      className="fixed z-10 cursor-pointer bottom-5 right-10 "
    >
      <FaArrowCircleUp style={{ color: "#00203F" }} size={30} />
    </div>
  );
};

export default Top;
