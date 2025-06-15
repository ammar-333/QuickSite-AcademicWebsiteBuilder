import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    name: "Ahmed Tarek",
    major: "Computer Science",
    link: "https://portfolio1.com",
  },
  {
    name: "Lina Khaled",
    major: "Artificial Intelligence",
    link: "https://linaai.dev",
  },
  {
    name: "Omar Zaid",
    major: "Cybersecurity",
    link: "https://omarsecure.tech",
  },
  {
    name: "Sara Younis",
    major: "Software Engineering",
    link: "https://saracode.com",
  },
  {
    name: "Hassan Ali",
    major: "Data Science",
    link: "https://hassanstats.io",
  },
  {
    name: "Fatima Nabil",
    major: "Human-Computer Interaction",
    link: "https://fatima-ui.me",
  },
];

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-200 to-indigo-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            An Online Community of World-Class Researchers
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Discover inspiring academic portfolios from top talent worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {card.name}
              </h3>
              <p className="text-gray-700 mb-3">{card.major}</p>
              <a
                href='#'
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                Visit Portfolio
              </a>
            </div>
          ))}
        </div>

        <Link to="/gallery">
          <div className="mt-12 flex justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">
              Explore More
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;

