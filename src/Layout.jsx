import { useState, useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Slider from "./sections/Slider";
import JoinUs from "./sections/JoinUs";
import Download from "./sections/Download";
import Cities from "./sections/Cities";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

const Layout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <JoinUs />
      <Download />
      <Cities />
      <Faq />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-p1 text-white p-3 rounded-full shadow-lg hover:bg-p2 transition-all  duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Layout;
