import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import {
  FaPhoenixFramework,
  FaSignOutAlt,
  FaUserAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        alert("You have Sign Out Successfully");
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 flex items-center"
        >
          <FaPhoenixFramework />
          <span className="ml-2">JobHunt</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allJobs"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }
          >
            All Jobs
          </NavLink>
          <NavLink
            to="/companies"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }
          >
            Companies
          </NavLink>

          {/* Auth Links */}
          {user ? (
            <>
              <Link to="/myProfile">
                {user.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt="User"
                  />
                ) : (
                  <FaUserAlt className="w-9 h-9 text-gray-600" />
                )}
              </Link>

              <NavLink
                onClick={handleSignOut}
                className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white cursor-pointer"
              >
                Log Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-blue-600 font-semibold" : "text-gray-700") +
              " block py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allJobs"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-blue-600 font-semibold" : "text-gray-700") +
              " block py-2"
            }
          >
            All Jobs
          </NavLink>
          <NavLink
            to="/companies"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-blue-600 font-semibold" : "text-gray-700") +
              " block py-2"
            }
          >
            Companies
          </NavLink>

          {user ? (
            <>
              <Link
                to="/myProfile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2"
              >
                {user.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt="User"
                  />
                ) : (
                  <FaUserAlt className="w-9 h-9 text-gray-600" />
                )}
                <span>My Profile</span>
              </Link>

              <button
                onClick={() => {
                  handleSignOut();
                  setIsMobileMenuOpen(false);
                }}
                className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white w-full text-left"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 block text-center mb-2"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white block text-center"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
