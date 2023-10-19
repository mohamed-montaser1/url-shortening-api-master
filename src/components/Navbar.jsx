import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <header className="flex items-center py-6 px-28 mb-10">
      <img src={logo} alt="logo" className="mr-16" />
      <div className="nav-collapse flex-1 flex justify-between items-center">
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
        <div className="flex gap-5">
          <button className="btn--transparent-bg">Login</button>
          <button className="btn--cyan">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
