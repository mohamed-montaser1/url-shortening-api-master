import React, { useEffect, useState } from "react";
import BgBoostDesktop from "../images/bg-boost-desktop.svg";
import BgBoostMobile from "../images/bg-boost-mobile.svg";

export default function Boost() {
  const [windowSize, setWindowSize] = useState(window.screen.availWidth);

  useEffect(() => {
    window.onresize = (e) => {
      setWindowSize(e.currentTarget.screen.availWidth);
    };
  });
  return (
    <div className="bg-[#3b3054] relative min-h-[300px]">
      <img
        src={windowSize > 652 ? BgBoostDesktop : BgBoostMobile}
        className="w-full h-full inset-0 absolute"
        alt="bg boost desktop"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full container-p">
        <h2 className="text-center text-white text-4xl font-semibold w-full">
          Boost your links today
        </h2>
        <button className="btn--cyan mx-auto block mt-5 py-4 px-10">
          Get Started
        </button>
      </div>
    </div>
  );
}
