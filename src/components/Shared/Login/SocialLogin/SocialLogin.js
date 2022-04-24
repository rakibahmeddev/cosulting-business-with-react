import React from "react";
import google from "../../../../images/socialLogin/google.png";
import github from "../../../../images/socialLogin/github.png";

const SocialLogin = () => {
  return (
    <div className="social-login">
      {/* google sign in  */}
      <div className="my-3">
        <button className="border bg-black text-white font-medium rounded-lg flex justify-center items-center d-block mx-auto px-5 py-2">
          <img
            style={{ width: "30px", height: "30px" }}
            src={google}
            alt=""
            className="mr-1"
          />
          <span className="ml-1">Sign In with Google</span>
        </button>
      </div>

      {/* Github login  */}
      <div className="my-3">
        <button className="border bg-black text-white font-medium rounded-lg flex justify-center items-center d-block mx-auto px-5 py-2">
          <img
            style={{ width: "30px", height: "30px" }}
            src={github}
            alt=""
            className="mr-1"
          />
          <span className="ml-1">Sign In with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
