import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  function handleToggleMenu() {
    setActive((prev) => !prev);
  }
  return (
    <header className="flex items-center py-6 mb-10 container-p">
      <img src={logo} alt="logo" className="mr-16" />
      <div
        className={`nav-collapse flex-1 flex justify-between items-center ${
          active ? "active" : ""
        }`}
      >
        <nav>
          <ul className="flex gap-5">
            <li>
              <a href="#" className="navbar__list__element">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="navbar__list__element">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="navbar__list__element">
                Resources
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 auth__buttons">
          <button className="btn--transparent-bg">Login</button>
          <button className="btn--cyan">Sign Up</button>
        </div>
      </div>
      <button className="block ml-auto" onClick={handleToggleMenu}>
        <FaBars className="text-[#9e9aa7] text-3xl min-[991px]:hidden" />
      </button>
    </header>
  );
}
