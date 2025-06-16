import React, { useEffect, useState } from "react";
import { use } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { userRegistration, updateUserProfile, setUser, googleSignIn } =
    use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register | JobHunt";
  }, []);

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        alert("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const formattedError = errorCode.split("/")[1]; // "invalid-credential"
        alert(formattedError);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    if (name === "") {
      setNameError("Name is required");
      return;
    } else if (name.length < 5) {
      setNameError("Name must be at least 5 characters");
      return;
    } else {
      setNameError("");
    }

    const email = form.email.value;
    if (email === "") {
      setEmailError("Email is required");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.(com)$/.test(email)) {
      setEmailError("Please enter a valid email with '@' and ending in '.com'");
      return;
    } else {
      setEmailError("");
    }

    const photoURL = form.photoURL.value;
    if (photoURL === "") {
      setPhotoError("Photo is required");
      return;
    } else {
      setPhotoError("");
    }

    const password = form.password.value;
    if (password === "") {
      setPasswordError("Password is required");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }

    userRegistration(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            alert("Registration Successfully");
            navigate(location.state || "/");
          })
          .catch((error) => {
            // console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-10 my-6 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
      {/* Google Register First */}
      <div className="px-8">
        <button
          onClick={handleGoogleSignUp}
          type="button"
          className="btn btn-outline w-full mb-4"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
      </div>
      {/* Divider */}
      {/* <div className="divider px-8">Or continue with</div>
      {/* Registration Form */}
      <form onSubmit={handleRegister} className="card-body pt-0">
        <fieldset>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Enter your name"
            required
          />
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

          <label className="label mt-4">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <label className="label mt-4">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            className="input input-bordered w-full"
            placeholder="Link to your photo"
          />
          {photoError && <p className="text-red-500 text-sm">{photoError}</p>}

          <label className="label mt-4">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
            placeholder="Create a password"
            required
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}

          <button type="submit" className="btn btn-neutral mt-6 w-full">
            Register
          </button>

          <h4 className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <NavLink to="/login" className="hover:underline text-blue-600">
              Login
            </NavLink>
          </h4>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
