import { useState, useEffect } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("privacy-policy");
  const [isScrolling, setIsScrolling] = useState(false);

  const sections = [
    { id: "privacy-policy", title: "Privacy Policy" },
    { id: "information-collected", title: "Information We Collect" },
    { id: "information-usage", title: "How We Use Information" },
    { id: "information-sharing", title: "How We Share Information" },
    { id: "contact-info", title: "Contact Information" },
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
              Privacy Policy
            </h1>
            <p className="text-xl text-white opacity-90">
              Learn how we collect, use, and protect your personal information
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
            {/* Privacy Policy Section */}
            <section id="privacy-policy" className="mb-12 scroll-mt-24">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                Privacy Policy
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700">
                  This Privacy Policy explains what information we collect, how
                  that information is used, under what circumstances we share
                  information and the choices you can make about that
                  information. This Policy applies when you access Bee Delivery
                  through a mobile app.
                </p>
              </div>
            </section>

            {/* Information We Collect Section */}
            <section id="information-collected" className="mb-12 scroll-mt-24">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                Information We Collect
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    1. Information you provide to us or allow others to provide
                    to us
                  </h3>
                  <p className="text-gray-700">
                    At various points in the Bee Delivery experience, you may
                    provide us with information about yourself. For example,
                    when you create an account with Bee Delivery, you provide us
                    with personal information like your name, email address, and
                    phone number. And if you place an order with Bee Delivery,
                    we collect information including your address, phone number,
                    birth date, and the details of your order.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    2. Technical information about the usage of Bee Delivery
                  </h3>
                  <p className="text-gray-700">
                    When you use the Bee Delivery services, through our mobile
                    app, we automatically receive some technical information
                    about the hardware and software that is being used.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    3. Location Permissions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    By granting access to location services, you will be able to
                    view the nearest restaurants and markets around you in order
                    for you to place an order. Once an order is placed, you will
                    be able to track your order in real time while your location
                    is on and get notifications if the app was open in the
                    background.
                  </p>
                  <p className="text-gray-700">
                    Log information: When you use Bee Delivery, our servers will
                    record information about your usage of the service and
                    information that is sent by your device. Log information can
                    include things like the IP address of your device,
                    information about the operating system and/or app you are
                    using, unique device identifiers, searches that you run on
                    Bee Delivery, and other ways you interact with the service.
                    If you are logged into the Bee Delivery service, this
                    information is stored with your account information.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information Section */}
            <section id="information-usage" className="mb-12 scroll-mt-24">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                How We Use Your Information
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  We may use the information we collect for various purposes,
                  including to:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Provide the Bee Delivery service to you and to improve the
                    quality of the service we're able to offer
                  </li>
                  <li>
                    Allow your Shopper (which includes those that shop for and
                    deliver the order on your behalf) to choose your items at a
                    retailer site, deliver your items to you, and call or text
                    you with any updates or problems
                  </li>
                  <li>
                    Offer you customized content (including advertising and
                    promotions), such as prominently displaying items you
                    purchase frequently.
                  </li>
                  <li>
                    Understand how users interact with our service as a whole in
                    order to test new features and improve Bee Delivery for
                    everyone
                  </li>
                  <li>
                    Provide customer service, respond to your communications and
                    requests, and contact you about your use of Bee Delivery
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Share Information Section */}
            <section id="information-sharing" className="mb-12 scroll-mt-24">
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </span>
                How We Deal With Your Information
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Bee Delivery is a platform that connects users with Pickers
                  who shop for and deliver the goods that users want from
                  retailers. To facilitate the process, we need to share
                  information about you and your order with the other parties
                  who help enable the service. This includes, for example, the
                  Picker who picks and delivers your order.
                </p>

                <p className="text-gray-700 mb-4">
                  We also share information under the following principles:
                </p>

                <ul className="list-disc pl-5 text-gray-700 space-y-4">
                  <li>
                    If you have consented we may allow carefully selected third
                    parties, including marketing and advertising companies, our
                    affiliates and associates, to contact you occasionally about
                    services that may be of interest to you. They may contact
                    you by telephone, SMS as well as by e-mail. If you change
                    your mind about being contacted by these companies in the
                    future, please let us know by using the contact details set
                    out below and/or by amending your profile accordingly.
                  </li>
                  <li>
                    For legal purposes — We share your information when we
                    believe that the disclosure is reasonably necessary to:
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>
                        Comply with applicable laws, regulations, legal
                        processes, or requests from law enforcement or
                        regulatory authorities
                      </li>
                      <li>
                        Prevent, detect, or otherwise handle fraud, security, or
                        technical issues
                      </li>
                      <li>
                        Protect the safety, rights, or property of any person,
                        the public, or Bee Delivery.
                      </li>
                    </ul>
                  </li>
                  <li>
                    For business purposes — We may share your information in
                    connection with, or during negotiations of, any merger, sale
                    of company assets, financing, or acquisition of all or a
                    portion of our business by another company. We may also
                    share your information between and among Bee Delivery, and
                    its current and future parents, affiliates, subsidiaries,
                    and other companies under common control and ownership.
                  </li>
                  <li>
                    All details and personally identifiable information will NOT
                    be stored, sold, shared, rented, or leased to any third
                    parties.
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Information Section */}
            <section id="contact-info" className="mb-12 scroll-mt-24">
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
                Contact Information
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700">
                  If you have any questions or comments about our Privacy
                  Policy, contact us at:{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="mailto:support@bee-delivery.com"
                  >
                    support@bee-delivery.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
