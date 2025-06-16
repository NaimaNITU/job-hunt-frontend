import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Company from "../components/company/Company";
import Testimonials from "../components/extraSession/Testimonials";
import CareerTips from "../components/extraSession/CareerTips";

const Home = () => {
  useEffect(() => {
    document.title = "Home | JobHunt";
  }, []);

  return (
    <>
      <Hero />
      <HowItWorks />
      <Company />
      <Testimonials />
      <CareerTips />
    </>
  );
};

export default Home;
