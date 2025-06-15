import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerEmail: "",
    customerName: "",
    customerPass: "",
    college: "",
    major: "",
    googleScholar: null,
  });
  const [errorMessage, setErrorMessage] = useState(null);

  localStorage.setItem('Scholar', formData.googleScholar);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "/api/Customer/Register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const resText = await response.text();

      if (!response.ok) {
        throw new Error(resText);
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: resText,
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      setTimeout(() => {
        navigate('/login')
      }, 1500);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", err.message, "error");
    }
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
              type="email"
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
              name="college"
              value={formData.college}
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
              value={formData.major}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Computer science"
            />
          </div>

          {/* googleScholar */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              google Scholar URL
            </label>
            <input
              type="text"
              name="googleScholar"
              placeholder="https://scholar.google.com/..."
              value={formData.googleScholar}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
