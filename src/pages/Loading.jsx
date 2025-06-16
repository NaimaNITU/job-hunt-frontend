import React, { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    document.title = "Loading | JobHunt";
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-lg font-medium text-gray-600">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
