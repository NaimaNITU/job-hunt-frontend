import React from "react";
import { FaUserCheck, FaClipboardList, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 0,
      icon: <FaUserCheck size={40} className="text-blue-600 mb-4" />,
      title: "Create an Account",
      description:
        "Sign up as a job seeker to start exploring job opportunities from various companies. It’s quick and easy!",
      path: "/register",
    },
    {
      id: 1,
      icon: <FaClipboardList size={40} className="text-blue-600 mb-4" />,
      title: "Browse & Match",
      description:
        "Find job listings that suit your skills. Check job descriptions, required qualifications, and match yourself.",
      path: "/companies",
    },
    {
      id: 2,
      icon: <FaPaperPlane size={40} className="text-blue-600 mb-4" />,
      title: "Apply with Confidence",
      description:
        "Once you're ready, apply directly through the platform. Track your applications easily in your profile.",
      path: "/applyJobs",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          How It Works
        </h2>
        <p className="text-gray-600 mb-12">
          A simple 3-step process to get you hired faster and smarter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => navigate(step.path)} // use step.path here
              className="cursor-pointer bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
