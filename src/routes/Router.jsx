import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import Company from "../components/company/Company";
import CompanyDetails from "../pages/CompanyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/companyDetails/:id",
        loader: () => fetch("/companyData.json"),
        Component: CompanyDetails,
      },
    ],
  },
]);
