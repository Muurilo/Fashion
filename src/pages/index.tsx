import * as React from "react";
import { useState } from "react";

//@ts-ignore
import FeaturedImg from "../images/featured.webp"

const IndexPage = () => {
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function toggle() {
    setMobileMenuOpen((prev) => !prev);
  }

  return (
    <>
      <header className="relative flex flex-row flex-wrap justify-between px-8 py-6 bg-white md:px-16 md:items-center md:space-x-4">
        <a href="#" className="relative block">
          <div className="absolute z-0 w-full h-2 opacity-30 bg-highlight bottom-1" />
          <h1 className="relative z-10 text-2xl font-bold uppercase font-pt-serif">
            Fashion
          </h1>
        </a>
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
      <div className="relative flex flex-col items-center justify-center w-screen text-center h-80 md:h-1/2">
        <img
          src={FeaturedImg}
          className="object-cover w-full h-full"
          alt=""
        />
        <div className="absolute flex flex-col items-center content-center w-1/2 px-5 text-center md:bottom-0 lg:w-1/3 md:text-left md:items-start md:left-0 md:mx-44 md:mb-16">
          <p className="text-white uppercase font-pt-sans">Vehicle</p>
          <h1 className="text-2xl font-bold text-white md:text-4xl font-pt-serif md:break-words">
            One of Saturn’s largest rings may be newer than anyone
          </h1>
          <div className="flex flex-row mx-1 space-x-6 text-white font-pt-serif">
            <p>June 6, 2019</p>
            <p>By Rickie Baroch</p>
            <p>4 comments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
