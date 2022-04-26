import React from "react";

const Services = () => {
  return (
    <div className="py-20 bg-slate-50">
      <h2 className="text-[#1A2952] leading-normal sm:text-3xl xsm:text-xl md:text-4xl lg:text-6xl text-center font-bold mb-5">
        Services
      </h2>
      <div className="h-2 w-20 bg-yellow-400 rounded-tl-2xl rounded-br-2xl mx-auto mb-5"></div>

      {/* grid  */}

      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-[#002E5B] text-white mt-6  shadow-lg rounded-lg ">
          <div className="flex-shrink-0">
            <img
              className="cursor-pointer"
              src="https://thefinancialexpress.com.bd/uploads/1516095735.jpg"
              alt=""
            />
          </div>
          <h3 className="text-2xl sm:text-xl  font-semibold  py-4">
            Personal Advice
          </h3>
          <h4 className="text-4xl text-yellow-400 font-bold">$22</h4>
          <p className="text-md   py-4">
            Audit and assurance is all about meticulous data analysis.
            Everything needs to be checked, double checked, and triple checked.
          </p>
          <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
            Book Now
          </button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-[#002E5B] text-white mt-6  shadow-lg rounded-lg ">
          <div className="flex-shrink-0">
            <img
              className="w-full cursor-pointer"
              src="http://prod-upp-image-read.ft.com/10a54e96-1709-11e4-b0d7-00144feabdc0"
              alt=""
            />
          </div>
          <h3 className="text-2xl sm:text-xl  font-semibold  py-4">
            Bonds & Commodities
          </h3>
          <h4 className="text-4xl text-yellow-400 font-bold">$32</h4>
          <p className="text-md   py-4">
            Bonds and commodities are much more stable than stocks and trades.
            We allow our clients to invest in the right bonds & commodities.
          </p>
          <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
            Buy Now
          </button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-[#002E5B] text-white mt-6  shadow-lg rounded-lg ">
          <div className="flex-shrink-0">
            <img
              className="cursor-pointer"
              src="https://blog.hubspot.com/hubfs/strategic-plan.jpg"
              alt=""
            />
          </div>
          <h3 className="text-2xl sm:text-xl  font-semibold  py-4">
            Strategic Planning
          </h3>
          <h4 className="text-4xl text-yellow-400 font-bold">$49</h4>
          <p className="text-md   py-4">
            We work with our clients and do a deep analysis of their business.
            We help prepare possible outcomes to different decisions.
          </p>
          <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
