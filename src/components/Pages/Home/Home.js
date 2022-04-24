import React from "react";
import { useNavigate } from "react-router-dom";
import person from "../../../images/about/person.jpg";

const Home = () => {
  const navigate = useNavigate();

  const navigateToServices = () => {
    navigate("/services");
  };
  const navigateToContact = () => {
    navigate("/contact");
  };
  const navigateToAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      {/* banner area  */}
      <div className="bg-[url('/src/images/homepage-banner/banner2.jpg')] bg-cover bg-top pt-[200px]  h-full">
        <div className="h-3 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl sm:ml-20 md:ml-34 mb-5"></div>
        <div className=" sm:px-20 md:px-20 pb-[200px]">
          <h2 className="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl font-bold mb-5">
            Revenue Focused Business <br />
            Growth Consulting <br /> Service
          </h2>
          <div>
            <button
              onClick={navigateToServices}
              className="bg-blue-700 text-white rounded-tl-2xl rounded-br-2xl sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-base lg:text-xl font-bold my-5"
            >
              Grow your Business
            </button>
          </div>
        </div>
        {/* banner bottom  */}
        <div className="md:w-[800px] lg:w-[1000px] py-8 bg-blue-700 rounded-tl-2xl rounded-tr-2xl mx-auto px-10 flex justify-center items-center">
          <p className="md:text-xl lg:text-2xl mr-3 text-white font-bold">
            Looking for a First-Class Business Plan Consultant?
          </p>
          <button
            onClick={navigateToContact}
            className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-base lg:text-xl font-bold  ml-3"
          >
            Contact
          </button>
        </div>
      </div>

      {/* About  */}

      <div className="relative bg-white dark:bg-gray-800 sm:px-20 md:px-20 p-4 my-20">
        <h2 className="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl text-center font-bold mb-5">
          About
        </h2>
        <div className="h-2 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl mx-auto mb-5"></div>
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center">
          <div className="lg:col-start-2 md:pl-20 sm:text-center sm:mt-0  sm:ml-0 md:ml-[-50px]">
            <h4 className="text-4xl leading-8 font-extrabold  dark:text-white tracking-tight sm:leading-9 ">
              Unique Business Idea
            </h4>
            <p className="text-base my-5 leading-normal">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. They live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean.{" "}
              <p className="mt-3">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences. A small river named Duden
                flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted
                parts of sentences
              </p>
            </p>

            <button
              onClick={navigateToAbout}
              className="bg-blue-700 text-white rounded-tl-2xl rounded-br-2xl sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-base lg:text-xl font-bold my-5"
            >
              To know more
            </button>
          </div>
          <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <img
              src={person}
              style={{ width: "50%" }}
              alt="illustration"
              className="relative mx-auto shadow-lg  rounded w-auto"
            />
          </div>
        </div>
      </div>

      {/* services area  */}
      <div className="py-20 bg-slate-50">
        <h2 className="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl text-center font-bold mb-5">
          Services
        </h2>
        <div className="h-2 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl mx-auto mb-5"></div>

        {/* grid  */}

        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-blue-700 text-white mt-6  shadow-lg rounded-lg ">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <svg
                  width="20"
                  height="20"
                  color="black"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl  font-semibold  py-4">
              Personal Advice
            </h3>
            <p className="text-md   py-4">
              Audit and assurance is all about meticulous data analysis.
              Everything needs to be checked, double checked, and triple
              checked.
            </p>
            <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
              Learn more
            </button>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-blue-700 text-white mt-6  shadow-lg rounded-lg ">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  color="black"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl  font-semibold  py-4">
              Bonds & Commodities
            </h3>
            <p className="text-md   py-4">
              Bonds and commodities are much more stable than stocks and trades.
              We allow our clients to invest in the right bonds & commodities.
            </p>
            <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
              Learn more
            </button>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-blue-700 text-white mt-6  shadow-lg rounded-lg ">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  color="black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl  font-semibold  py-4">
              Strategic Planning
            </h3>
            <p className="text-md   py-4">
              We work with our clients and do a deep analysis of their business.
              We help prepare possible outcomes to different decisions.
            </p>
            <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
