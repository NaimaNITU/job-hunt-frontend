import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaPhoenixFramework, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        alert("You have Sign Out Successfully");
      })
      .catch((error) => console.error(error));
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 flex items-center"
        >
          <FaPhoenixFramework />
          JobHunt
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
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
              {user.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <FaUserCircle size={12} />
              )}

              <NavLink
                onClick={handleSignOut}
                className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white"
              >
                Sign Out
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
      </div>
    </nav>
  );
};

export default Navbar;
