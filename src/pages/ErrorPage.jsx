import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center">
      <div className="text-red-600 text-6xl mb-4">
        <FaExclamationTriangle />
      </div>
      <h1 className="text-4xl font-bold text-error">Oops! Page not found</h1>
      <p className="mt-2 text-base-content">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="mt-6">
        <button className="btn btn-error text-white">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
