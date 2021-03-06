import React from "react";
import { useState } from "react";
import Logo from "../Logo";

const Header: React.FC = () => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function toggle() {
    setMobileMenuOpen((prev) => !prev);
  }
  
  return (
    <header className="relative flex flex-row flex-wrap justify-between px-8 py-6 bg-white md:px-16 md:items-center md:space-x-4">
      <Logo size="small" />
      <button
        className="inline-block w-8 h-8 p-1 text-gray-600 bg-gray-200 focus:outline-none md:hidden"
        onClick={toggle}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <nav
        className={`md:relative top-16 left-0 md:top-0 font-pt-serif z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 ${
          mobileMenuOpen ? "absolute" : ""
        } ${mobileMenuOpen === false ? "hidden" : ""}`}
      >
        <a href="#" className="block py-1 text-highlight hover:underline">
          Home
        </a>
        <a href="#" className="block py-1 text-text-primary hover:underline">
          About us
        </a>
        <a href="#" className="block py-1 text-text-primary hover:underline">
          Services
        </a>
        <a href="#" className="block py-1 text-text-primary hover:underline">
          Blog
        </a>
        <a href="#" className="block py-1 text-text-primary hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
