import React from "react";

const Hero = () => {
  return (
    <div className="lg:mt-8 lg:py-4">
      <div className="w-full max-w-4xl mx-auto mt-12 py-12">
        <p className="text-center text-primary font-medium">SOLUTIONS</p>
        <div className="py-4 mt-4 space-y-12 mx-auto">
          <h1 className="lg:text-6xl text-4xl font-extrabold text-center text-secondary">
            <span className="text-primary font-bold lg:text-6xl text-4xl lg:mx-0 mx-4">Calendly</span>{" "}
            for the work you do
          </h1>
          <p className="lg:text-2xl text-center mx-auto lg:w-[75%] text-gray">
            Across a range of uses, Calendly helps people and teams build
            efficiency, professionalism, and results into the work they do.
          </p>
          <div className="text-center">
            <button className="bg-primary lg:px-10 px-5 py-3 lg:py-5 rounded-full text-white text-sm font-semibold">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
