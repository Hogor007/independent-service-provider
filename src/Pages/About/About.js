import React from "react";
import sr from "../../assets/images/sr.png";

const About = () => {
  return (
    <div className="p-4 w-full md:w-2/3 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 container mx-auto">
      <img src={sr} className="mx-auto my-4 rounded-xl" alt="" />
      <h1 className="text-center text-4xl font-serif">
        <span className="text-3xl font-sans font-light">Created by : </span>{" "}
        Ashraful Islam
      </h1>
      <p className="md:w-2/4 mx-auto mt-8 font-sans">
        I'm here to work as a Web Developer. My goal for the following three months is to finish the course and apply for internships and jobs. I'm ready to put in the effort!
      </p>
    </div>
  );
};

export default About;
