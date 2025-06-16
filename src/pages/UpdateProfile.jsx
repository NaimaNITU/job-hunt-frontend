import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Update Profile | JobHunt";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!displayName.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    try {
      await updateUserProfile({ photoURL, displayName });
      setSuccess("Profile updated successfully.");
      // Optionally navigate back after a delay:
      setTimeout(() => navigate("/myProfile"), 1500);
    } catch (err) {
      setError(err.message || "Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Update Information
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
          />

          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />

          {error && <p className="text-red-600">{error}</p>}
          {success && <p className="text-green-600">{success}</p>}

          <button type="submit" className="btn btn-primary mt-4">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
