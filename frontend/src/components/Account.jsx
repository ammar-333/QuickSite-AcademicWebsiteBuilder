import React, { useState } from "react";
import profileImg from "../assets/blankProfilePicture.png";

const Account = () => {
  const [isEditing, setEdidting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "ahmed",
    email: "ahmed@gmail.com",
    collage: "JUST",
    major: "CS",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdidting(false)
    console.log("Signing up with:", formData);
    // Add backend/API logic here
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mt-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={profileImg}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600 shadow"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Collage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Collage
                  </label>
                  <input
                    type="text"
                    name="collage"
                    value={formData.collage}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Major */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Major
                  </label>
                  <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-42 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Edit Account
                </button>
              </form>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {formData.fullName}
                </h2>
                <p className="text-gray-500">Email: {formData.email}</p>
                <p className="text-gray-500">Collage: {formData.collage}</p>
                <p className="text-gray-500">Major: {formData.major}</p>

                <button
                  onClick={() => {
                    setEdidting(true);
                  }}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* More Settings or Info */}
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Account Settings
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Dashboard</span>
              <a
                href="/dashboard"
                className="text-indigo-600 hover:underline"
              >
                Dashboard url
              </a>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Website</span>
              <a href="#" className="text-indigo-600 hover:underline">Website url</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
