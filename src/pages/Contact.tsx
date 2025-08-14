import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-stone-200 py-20 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-gray-300/20 to-slate-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-stone-300/20 to-gray-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            You can reach me for questions, ideas, or opportunities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-slate-700 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Contact Cards */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 group hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-gray-600 to-slate-600 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                <p className="text-gray-600">aycabadem12@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 group hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-slate-600 to-stone-600 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">LinkedIn</h3>
                <p className="text-gray-600">
                  https://www.linkedin.com/in/ay%C3%A7a-badem-ergin-284b45147/
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 group hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-stone-600 to-gray-600 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">GitHub</h3>
                <p className="text-gray-600">https://github.com/aycabadem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
