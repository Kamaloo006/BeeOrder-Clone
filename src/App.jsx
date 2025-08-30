import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./Layout";
import Bug from "./pages/Bug";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <Routes>
      {/* Main layout with all sections */}
      <Route path="/" element={<Layout />} />

      {/* Separate pages - these won't show the main content */}
      <Route path="/vulnerability-report" element={<Bug />} />
      <Route path="/terms-and-service" element={<Terms />} />
      <Route path="/privacy-policy" element={<Privacy />} />
    </Routes>
  );
}
