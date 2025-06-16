import React, { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router";

const ApplyWithConfidence = () => {
  useEffect(() => {
    document.title = "Apply with Confidence | JobHunt";
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl bg-gray-50 p-10 rounded-lg shadow-md text-center">
        <FaPaperPlane size={50} className="text-blue-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Apply with Confidence
        </h2>
        <p className="text-gray-600 mb-6">
          Once you're ready, apply directly through the platform. Submit your
          applications to jobs that match your skills and interests. You can
          also track the status of each application right from your profile
          dashboard.
        </p>
        <Link
          to="/companies"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Browse Jobs
        </Link>
      </div>
    </div>
  );
};

export default ApplyWithConfidence;
