import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const SignUp = () => {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/login");
  };

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(name, email, password);
    navigate("/");
  };

  return (
    <div className="bg-slate-100 py-[100px]">
      <div className="flex flex-col w-full  max-w-md  mx-auto px-4 py-5  rounded-lg shadow bg-white dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div>
          <p className="text-2xl text-center font-medium">Create an Account</p>
        </div>
        <div className="mt-8">
          <form onSubmit={handleRegister}>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  type="text"
                  name="name"
                  id="sign-in-name"
                  required
                  className=" rounded flex-1 appearance-none border border-gray3400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent mb-2"
                  placeholder="Full name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  name="email"
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
                  name="password"
                  type="password"
                  id="sign-in-password"
                  required
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent mb-2"
                  placeholder="Your password"
                />
              </div>
            </div>

            <div className="flex items-center mb-6 -mt-4">
              <div className="flex mx-auto mt-3">
                <p className="text-orange-700"></p>
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="py-2 px-4  bg-blue-700 hover:bg-blue-600 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link
            to="/login"
            className="inline-flex items-center text-base font-normal text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            Already have an account?{" "}
            <span
              onClick={navigateToSignIn}
              className="text-blue-700 font-bold ml-2"
            >
              Login
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

export default SignUp;
