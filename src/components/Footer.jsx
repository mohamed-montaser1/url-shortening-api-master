import React from "react";
import Logo from "../images/logo-white.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";

const data = [
  {
    header: "Features",
    list: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    header: "Resources",
    list: ["Blog", "Developers", "Support"],
  },
  {
    header: "Company",
    list: ["About", "our Team", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="container-p bg-[#232127] min-h-[240px] py-16 flex items-start justify-between max-[924px]:flex-col max-[924px]:items-center">
      <img src={Logo} alt="logo" />

      <div className="cols flex gap-20 max-[924px]:flex-col my-11">
        {data.map(({ header, list }) => (
          <FooterColumn header={header} list={list} />
        ))}
      </div>
      <div>
        <ul className="flex gap-4 items-center">
          <li>
            <img
              src={facebook}
              className="cursor-pointer"
              alt="facebook icon"
            />
          </li>
          <li>
            <img src={twitter} className="cursor-pointer" alt="twitter icon" />
          </li>
          <li>
            <img
              src={pinterest}
              className="cursor-pointer"
              alt="pinterest icon"
            />
          </li>
          <li>
            <img
              src={instagram}
              className="cursor-pointer"
              alt="instagram icon"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}

function FooterColumn({ header, list }) {
  return (
    <div className="footer__col">
      <h3 className="footer__col__header">{header}</h3>
      <ul className="footer__col__list">
        {list.map((el) => (
          <li
            className="footer__col__link"
            key={Math.random() * 1000 + 5 / 2 - 1}
          >
            <a href="#">{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
