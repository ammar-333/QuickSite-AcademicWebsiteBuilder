import React, { useState } from "react";
import profileImg from "../assets/blankProfilePicture.png";

const Account = (props) => {
  const [isEditing, setEdidting] = useState(false);
  const [formData, setFormData] = useState({
    CustomerName: props.info.username,
    CustomerEmail: props.info.email,
    major: props.info.major,
    college:  props.info.college,
    googleScholar: props.info.googleScholar,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEdidting(false);
    // Add backend/API logic here
    const response = await fetch(`/api/Customer/${props.info.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Update failed:", error);
    } else {
      console.log("Update successful:");
    }
  }

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
                {/* Customer Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="CustomerName"
                    required
                    value={formData.CustomerName}
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
                    name="CustomerEmail"
                    required
                    value={formData.CustomerEmail}
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
                    name="college"
                    value={formData.college}
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

                {/* googleScholar */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    google scholar URL
                  </label>
                  <input
                    type="text"
                    name="googleScholar"
                    value={formData.googleScholar}
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
                  {formData.CustomerName}
                </h2>
                <p className="text-gray-500">Email: {formData.CustomerEmail}</p>
                <p className="text-gray-500">Collage: {formData.college}</p>
                <p className="text-gray-500">Major: {formData.major}</p>
                <p className="text-gray-500">
                  googleScholar URL: {formData.googleScholar}
                </p>

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
              <a href="/dashboard" className="text-indigo-600 hover:underline">
                Dashboard url
              </a>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-700">Website</span>
              <a href="#" className="text-indigo-600 hover:underline">
                Website url
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
