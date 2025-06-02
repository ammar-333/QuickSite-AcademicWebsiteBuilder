import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const WebsiteBuilder = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    academicField: "",
    bio: "",
    interests: "",
    googleScholar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    // TODO: Send formData to your AI builder logic/backend
    console.log("Generating website with:", formData);

    setLoading(true);
    setTimeout(() => {
      navigate("/editwebsite");
    }, 7000);
  };

  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-100 text-center px-4">
          <div className="bg-white px-6 py-4 rounded-2xl shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Building Your Website...
            </h2>
            <div className="bg-gray-100 rounded-xl p-4 text-left font-mono text-sm text-gray-700 h-32 overflow-hidden animate-pulse">
              <p>&gt; Connecting to AI engine...</p>
              <p>&gt; Generating layout structure...</p>
              <p>
                &gt; Writing content<span className="typing-dots ml-1"></span>
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              This may take a few seconds.
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-200 px-4 py-12 flex justify-center items-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full space-y-8 mt-5 mb-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-blue-700">
                AI Website Builder
              </h1>
              <p className="text-gray-600 mt-2">
                Fill in a few details and let AI build your academic website
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl px-4 py-2 transition"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Academic Field
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
                  Research Interests
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
                  Google Scholar URL
                </label>
                <textarea
                  name="googleScholar"
                  placeholder="https://scholar.google.com/..."
                  rows="2"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-xl px-4 py-2 transition"
                  value={formData.publications}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={handleGenerate}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-md transition-all duration-300"
              >
                🚀 Generate Website with AI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteBuilder;
