import React, { use, useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router";
import { AuthContext } from "./../../provider/AuthProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const [error, setError] = useState("");
  const { userSignIn, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code; // Example: "auth/invalid-credential"
        const formattedError = errorCode.split("/")[1]; // "invalid-credential"
        setError(formattedError);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        alert("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const formattedError = errorCode.split("/")[1]; // "invalid-credential"
        setError(formattedError);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 my-10 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Login now!</h1>

      {/* Google sign in First */}
      <div className="px-8">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn btn-outline w-full mb-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign In with Google
        </button>
      </div>

      {/* Divider */}
      <div className="divider px-8 -mb-4">Or continue with</div>

      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <div className="text-left mt-1">
            <NavLink
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </NavLink>
          </div>

          <p className="text-red-600">{error}</p>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>

          <div>
            <h4 className="mt-4 text-left ml-2">
              Don't have an account?{" "}
              <NavLink to="/register" className="hover:underline text-blue-600">
                Register
              </NavLink>
            </h4>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
