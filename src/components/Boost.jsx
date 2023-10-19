import React from "react";
import BgBoostDesktop from "../images/bg-boost-desktop.svg";

export default function Boost() {
  return (
    <div className="bg-[#3b3054] relative">
      <img src={BgBoostDesktop} className="w-full" alt="bg boost desktop" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-center text-white text-4xl font-semibold">
          Boost your links today
        </h2>
        <button className="btn--cyan mx-auto block mt-5 py-4 px-10">
          Get Started
        </button>
      </div>
    </div>
  );
}
