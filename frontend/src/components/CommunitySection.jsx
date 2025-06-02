import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    name: "ahmed",
    major: "information technology",
    link: "website.com",
  },
  {
    name: "ahmed",
    major: "information technology",
    link: "website.com",
  },
  {
    name: "ahmed",
    major: "information technology",
    link: "website.com",
  },
  {
    name: "ahmed",
    major: "information technology",
    link: "website.com",
  },
  {
    name: "ahmed",
    major: "information technology",
    link: "website.com",
  },
  {
    name: "ahmed",
    major: "information technology",
    link: "website.com",
  },
];

const CommunitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            An online community of world-class researchers
          </h2>
          <div className="grid grid-cols-3 gap-5 mx-10 mt-15">
            {cards.map((card, index) => (
              <span
                key={index}
                className="block max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
              >
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900">
                  {card.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {card.major} <br /> {card.link}
                </p>
              </span>
            ))}
          </div>
          <Link to="/gallery">
            <div className="hidden md:block mt-15">
              <p className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-300 transition">
                Explore more
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
