import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/blankProfilePicture.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white text-black shadow-md z-50">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex justify-between items-center container mx-auto md:h-18 h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-gray-700 text-2xl font-bold">
            <Link to="/">
              <span className="text-blue-600">Quick</span>Site
            </Link>
          </div>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/">
              <p className="text-gray-700 hover:underline hover:decoration-indigo-600 hover:decoration-2 transition font-medium">
                Home
              </p>{" "}
            </Link>
            <a href="#features">
              <p className="text-gray-700 hover:underline hover:decoration-indigo-600 hover:decoration-2 transition font-medium">
                Features
              </p>{" "}
            </a>
            <Link to="/gallery">
              <p className="text-gray-700 hover:underline hover:decoration-indigo-600 hover:decoration-2 transition font-medium">
                community
              </p>{" "}
            </Link>
            <Link to="/about">
              <p className="text-gray-700 hover:underline hover:decoration-indigo-600 hover:decoration-2 transition font-medium">
                about us
              </p>{" "}
            </Link>
          </div>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Get Started Button */}
          <div className="flex justify-between  space-x-6">
            <Link to="/login">
              <p className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-300 transition">
                Get Started
              </p>
            </Link>
            <div className="relative" ref={dropdownRef}>
              {/* Profile Image Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none flex"
              >
                <img
                  src={profileImg}
                  alt="ProfileImg"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <ChevronDownIcon className="w-4 h-4 mt-3 hover:text-blue-500" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </a>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <button
                    onClick={() => alert("Logging out...")}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200" />
    </nav>
  );
};

export default Navbar;
