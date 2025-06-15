import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const WebsiteBuilder = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    academicField: "",
    bio: "",
    prefernces: "",
    interests: "",
    googleScholar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-200 px-4 py-12 flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
          backgroundColor: "#f0f4ff",
        }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full space-y-8 mt-5 mb-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-700">
              AI Website Builder
            </h1>
            <p className="text-gray-600 mt-2">
              Fill in a few details and let AI build your academic website
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const dataToSend = {
                googleScholar: formData.googleScholar,
                prefernces: formData.prefernces,
                bio: formData.bio,
              };
              navigate("/paymentpage", { state: dataToSend});
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Academic Field*
              </label>
              <input
                type="text"
                name="academicField"
                placeholder="e.g. Computer Science"
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl px-4 py-2 transition"
                value={formData.academicField}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Research Interests*
              </label>
              <textarea
                name="interests"
                placeholder="e.g. Artificial Intelligence, Machine Learning"
                rows="2"
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl px-4 py-2 transition"
                value={formData.interests}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Google Scholar URL*
              </label>
              <textarea
                name="googleScholar"
                placeholder="https://scholar.google.com/..."
                required
                rows="2"
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl px-4 py-2 transition"
                value={formData.publications}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Short Bio
              </label>
              <textarea
                name="bio"
                placeholder="A short professional biography"
                rows="3"
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl px-4 py-2 transition"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Design Discreption
              </label>
              <textarea
                name="prefernces"
                placeholder="write whatever you want  — for example, preferred colors, layout style (modern, classic, minimal), any links that you want"
                rows="3"
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl px-4 py-2 transition"
                value={formData.prefernces}
                onChange={handleChange}
              />
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 hover:cursor-pointer text-white font-semibold px-8 py-3 rounded-2xl shadow-md transition-all duration-300"
              >
                🚀 Generate Website with AI
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;
