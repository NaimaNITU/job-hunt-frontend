import React from "react";
import { useLoaderData, useParams } from "react-router";

const CompanyDetails = () => {
  const { id } = useParams();
  const allCompaniesData = useLoaderData();
  const clickedCompany = allCompaniesData.filter((company) => company.id == id);
  console.log(clickedCompany);

  return <div></div>;
};

export default CompanyDetails;
