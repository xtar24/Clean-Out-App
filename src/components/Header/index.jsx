import { useState } from "react";
import { NavLink } from "react-router-dom";
import Brand from "../Brand/index";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-100 text-green fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 h-16">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Brand />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-green-700 focus:outline-none bg-green-100 p-2 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 fixed md:static top-0 left-0 w-3/4 md:w-auto bg-yellow-200 md:bg-transparent h-screen md:h-auto p-5 md:p-0 z-20 transition-transform`}
        >
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <NavLink
                to={"/"}
                className="hover:underline text-blue-950 text-sm block px-2 py-1 md:px-4"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="hover:underline text-sm block px-2 py-1 md:px-4"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"#"}
                className="hover:underline text-sm block px-2 py-1 md:px-4"
              >
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="hover:underline text-sm block px-2 py-1 md:px-4"
              >
                HELP CENTER
              </NavLink>
            </li>
          </ul>

          {/* Login/Register Button */}
          <NavLink
            to={"#"}
            className="bg-green-700 text-white hover:bg-blue-950 px-4 py-2 rounded-md transition-all text-sm mt-4 md:mt-0"
          >
            LOGIN/REGISTER
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
