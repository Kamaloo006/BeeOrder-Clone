import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {}, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10">
      <div className="text-center max-w-lg mx-auto w-full">
        <div className="relative mb-6 md:mb-8">
          <div className="text-7xl sm:text-8xl md:text-9xl font-bold text-p1 opacity-10 tracking-widest">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-p1 mb-4 relative">
              404
              <span className="absolute -top-1 -right-3 md:-top-2 md:-right-4 w-4 h-4 md:w-6 md:h-6 bg-p2 rounded-full animate-ping opacity-75"></span>
            </h1>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
          Oops! Page not found
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
          The page you're looking for seems to have wandered off into the
          digital wilderness. Let's get you back on track.
        </p>

        <div className="relative mb-8 md:mb-10">
          <div className="absolute -left-10 md:-left-16 top-1/2 w-8 h-8 md:w-12 md:h-12 bg-p1/10 rounded-full animate-pulse"></div>
          <div className="absolute -right-10 md:-right-16 top-1/3 w-6 h-6 md:w-8 md:h-8 bg-p2/10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute left-14 md:left-20 bottom-0 w-8 h-8 md:w-10 md:h-10 bg-p1/5 rounded-full animate-pulse delay-700"></div>
          <div className="absolute right-14 md:right-20 -bottom-4 w-5 h-5 md:w-6 md:h-6 bg-p2/5 rounded-full animate-pulse delay-1000"></div>

          <svg
            className="w-48 h-36 sm:w-56 sm:h-42 md:w-64 md:h-48 mx-auto mb-4 md:mb-6 text-gray-300"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path
              d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M256,464c-114.7,0-208-93.3-208-208
              S141.3,48,256,48s208,93.3,208,208S370.7,464,256,464z M256,176c-17.7,0-32,14.3-32,32c0,17.7,14.3,32,32,32s32-14.3,32-32
              C288,190.3,273.7,176,256,176z M296,336h-80c-13.3,0-24-10.7-24-24s10.7-24,24-24h16v-40h-16c-13.3,0-24-10.7-24-24s10.7-24,24-24h48
              c13.3,0,24,10.7,24,24v64h16c13.3,0,24,10.7,24,24S309.3,336,296,336z"
            />
          </svg>
        </div>

        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-p1 text-white font-medium rounded-full hover:bg-p2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 md:hover:-translate-y-1 shadow-md hover:shadow-lg mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Return to Homepage
        </Link>

        <div className="mt-6 md:mt-8 text-sm text-gray-500">
          <p className="mb-2">Or try one of these:</p>
          <div className="flex justify-center space-x-3 md:space-x-4">
            <button
              onClick={() => window.history.back()}
              className="text-p2 hover:text-p1 transition-colors duration-300 text-sm md:text-base"
            >
              Go Back
            </button>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:support@beeorder.com"
              className="text-p2 hover:text-p1 transition-colors duration-300 text-sm md:text-base"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
