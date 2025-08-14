import React from "react";
import aycaPhoto from "../assets/ayca.jpg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-stone-200 flex items-center justify-center px-6 md:px-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gray-300/20 to-slate-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-stone-300/20 to-gray-400/20 rounded-full blur-3xl"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto relative z-10">
        {/* Profile Image Section */}
        <div className="flex-shrink-0 group">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 to-slate-700 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-lg"></div>
            <img
              src={aycaPhoto}
              alt="Ayça Badem Ergin"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl ring-8 ring-white/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center lg:text-left max-w-2xl">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm text-slate-700 font-semibold rounded-full border border-gray-300/50 text-sm mb-4">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
              Ayca
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            I’m a software developer building functional web applications with
            modern technologies.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-gray-800 to-slate-700 text-white font-semibold rounded-2xl hover:from-gray-900 hover:to-slate-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <span>View My Work</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-800 font-semibold rounded-2xl hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
