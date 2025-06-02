import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// {
//   "customerEmail": "user@example.com",
//   "customerName": "string",
//   "customerPass": "stringst",
//   "college": "string",
//   "major": "string"
// }

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerEmail: "",
    customerName: "",
    customerPass: "",
    collage: "",
    major: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.customerPass !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
    // Add backend/API logic here
    fetch("https://localhost:7138/api/Customer/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      // .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error("Error:", err);
        return;
      });

    // navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md mt-36 mb-32">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Sign Up for QuickSite
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* customerName */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="customerName"
              required
              value={formData.customerName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>

          {/* customerEmail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="customerEmail"
              name="customerEmail"
              required
              value={formData.customerEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
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
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="JUST"
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
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Computer science"
            />
          </div>

          {/* customerPass */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              password
            </label>
            <input
              type="password"
              name="customerPass"
              required
              value={formData.customerPass}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
