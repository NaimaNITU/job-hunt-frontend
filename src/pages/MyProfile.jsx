import React, { use, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = use(AuthContext);

  useEffect(() => {
    document.title = "My Profile | JobHunt";
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-primary mb-4"
          />
          <h2 className="text-xl font-semibold text-center">
            {user?.displayName || "No Name Available"}
          </h2>
          <p className="text-base-content">
            {user?.email || "No Email Available"}
          </p>

          {/* Optional: Add more info if available */}
          <div className="mt-4 text-sm text-center text-gray-500">
            <p>User ID: {user?.uid}</p>
            <p>Account Verified: {user?.emailVerified ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
