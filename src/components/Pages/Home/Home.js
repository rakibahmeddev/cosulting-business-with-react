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
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-[#002E5B] text-white mt-6  shadow-lg rounded-lg ">
            <div className="flex-shrink-0">
              <img
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
              Everything needs to be checked, double checked, and triple
              checked.
            </p>
            <button className="bg-yellow-400 text-[#1A2952] rounded sm:px-8 sm:py-2 md:px-8 md:py-2 sm:text-sm md:text-base font-bold  ml-3">
              Book Now
            </button>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-[#002E5B] text-white mt-6  shadow-lg rounded-lg ">
            <div className="flex-shrink-0">
              <img
                className="w-full"
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
    </div>
  );
};

export default Home;
