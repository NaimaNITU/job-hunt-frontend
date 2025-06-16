import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../pages/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
