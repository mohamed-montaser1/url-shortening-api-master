import React, { useEffect, useState } from "react";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";

export default function ShortenLink() {
  const [windowSize, setWindowSize] = useState(window.screen.availWidth);

  useEffect(() => {
    window.onresize = (e) => {
      setWindowSize(e.currentTarget.screen.availWidth);
    };
  });
  return (
    <>
      <div className="container-m min-h-[143px] bg-[#3b3054] -translate-y-[71.5px] rounded-lg relative overflow-hidden z-50">
        <img
          src={windowSize > 652 ? bgShortenDesktop : bgShortenMobile}
          alt="shorten desktop background"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute h-full min-[885px]:items-center max-[884px]:flex-col max-[884px]:py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full px-24 max-[598px]:px-11 max-[436px]:px-6 gap-5 shorten__link__container">
          <input
            type="text"
            className="flex-1 rounded-lg px-4 outline-none h-14"
            placeholder="Shorten a link here..."
          />
          <button className="btn--cyan rounded-md h-14">Shorten It!</button>
        </div>
      </div>
      <div className="results-list container-m flex flex-col gap-3 -translate-y-[34px]">
        {Array.from({ length: 3 }).map((el) => (
          <div className="shorten-result" key={Math.random() * 1000 + 5}>
            <span>https://www.frontendmentor.io</span>
            <div className="result flex items-center gap-5">
              <a
                href="https://rel.ink/k4lKyk"
                className="result-link text-[#2acfcf]"
              >
                https://rel.ink/k4lKyk
              </a>
              <button className="btn--cyan rounded-md">Copy</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
