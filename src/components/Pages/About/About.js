import React from "react";
import person from "../../../images/about/person.jpg";

const About = () => {
  return (
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
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. They live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.{" "}
            <p className="mt-3">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences. A small river named Duden flows
              by their place and supplies it with the necessary regelialia. It
              is a paradisematic country, in which roasted parts of sentences
            </p>
          </p>

          <button className="bg-blue-700 text-white rounded-tl-2xl rounded-br-2xl sm:px-8 sm:py-2 md:px-12 md:py-3 sm:text-sm md:text-base lg:text-xl font-bold my-5">
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
  );
};

export default About;
