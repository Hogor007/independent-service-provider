import React from "react";
import { Link } from "react-router-dom";
import fumiz from "../../assets/images/fumizsvg.svg";

const Header = () => {
  return (
    <div className="main flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl md:mb-24">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Ishtiaq Fahim
            <br />
            <span className="text-lg sm:text-xl tracking-wide font-mono font-semibold">
              MC Veteran | Redstoner | Plugin Developer
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Ishtiaq Fahim is a Minecraft Instructor. He teaches about Minecraft Survival, Redstone Engineering, Map Development, Plugin Development etc. He completed his Master on M.Sc. in
            Islamic University of Technology in Dhaka. He have a 11 years Experience in Minecraft Java Edition.
          </p>
        </div>
        <div className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none active:scale-90"
          >
            Know More
          </Link>
        </div>
      </div>
      <div className="md:pt-12 pt-0">
        <img
          src={fumiz}
          className=" w-2/3 md:w-full rounded-lg  mx-auto xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
