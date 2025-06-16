import React, { useEffect } from "react";
import { useLoaderData } from "react-router";

const AllJobs = () => {
  const allJobData = useLoaderData();

  useEffect(() => {
    document.title = "All Jobs | JobHunt";
  }, []);
  // Flatten the nested jobs array
  const allJobs = allJobData.flatMap((company) => company.jobs);

  console.log(allJobs); // All job objects in one array

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-4">
        See All Available Jobs Here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
        {allJobs.map((job) => (
          <div key={job.id} className="card bg-base-100 shadow-md p-4">
            <img src={job.bannerImage} alt="" className="rounded h-60" />
            <h2 className="text-xl font-bold mt-2">{job.title}</h2>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-green-600 font-semibold">{job.salary}</p>
            <p className="text-sm mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllJobs;
