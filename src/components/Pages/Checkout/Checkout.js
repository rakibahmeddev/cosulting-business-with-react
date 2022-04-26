import React from "react";

const Checkout = () => {
  return (
    <div className="bg-slate-50 sm:px-44 md:px-56 lg:px-96">
      <div className="col-span-1 lg:col-span-6 py-20">
        <h4 className="text-3xl font-medium text-gray-700 text-center mb-5">
          Checkout information
        </h4>
        <div className="p-10 rounded-md shadow-md bg-white ">
          <div className="mb-6">
            <label className="block mb-3 text-gray-600" for="">
              Full Name
            </label>
            <input
              type="text"
              className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-3 text-gray-600" for="">
              Email Address
            </label>
            <input
              type="text"
              className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-3 text-gray-600" for="">
              Shipping Address
            </label>
            <input
              type="text"
              className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-3 text-gray-600" for="">
              Phone
            </label>
            <input
              type="text"
              className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-3 text-gray-600" for="">
              Name of card
            </label>
            <input
              type="text"
              className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-3 text-gray-600" for="">
              Card number
            </label>
            <input
              type="tel"
              className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
            />
          </div>
          <div className="mb-6 flex flex-wrap -mx-3w-full">
            <div className="w-2/3 px-3">
              <label className="block mb-3 text-gray-600" for="">
                Expiraion date
              </label>
              <div className="flex">
                <select className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mr-6">
                  <option>Month</option>
                </select>
                <select className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest">
                  <option>Year</option>
                </select>
              </div>
            </div>
            <div className="w-1/3 px-3">
              <label className="block mb-3 text-gray-600" for="">
                CVC
              </label>
              <input
                type="tel"
                className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
              />
            </div>
          </div>
          <div className="mb-6 text-right">
            <span className="text-right font-bold">00 USD</span>
          </div>
          <div>
            <button className="w-full text-ceenter px-4 py-3 bg-blue-500 rounded-md shadow-md text-white font-semibold">
              Confirm payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
