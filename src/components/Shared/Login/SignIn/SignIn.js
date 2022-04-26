import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="bg-slate-100 py-[100px]">
      <div className="flex flex-col w-full  max-w-md  mx-auto px-4 py-5  rounded-lg shadow bg-white dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div>
          <p className="text-2xl text-center font-medium">
            Login to your Account
          </p>
        </div>
        <div className="mt-8">
          <form action="#" autoComplete="off">
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  type="email"
                  id="sign-in-email"
                  required
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent mb-2"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  type="password"
                  id="sign-in-password"
                  required
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent mb-2"
                  placeholder="Your password"
                />
              </div>
            </div>

            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto mt-3">
                <a
                  href="#"
                  className="inline-flex text-base font-normal text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4  bg-blue-700 hover:bg-blue-600 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link
            to="/signup"
            className="inline-flex items-center text-base font-normal text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            Don't have an account?{" "}
            <span
              onClick={navigateToSignUp}
              className="text-blue-700 font-bold ml-2"
            >
              Sign Up
            </span>
          </Link>
        </div>

        {/* OR  */}
        <div className="or flex flex-row justify-center items-center mt-3 mb-1">
          <div
            style={{ height: "1px", width: "100%" }}
            className=" bg-blue-700"
          ></div>
          <p className="mx-4">or</p>
          <div
            style={{ height: "1px", width: "100%" }}
            className=" bg-blue-700"
          ></div>
        </div>

        {/* social sign in  */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignIn;
