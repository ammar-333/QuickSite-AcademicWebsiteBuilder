import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import websiteTemplate from "../assets/websiteTemplate.png";

const themes = [
  {
    name: "Albert Einstein",
    role: "Physicist",
    university: "University of Zurich",
    image: `${websiteTemplate}`,
  },
  {
    name: "Jane Jacobs",
    role: "Urban Theorist",
    university: "Columbia University",
    image: `${websiteTemplate}`,
  },
  {
    name: "Alan Turing",
    role: "Computer Scientist",
    university: "Princeton University",
    image: `${websiteTemplate}`,
  },
  {
    name: "Albert Einstein",
    role: "Physicist",
    university: "University of Zurich",
    image: `${websiteTemplate}`,
  },
  {
    name: "Jane Jacobs",
    role: "Urban Theorist",
    university: "Columbia University",
    image: `${websiteTemplate}`,
  },
  {
    name: "Alan Turing",
    role: "Computer Scientist",
    university: "Princeton University",
    image: `${websiteTemplate}`,
  },
  {
    name: "Albert Einstein",
    role: "Physicist",
    university: "University of Zurich",
    image: `${websiteTemplate}`,
  },
  {
    name: "Jane Jacobs",
    role: "Urban Theorist",
    university: "Columbia University",
    image: `${websiteTemplate}`,
  },
  {
    name: "Alan Turing",
    role: "Computer Scientist",
    university: "Princeton University",
    image: `${websiteTemplate}`,
  },
];

const ShowTemplate = () => {
  const [Edit, setEdit] = useState(false);
  const [website, setWebsite] = useState();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-50">
      <nav className="h-13 w-full bg-gray-400 fixed z-10 text-amber-300">
        <Link to={"/template"}>
          <p className="font-extrabold text-2xl text-black m-2 ml-10 hover:cursor-pointer">
            <span className="text-blue-800">Quick</span>Site
          </p>
        </Link>
      </nav>
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 shadow-lg mt-12 min-h-screen flex flex-col overflow-y-auto pb-20">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-200">
          <p className="font-extrabold text-3xl text-gray-800 mb-4">
            🎨 Design Wiz
          </p>
          <button
            onClick={() => navigate("/editwebsite")}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-xl shadow hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 mb-6"
          >
            Apply design to existing site
          </button>
          <p className="font-semibold text-lg text-gray-700">Themes</p>
          <hr className="mt-2 border-gray-300" />
        </div>

        {/* Theme List Section */}
        <div className="p-4 space-y-8">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md transition-transform hover:scale-[1.02] mt-10"
            >
              <div className="relative overflow-hidden rounded-t-xl mt-5">
                <img
                  src={theme.image}
                  alt={`${theme.name} Template`}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col items-start">
                <p className="font-semibold text-lg text-gray-800 mb-2">
                  {theme.name}
                </p>
                <button
                  onClick={() => setWebsite(theme.image)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all"
                >
                  Set as theme
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Preview Section */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-300 mt-10">
        <img src={website} />
      </main>
    </div>
  );
};

export default ShowTemplate;
