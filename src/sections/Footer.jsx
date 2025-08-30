import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
const Footer = () => {
  const isHome = location.pathname === "/";

  return (
    <section className="pt-20 pb-20 bg-footer">
      <div className="container text-center relative text-p3">
        <div className="max-w-128 mx-auto">
          {isHome ? (
            <div className="footer-logo flex justify-center">
              <LinkScroll
                to="hero"
                offset={-250}
                spy
                smooth
                className="cursor-pointer mb-10"
              >
                <img
                  src="/images/footer-logo.svg"
                  alt="footer-logo"
                  loading="lazy"
                />
              </LinkScroll>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <Link to="/" className="cursor-pointer">
                <div className="mb-10">
                  <img
                    src="/images/footer-logo.svg"
                    alt="footer-logo"
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          )}
          <div className="footer-links mb-5">
            <ul className="flex justify-around flex-wrap ">
              <li className="text-[18px] hover:text-p1 transition-all duration-300">
                <Link to="/vulnerability-report">Bug/Vulnerability Report</Link>
              </li>
              <li className="text-[18px] hover:text-p1 transition-all duration-300">
                <Link to="/terms-and-service">Terms of Service</Link>
              </li>
              <li className="text-[18px] hover:text-p1 transition-all duration-300">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <hr className="text-p3/30" />
          <div className="copyright mt-20">
            <span className="year">{new Date().getFullYear()}</span> © BeeOrder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
