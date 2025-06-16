import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CompanyDetails = () => {
  const { id } = useParams();
  const allCompaniesData = useLoaderData();

  const company = allCompaniesData.find((c) => c.id === id);
  const [selectedJob, setSelectedJob] = useState(null);

  if (!company) return <p className="text-center">Company not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Company Details</h1>
      {/* Company Info */}
      <div className="bg-white shadow rounded-lg p-6 mb-10">
        <div className="flex items-center gap-4 mb-4">
          <img src={company.logo} alt={company.name} className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-bold">{company.name}</h2>
            <p className="text-sm text-gray-600">
              {company.industry} — {company.location}
            </p>
          </div>
        </div>
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Visit Website
        </a>
      </div>

      {/* Job List */}
      <h3 className="text-xl font-semibold mb-4">Available Jobs</h3>
      <div className="grid gap-4">
        {company.jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 border rounded-lg bg-white shadow flex flex-col gap-2"
          >
            <h4 className="text-lg font-bold">{job.title}</h4>
            <p>
              <span className="font-semibold">Type:</span> {job.jobType}
            </p>
            <p>
              <span className="font-semibold">Salary:</span> {job.salary}
            </p>
            <button
              onClick={() => setSelectedJob(job)}
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 w-fit"
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {/* Job Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={selectedJob.bannerImage}
              alt={selectedJob.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="mb-2">
              <strong>Type:</strong> {selectedJob.jobType}
            </p>
            <p className="mb-2">
              <strong>Salary:</strong> {selectedJob.salary}
            </p>
            <p className="mb-4">
              <strong>Description:</strong> {selectedJob.description}
            </p>
            <p className="font-semibold mb-1">Requirements:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {selectedJob.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Apply
              </a>
              <button
                onClick={() => setSelectedJob(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
