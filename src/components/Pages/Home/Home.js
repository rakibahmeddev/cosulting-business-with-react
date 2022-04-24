import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/src/images/homepage-banner/banner2.jpg')] bg-cover bg-top pt-[300px] pb-[200px] h-full">
        <div className="h-4 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl sm:ml-20 md:ml-34 mb-5"></div>
        <div className=" sm:px-20 md:px-20">
          <h2 className="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl font-bold mb-5">
            Revenue Focused Business <br />
            Growth Consulting <br /> Service
          </h2>
          <div>
            <button className="bg-yellow-400 text-[#1A2952] rounded-tl-2xl rounded-br-2xl sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-xl font-bold my-5">
              Grow your Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
