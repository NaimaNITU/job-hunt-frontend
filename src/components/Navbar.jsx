// import React from "react";
// import { NavLink, useNavigate } from "react-router";
// import { FaSignOutAlt } from "react-icons/fa";
// import AuthHook from "../../hooks/AuthHook";

// const Navbar = () => {
//   const { user, logout } = AuthHook();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate("/signin");
//   };

//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//       {/* Logo */}
//       <NavLink to="/" className="text-2xl font-bold text-blue-600">
//         JobConnect
//       </NavLink>

//       {/* Navigation Links */}
//       <div className="flex items-center space-x-4">
//         <NavLink to="/" className="text-gray-700 hover:text-blue-600">
//           Home
//         </NavLink>
//         <NavLink to="/jobs" className="text-gray-700 hover:text-blue-600">
//           All Jobs
//         </NavLink>

//         {/* Conditional - If user is not logged in */}
//         {!user && (
//           <>
//             <NavLink
//               to="/signin"
//               className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               Login
//             </NavLink>
//             <NavLink
//               to="/register"
//               className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
//             >
//               Register
//             </NavLink>
//           </>
//         )}

//         {/* Conditional - If user is logged in */}
//         {user && (
//           <>
//             <img
//               src={user.photoURL || "/default-user.png"}
//               alt="Profile"
//               onClick={() => navigate("/profile")}
//               className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-600"
//               title="My Profile"
//             />
//             <button
//               onClick={handleLogout}
//               className="flex items-center text-red-600 hover:text-red-800"
//               title="Logout"
//             >
//               <FaSignOutAlt className="mr-1" />
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>

        {/* Nav Links */}
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
