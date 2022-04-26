import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const reloadHomePage = () => {
    navigate("/");
  };
  return (
    <div className="Header bg-[#1A2952] px-12  fixed-top">
      <nav className=" h-24 flex justify-between items-center border-gray-200 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <p
            onClick={reloadHomePage}
            className="text-white sm:text-xl md:text-3xl lg:text-4xl font-bold cursor-pointer"
          >
            Consulting <span className="text-yellow-400">Business</span>
          </p>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                chilpRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                chilpRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row items-center text-white md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
              <Link className="text-xl " to="/">
                Home
              </Link>
              <Link className="text-xl" to="/about">
                About
              </Link>
              <Link className="text-xl" to="/services">
                Services
              </Link>
              <Link className="text-xl" to="/blogs">
                Blogs
              </Link>
              <Link className="text-xl" to="/contact">
                Contact
              </Link>
              <Link
                className="text-xl  bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-12 md:py-2 font-bold  ml-3"
                to="/login"
              >
                Sign In
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
