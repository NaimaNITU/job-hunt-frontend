import React from "react";
import { Link } from "react-router";
import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className=" py-16">
      <div className="w-10/12 mx-auto  flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Your Next{" "}
            <span className="text-blue-600">Career Opportunity</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Job Track helps you explore a wide range of jobs from top companies.
            Find roles that match your skills, review job criteria, and apply
            with confidence.
          </p>
          <Link
            to="/jobs"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Browse Jobs
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="Job search illustration"
            className="w-full max-w-md md:max-w-lg rounded-4xl shadow-md border-b-6 border-l-6 border-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
