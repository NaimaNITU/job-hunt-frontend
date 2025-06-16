import React, { useState } from "react";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email sent:
    setMessage("Password reset email sent. Please check your inbox.");
    // Optionally redirect back to login after delay
    setTimeout(() => navigate("/login"), 3000);
  };

  return (
    <div className="max-w-sm  mx-auto mt-20 p-6 shadow-lg rounded bg-white">
      <h2 className="text-2xl mb-4 font-semibold text-center">
        Forgot Password
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full mb-4"
        />
        {message && <p className="text-green-600 mb-2">{message}</p>}
        <button type="submit" className="btn btn-primary w-full">
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
