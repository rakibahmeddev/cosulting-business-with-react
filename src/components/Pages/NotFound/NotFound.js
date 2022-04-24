import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToContact = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-slate-50 dark:bg-gray-800 flex relative z-20 items-center py-[200px]">
      <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
        <div className="flex flex-col">
          <h1 className=" w-full uppercase text-center text-4xl text-[#1A2952] sm:text-5xl dark:text-white font-bold">
            {" "}
            Opps!
            <span className="text-blue-700 mx-3">404</span>| Page Not Found !
          </h1>

          <div className="flex items-center justify-center mt-4 gap-5">
            <button
              onClick={navigateToHome}
              className="bg-blue-700 text-white rounded-tl-2xl rounded-br-2xl sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-base lg:text-xl font-bold my-5"
            >
              Home
            </button>
            <button
              onClick={navigateToContact}
              className="bg-yellow-400 text-[#1A2952] rounded-tl-2xl rounded-br-2xl sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-base lg:text-xl font-bold my-5"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
