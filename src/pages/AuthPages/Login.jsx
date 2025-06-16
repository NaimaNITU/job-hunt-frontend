import React, { use, useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router";
import { AuthContext } from "./../../provider/AuthProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const [error, setError] = useState("");
  const { userSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    const password = form.password.value;

    // console.log(email, password);

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

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5  my-10 mx-auto">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>

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

          <p className="text-red-600">{error}</p>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>

          <div className="mt-3 text-center">
            <p>Or</p>
            <button
              type="button"
              // onClick={handleGoogleLogin}
              className="btn btn-outline mt-2 w-full"
            >
              Sign in with Google
            </button>
          </div>

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
