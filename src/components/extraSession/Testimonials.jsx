import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [userOpinion, setUserOpinion] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setUserOpinion(data));
  });
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {userOpinion.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-600 italic">{t.role}</p>
            <p className="mt-3 text-gray-700">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
