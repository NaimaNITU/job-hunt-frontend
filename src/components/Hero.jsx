import React from "react";
import { Link } from "react-router";
// import heroImg from "../assets/images/hero.png";
import { motion } from "framer-motion";
import JobImageGrid from "./JobImageGrid";

const Hero = () => {
  return (
    <section className=" py-16">
      <div className="w-10/12 mx-auto  flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            className="text-4xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformOrigin: "left center" }}
          >
            Discover Your Next{" "}
            <span className="text-blue-600">Career Opportunity</span>
          </motion.h1>
          <p className="text-lg text-gray-600 mb-6">
            Job Hunt helps you explore a wide range of jobs from top companies.
            Find roles that match your skills, review job criteria, and apply
            with confidence.
          </p>
          <Link
            to="/companies"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
          >
            Browse Jobs
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2  flex justify-center">
          <JobImageGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
