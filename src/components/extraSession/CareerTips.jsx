import React, { useEffect, useState } from "react";

const CareerTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <section className="py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Career Tips & Resources
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {tips.map((tip, i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{tip.title}</h3>
              <p className="text-gray-600 mt-2">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerTips;
