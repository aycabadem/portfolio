import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 hover:text-gray-600"
              onClick={closeMenu}
            >
              Ayca Badem Ergin
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-slate-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-gray-800 hover:text-slate-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="text-gray-800 hover:text-slate-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-slate-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-800 hover:text-slate-600 focus:outline-none focus:text-slate-600"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="text-gray-800 hover:text-slate-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-gray-800 hover:text-slate-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="text-gray-800 hover:text-slate-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-slate-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
