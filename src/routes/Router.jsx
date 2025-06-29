import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import Company from "../components/company/Company";
import CompanyDetails from "../pages/CompanyDetails";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import MyProfile from "../pages/MyProfile";
import AllJobs from "../pages/AllJobs";
import ApplyWithConfidence from "../pages/ApplyWithConfidence";
import ForgotPassword from "../pages/AuthPages/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "/companies",
        Component: Company,
      },
      {
        path: "/companyDetails/:id",
        loader: () => fetch("/companyData.json"),
        element: (
          <PrivateRoute>
            <CompanyDetails></CompanyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            {" "}
            <MyProfile></MyProfile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        Component: UpdateProfile,
      },
      {
        path: "/allJobs",
        loader: () => fetch("/companyData.json"),
        Component: AllJobs,
      },
      {
        path: "/applyJobs",
        element: (
          <PrivateRoute>
            {" "}
            <ApplyWithConfidence></ApplyWithConfidence>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
