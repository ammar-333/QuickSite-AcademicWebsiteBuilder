import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-300 text-black py-10 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Quick<span className="text-gray-700">Site</span>
              </h2>
              <p className="text-sm text-gray-700">
                Build beautiful academic websites with ease. QuickSite helps
                educators and researchers showcase their work effortlessly.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-blue-600">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-blue-600">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#price" className="hover:text-blue-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-600">
                    About us
                  </a>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Get Started
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Ready to build your academic presence? Join us now.
              </p>
                <a href="/login" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Create Your Site
                </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} QuickSite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
