import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      to={title.toLowerCase().replace(/\s+/g, "-")}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="relative uppercase base-extrabold transition-colors duration-300 cursor-pointer whitespace-nowrap group text-p4 hover:text-p1 px-4 py-2"
    >
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-p1 transition-all duration-300 group-hover:w-full"></span>
    </LinkScroll>
  );

  const isHome = location.pathname === "/";

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full py-2 transition-all duration-500 bg-p6/80 z-50",
        hasScrolled && "bg-p3 backdrop-blur-[8px] shadow-md"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative">
          {isHome ? (
            <>
              {/* Left nav */}
              <div className="flex items-center space-x-4">
                <NavLink title="Download" />
                <div className="dot mx-10"></div>
                <NavLink title="Cities" />
              </div>

              {/* Center logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <LinkScroll
                  to="hero"
                  offset={-250}
                  spy
                  smooth
                  className="cursor-pointer"
                >
                  <img
                    src="/images/logo-dark.png"
                    alt="logo"
                    loading="lazy"
                    className={clsx(
                      "h-12 transition-all duration-500",
                      hasScrolled && "h-10"
                    )}
                  />
                </LinkScroll>
              </div>

              {/* Right nav */}
              <div className="flex items-center space-x-4">
                <NavLink title="Join us" />
                <div className="dot mx-10"></div>
                <NavLink title="FAQ" />
              </div>
            </>
          ) : (
            /* Other routes → only centered logo */
            <div className="w-full flex justify-center">
              <Link to="/" className="cursor-pointer">
                <img
                  src="/images/logo-dark.png"
                  alt="logo"
                  className="h-12"
                  loading="lazy"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
