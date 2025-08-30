import { useState, useEffect, useRef } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const TermsAndPrivacy = () => {
  const [activeSection, setActiveSection] = useState("purpose");
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = useRef({});

  const sections = [
    { id: "purpose", title: "Purpose" },
    { id: "account", title: "Your Account" },
    { id: "availability", title: "Service Availability" },
    { id: "orders", title: "Orders" },
    { id: "privacy", title: "Privacy Policy" },
    { id: "faq", title: "FAQ" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return; // Don't update active section during programmatic scroll

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

    // Reset scrolling state after a delay
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-20">
        <section className="bg-gradient-to-r from-yellow-400 to-p1 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              BeeDelivery Policies
            </h1>
            <p className="text-2xl text-white opacity-90">
              Terms of Service, Privacy Policy, and Frequently Asked Questions
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
            {/* Purpose Section */}
            <section id="purpose" className="mb-12 scroll-mt-24">
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
                Purpose
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Our objective is to provide you with a seamless and easy
                  service by connecting you with our partners. BeeDelivery acts
                  as a mediator on behalf of both partners (restaurants and
                  stores) to conclude orders from our online platforms and
                  manage the relationship between the agents and the delivery
                  service providers.
                </p>
                <p className="text-gray-700">
                  This is done by following up with the process of supplying the
                  order with the associated parties and beyond.
                </p>
              </div>
            </section>

            {/* Your Account Section */}
            <section id="account" className="mb-12 scroll-mt-24">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                Your Account
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Before you place orders, you need to activate a BeeDelivery
                  account through your phone number. You may close your account
                  at any time by deleting the application on your phone.
                </p>
                <p className="text-gray-700">
                  We may suspend your access to your account or close it
                  permanently if in our opinion you are abusing our services
                  (conducting a fake order, making repeated unreasonable
                  complaints, mistreating our staff, damaging the company's
                  reputation without a valid reason or any other valid reason in
                  our opinion).
                </p>
              </div>
            </section>

            {/* Service Availability Section */}
            <section id="availability" className="mb-12 scroll-mt-24">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Service Availability
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Each partner (restaurants and stores) has a set delivery area.
                  This delivery area may change at any time due to factors such
                  as weather or the increasing demand for our service. This is
                  to ensure that your order reaches your door in its best
                  quality.
                </p>
                <p className="text-gray-700 mb-4">
                  Our partners (restaurants and stores) each decide their own
                  operating hours. That means the availability of our service
                  depends on their availability.
                </p>
                <p className="text-gray-700">
                  If you tried to place an order and the service is not
                  available for any of the previous reasons or any other reason;
                  we will notify you that ordering will not be possible.
                </p>
              </div>
            </section>

            {/* Orders Section */}
            <section id="orders" className="mb-12 scroll-mt-24">
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </span>
                Orders
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  During the order process, if you decide to cancel the order or
                  postpone it for a later, you will be given the choice between
                  keeping the order basket as a draft that you can return to
                  later and complete the order process or deleting the basket
                  permanently.
                </p>
                <p className="text-gray-700 mb-4">
                  When you place an order through our platform, it needs to be
                  accepted by us and the partners (restaurants and stores).
                </p>
                <p className="text-gray-700 mb-4">
                  We will notify you if your order has been confirmed along with
                  the expected delivery time.
                </p>
                <p className="text-gray-700 mb-4">
                  The contract for the supply of any item you have ordered is to
                  be implemented when we send the confirmation notice.
                </p>
                <p className="text-gray-700 mb-4">
                  You are responsible for paying the full value of your bill
                  that appears on the application, which includes the delivery
                  fees.
                </p>
                <p className="text-gray-700">
                  We may not be able to perform all the notes you have mentioned
                  in your order.
                </p>
              </div>
            </section>

            {/* Privacy Policy Section */}
            <section id="privacy" className="mb-12 scroll-mt-24">
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Information we collect
                </h3>

                <h4 className="font-medium text-gray-700 mb-2">
                  1. Information you provide to us or allow others to provide to
                  us
                </h4>
                <p className="text-gray-700 mb-4">
                  At various points in the Bee Delivery experience, you may
                  provide us with information about yourself. For example, when
                  you create an account with Bee Delivery, you provide us with
                  personal information like your name, email address, and phone
                  number. And if you place an order with Bee Delivery, we
                  collect information including your address, phone number,
                  birth date, and the details of your order.
                </p>

                <h4 className="font-medium text-gray-700 mb-2">
                  2. Technical information about the usage of Bee Delivery
                </h4>
                <p className="text-gray-700 mb-4">
                  When you use the Bee Delivery services, through our mobile
                  app, we automatically receive some technical information about
                  the hardware and software that is being used.
                </p>

                <h4 className="font-medium text-gray-700 mb-2">
                  3. Location Permissions
                </h4>
                <p className="text-gray-700 mb-4">
                  By granting access to location services, you will be able to
                  view the nearest restaurants and markets around you in order
                  for you to place an order. Once an order is placed, you will
                  be able to track your order in real time while your location
                  is on and get notifications if the app was open in the
                  background.
                </p>
                <p className="text-gray-700 mb-4">
                  Log information: When you use Bee Delivery, our servers will
                  record information about your usage of the service and
                  information that is sent by your device. Log information can
                  include things like the IP address of your device, information
                  about the operating system and/or app you are using, unique
                  device identifiers, searches that you run on Bee Delivery, and
                  other ways you interact with the service. If you are logged
                  into the Bee Delivery service, this information is stored with
                  your account information.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  How we use your information
                </h3>
                <p className="text-gray-700 mb-4">
                  We may use the information we collect for various purposes,
                  including to:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-2">
                  <li>
                    Provide the Bee Delivery service to you and to improve the
                    quality of the service we're able to offer
                  </li>
                  <li>
                    Allow your Shopper to choose your items at a retailer site,
                    deliver your items to you, and call or text you with any
                    updates or problems
                  </li>
                  <li>
                    Offer you customized content (including advertising and
                    promotions)
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

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  How we deal with your information
                </h3>
                <p className="text-gray-700 mb-4">
                  Bee Delivery is a platform that connects users with Pickers
                  who shop for and deliver the goods that users want from
                  retailers. To facilitate the process, we need to share
                  information about you and your order with the other parties
                  who help enable the service.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                  Contact information
                </h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions or comments about our Privacy
                  Policy, contact us at:
                </p>
                <a
                  href="mailto:privacy@bee-delivery.com"
                  className="text-blue-600 hover:underline"
                >
                  privacy@bee-delivery.com
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12 scroll-mt-24">
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
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Frequently Asked Questions
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      What is Bee Delivery?
                    </h3>
                    <p className="text-gray-700">
                      Bee Delivery is an on-demand food delivery platform that
                      connects customers with their favorite outlets
                      (restaurants and markets). The food is delivered to you
                      wherever you are as long as you are within our delivery
                      range.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      What are the delivery areas for the Bee Delivery platform?
                    </h3>
                    <p className="text-gray-700">
                      Bee Delivery is located in Iraq and we are also working
                      hard to expand to all Iraq area. You can check the
                      availability of Bee Delivery services within your location
                      by opening our app and following these steps: Profile → my
                      addresses → add new address → clicking next button.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      How does Bee Delivery work?
                    </h3>
                    <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                      <li>Enter your address.</li>
                      <li>Choose your favorite outlet to order from.</li>
                      <li>
                        Review your order and its value from the final list
                        (Checkout) and choose your preferred payment method.
                      </li>
                      <li>Add any active vouchers</li>
                      <li>Click "send order" to process your order</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      What is Bee Delivery loyalty system?
                    </h3>
                    <p className="text-gray-700">
                      Our loyalty program is based on the system of earning and
                      redeeming points when placing orders through the
                      application (without applying discount on it) or achieving
                      achievements. The count of diamonds on every outlet
                      determine how many points you will have.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndPrivacy;
