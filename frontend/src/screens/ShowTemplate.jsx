import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web7.png";

import Web1 from "../templates/Web1";
import Web2 from "../templates/Web2";
import Web3 from "../templates/Web3";
import Web4 from "../templates/Web4";
import Web5 from "../templates/Web5";
import Web6 from "../templates/Web6";

const themes = [
  {
    name: "Albert Einstein",
    role: "Physicist",
    university: "University of Zurich",
    image: `${web1}`,
  },
  {
    name: "Jane Jacobs",
    role: "Urban Theorist",
    university: "Columbia University",
    image: `${web2}`,
  },
  {
    name: "Alan Turing",
    role: "Computer Scientist",
    university: "Princeton University",
    image: `${web3}`,
  },
  {
    name: "Albert Einstein",
    role: "Physicist",
    university: "University of Zurich",
    image: `${web4}`,
  },
  {
    name: "Jane Jacobs",
    role: "Urban Theorist",
    university: "Columbia University",
    image: `${web5}`,
  },
  {
    name: "Alan Turing",
    role: "Computer Scientist",
    university: "Princeton University",
    image: `${web6}`,
  },
];

const renderCase = (num) => {
  switch (num) {
    case 1:
      return <Web1 />;
    case 2:
      return <Web2 />;
    case 3:
      return <Web3 />;
    case 4:
      return <Web4 />;
    case 5:
      return <Web5 />;
    case 6:
      return <Web6 />;
  }
};

const ShowTemplate = () => {
  const [Edit, setEdit] = useState(false);
  const [website, setWebsite] = useState(0);
  const navigate = useNavigate();
  const googleScholar = localStorage.getItem("Scholar");
  const token = localStorage.getItem("token");

  const handlebtn = async () => {
    if (website == 0) {
      Swal.fire({
        title: "error",
        text: "You have to select a Template",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
        const res1 = await fetch(
        `/api/Customer/scholar-json-url?scholarUrl=${encodeURIComponent(
          googleScholar
        )}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/editwebsite");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <nav className="h-13 w-full bg-white fixed z-10 text-amber-300 border-b-2  border-b-gray-400">
        <Link to={"/dashboard"}>
          <p className="font-extrabold text-2xl text-black m-2 ml-10 hover:cursor-pointer text-left">
            <span className="text-blue-800">Quick</span>Site
          </p>
        </Link>
      </nav>
      {/* Sidebar */}
      <aside className="w-1/4 bg-white border-r border-gray-200 shadow-lg mt-12 min-h-screen flex flex-col overflow-y-auto pb-20">
        <div className="p-8 border-b bg-gradient-to-r from-purple-400  to-indigo-400 border-gray-200 rounded-b-2xl shadow-lg">
          <div className="text-center">
            <p className="font-extrabold text-4xl text-white drop-shadow-sm mb-6 animate-fade-in">
              🎨 Design Wiz
            </p>
            <button
              onClick={handlebtn}
              className="mx-auto block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              Apply Design to Existing Site
            </button>
            <p className="text-white font-extrabold text-3xl mt-10 tracking-wide">
              ✨ Themes
            </p>
          </div>
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
                  onClick={() => setWebsite(index + 1)}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:hover:scale-[1.03] transition-all"
                >
                  Set as theme
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Preview Section */}
      <main className="flex-1 overflow-y-auto bg-gray-300 mt-13 mb-0">
        {renderCase(website)}
      </main>
    </div>
  );
};

export default ShowTemplate;
