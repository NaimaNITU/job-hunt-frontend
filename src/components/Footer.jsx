import React from "react";
import { FaPhoenixFramework } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2 flex items-center">
            {" "}
            <FaPhoenixFramework />
            JobHunt
          </h2>
          <p className="text-sm text-gray-400">
            Empowering job seekers and employers with a smooth recruitment
            experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/allJobs" className="hover:text-white">
                All Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="hover:text-white">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="hover:text-white">
                Register
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Email: support@jobhunt.com</li>
            <li>Phone: +880 1234 567 890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()}
        JobHunt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
