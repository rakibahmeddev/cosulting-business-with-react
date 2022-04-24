import React from "react";

const Home = () => {
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
            <button className="bg-blue-700 text-white rounded-tl-2xl rounded-br-2xl sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-xl font-bold my-5">
              Grow your Business
            </button>
          </div>
        </div>
        {/* banner bottom  */}
        <div className="w-[1000px] py-8 bg-blue-700 rounded-tl-2xl rounded-tr-2xl mx-auto px-10 flex justify-center items-center">
          <p className="text-2xl mr-3 text-white font-bold">
            Looking for a First-Class Business Plan Consultant?
          </p>
          <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-xl font-bold  ml-3">
            Grow your Business
          </button>
        </div>
      </div>

      {/* services area  */}
      <div className="my-20">
        <h2 className="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl text-center font-bold mb-5">
          Services
        </h2>
        <div className="h-2 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl mx-auto mb-5"></div>

        {/* grid  */}

        <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-blue-700 text-white mt-6  shadow-lg rounded-lg ">
            <div class="flex-shrink-0">
              <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl sm:text-xl  font-semibold  py-4">
              Website Design
            </h3>
            <p class="text-md   py-4">
              Encompassing today’s website design technology to integrated and
              build solutions relevant to your business.
            </p>
            <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
              Learn more
            </button>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-blue-700 text-white mt-6  shadow-lg rounded-lg ">
            <div class="flex-shrink-0">
              <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl sm:text-xl  font-semibold  py-4">
              Website Design
            </h3>
            <p class="text-md   py-4">
              Encompassing today’s website design technology to integrated and
              build solutions relevant to your business.
            </p>
            <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
              Learn more
            </button>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-blue-700 text-white mt-6  shadow-lg rounded-lg ">
            <div class="flex-shrink-0">
              <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl sm:text-xl  font-semibold  py-4">
              Website Design
            </h3>
            <p class="text-md   py-4">
              Encompassing today’s website design technology to integrated and
              build solutions relevant to your business.
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
