import { useState, useEffect } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Bug = () => {
  const [activeSection, setActiveSection] = useState("vrr-policy");
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: "vrr-policy", title: "VRR Policy" },
    { id: "reporting-process", title: "Reporting Process" },
    { id: "recognition", title: "Recognition" },
    { id: "policy-objective", title: "Policy Objective" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isScrolling]);

  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-400 to-p1 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vulnerability Responsible Reporting Policy
            </h1>
            <p className="text-xl text-white opacity-90">
              Help us enhance security by responsibly reporting vulnerabilities
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0 md:pr-6">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2 relative">
                {/* Animated background element */}
                <div
                  className="absolute bg-yellow-100 rounded-md transition-all duration-300 ease-in-out"
                  style={{
                    height: "42px",
                    transform: `translateY(${
                      sections.findIndex((s) => s.id === activeSection) * 48
                    }px)`,
                  }}
                />

                {sections.map((section) => (
                  <li key={section.id} className="relative z-10">
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                        activeSection === section.id
                          ? "text-p1 font-medium bg-yellow-100"
                          : "text-p2 hover:text-p1"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="w-full md:w-3/4 lg:w-4/5 md:pl-6">
            {/* VRR Policy Section */}
            <section id="vrr-policy" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-p1 text-white p-2 rounded-full mr-3">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                Vulnerability Responsible Reporting Policy
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700">
                  The Vulnerability Responsible Reporting (VRR) policy is a
                  process by which security researchers or ethical hackers
                  discover vulnerabilities in BeeORDER software, hardware, or
                  systems and report them to us. Our primary goal is to enhance
                  the security of our systems by addressing these
                  vulnerabilities before they are exploited by malicious actors.
                </p>
              </div>
            </section>

            {/* Reporting Process Section */}
            <section id="reporting-process" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-p1 text-white p-2 rounded-full mr-3">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </span>
                Reporting Process
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    The process consists of the following steps:
                  </h3>

                  <ol className="list-decimal pl-5 space-y-4">
                    <li>
                      <span className="font-bold text-p1">Discovery: </span>
                      Security researchers or ethical hackers identify a
                      vulnerability.
                    </li>

                    <li>
                      <span className="font-bold text-p1">Reporting: </span>
                      Researchers should submit a detailed report about the
                      vulnerability. This report should include:
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                          A comprehensive description of the vulnerability,
                          including technical details.
                        </li>
                        <li>
                          Steps to reproduce the vulnerability (proof of
                          concept).
                        </li>
                        <li>
                          The specific system, domain, or application affected
                          by the vulnerability.
                        </li>
                        <li>
                          A suggestion for a potential solution (optional).
                        </li>
                      </ul>
                      <div className="mt-4">
                        <p className="font-semibold text-gray-800">
                          Reports can be submitted by sending an email to the
                          following address:
                        </p>
                        <a
                          href="mailto:security@Beeorder.com"
                          className="text-p1 font-bold underline hover:text-p2 transition-colors"
                        >
                          security@Beeorder.com
                        </a>
                      </div>
                    </li>

                    <li>
                      <span className="font-bold text-p1">Verification: </span>
                      We acknowledge the report, review the vulnerability, and
                      verify its existence.
                    </li>

                    <li>
                      <span className="font-bold text-p1">Remediation: </span>
                      We work on developing a patch or fix to address the
                      vulnerability.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Recognition Section */}
            <section id="recognition" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-p1 text-white p-2 rounded-full mr-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Recognition
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    After reporting and verification steps, we acknowledge the
                    researcher's contribution based on an assessment that
                    considers:
                  </h3>

                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <span className="font-bold text-p2">
                        Vulnerability Impact:
                      </span>
                      The potential severity of the vulnerability and the damage
                      it could cause.
                    </li>
                    <li>
                      <span className="font-bold text-p2">
                        Vulnerability Size:
                      </span>
                      The scope of the vulnerability and the number of systems
                      or users it affects.
                    </li>
                    <li>
                      <span className="font-bold text-p2">Cooperation:</span>
                      The researcher's communication style, willingness to work
                      with us, and adherence to responsible disclosure
                      practices.
                    </li>
                    <li>
                      <span className="font-bold text-p2">
                        Solution Provided:
                      </span>
                      Whether the researcher included a potential solution or
                      workaround in their report.
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Following evaluation, recognition will be granted,
                    potentially taking various forms:
                  </p>

                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <span className="font-bold text-p2">
                        Social Media Acknowledgement:
                      </span>
                      Publicly recognizing the researcher's contribution on our
                      social media platforms.
                    </li>
                    <li>
                      <span className="font-bold text-p2">Reward:</span>
                      Monetary or other forms of compensation.
                    </li>
                    <li>
                      <span className="font-bold text-p2">
                        Certificate of Appreciation:
                      </span>
                      Awarding a certificate to acknowledge the researcher's
                      role in improving our security.
                    </li>
                    <li>
                      <span className="font-bold text-p2">
                        Working with the Researcher as a Consultant:
                      </span>
                      It is possible to engage the researcher to work with our
                      company as a consultant on security vulnerabilities and
                      technical issues.
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-gray-700">
                    <span className="font-bold underline">
                      Recognition is not guaranteed for all reported
                      vulnerabilities.
                    </span>
                    We reserve the right to not publicly acknowledge or reward
                    vulnerabilities.
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Objective Section */}
            <section id="policy-objective" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-p1 text-white p-2 rounded-full mr-3">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Policy Objective
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    The objective of the policy:
                  </h3>

                  <p className="text-gray-700">
                    The Vulnerability Responsible Reporting Policy helps protect
                    our users and systems from potential attacks. It fosters
                    collaboration between security researchers and us, creating
                    a more secure digital environment for everyone. By
                    implementing this recognition system, we aim to incentivize
                    responsible reporting and express gratitude to security
                    researchers who help us maintain a vulnerability-free
                    system.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-p1 text-white p-2 rounded-full mr-3">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                Contact
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  For any information or inquiries, please contact us at:
                </p>

                <a
                  href="mailto:security@Beeorder.com"
                  className="text-p1 font-bold underline hover:text-p2 transition-colors text-xl"
                >
                  security@Beeorder.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bug;
