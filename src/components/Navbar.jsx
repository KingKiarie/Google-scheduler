import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`navbar fixed top-0 w-full z-50 ${
        isDarkMode
          ? "bg-gray-900 bg-opacity-40 text-white"
          : "bg-white bg-opacity-40 text-gray-900"
      } backdrop-filter backdrop-blur-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:px-8">
          <div className="flex items-center">
            <span className="text-lg font-semibold mr-4">Kevin</span>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to={"/"}
                className={`hover:text-yellow-400 transition duration-300 relative ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Home
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transition duration-300 opacity-0"></span>
              </Link>
              <Link
                to={"/about"}
                className={`hover:text-blue-400 transition duration-300 relative ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transition duration-300 opacity-0"></span>
              </Link>
              <Link
                to="/contact"
                className={`hover:text-red-400 transition duration-300 relative ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Contact
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-400 transition duration-300 opacity-0"></span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-lg focus:outline-none transition duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.5 6.5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1zM8 6.5a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0v-7zM13 6.5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V7.5a1 1 0 0 0-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L10 6.414l-5.293 5.293a1 1 0 1 1-1.414-1.414l6-6z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div>
            <button
              onClick={toggleDarkMode}
              className={`text-lg focus:outline-none transition duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-md fixed top-16 left-0 w-full py-2">
            <div className="flex flex-col items-center space-y-4">
              <a
                href="#home"
                className={`text-lg hover:text-gray-300 transition duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`text-lg hover:text-gray-300 transition duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`text-lg hover:text-gray-300 transition duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
