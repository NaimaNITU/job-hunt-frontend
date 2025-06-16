import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
            title={user?.displayName || "No Name Available"}
            className="w-24 h-24 rounded-full border-4 border-primary mb-4"
          />
          <h2 className="text-xl font-semibold text-center">
            {user?.displayName || "No Name Available"}
          </h2>
          <p className="text-base-content">
            {user?.email || "No Email Available"}
          </p>

          <div className="mt-4 text-sm text-center text-gray-500">
            <p>User ID: {user?.uid}</p>
            <p>Account Verified: {user?.emailVerified ? "Yes" : "No"}</p>
          </div>

          <button
            onClick={() => navigate("/update-profile")}
            className="btn btn-primary mt-6"
          >
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
