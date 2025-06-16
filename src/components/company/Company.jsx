import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Company = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    document.title = "Top Hiring Companies | JobHunt";
    fetch("/companyData.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Top Hiring Companies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {companies.map((company) => (
          <Link
            key={company.id}
            to={`/companyDetails/${company.id}`}
            className="flex flex-col items-center justify-center p-4 border bg-white rounded-xl hover:shadow-lg hover:border-blue-600 transition-all duration-300"
          >
            <div className="w-28 h-28 flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                title={company.name}
                className="max-h-24 object-contain"
              />
            </div>
            <p className="mt-3 text-center font-medium text-gray-700">
              {company.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Company;
