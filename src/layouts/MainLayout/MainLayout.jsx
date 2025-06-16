import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="sticky top-2">
        <Navbar />
      </header>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
