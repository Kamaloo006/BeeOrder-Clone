import { Element } from "react-scroll";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/motion-primitives/accordion";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
    });
  }, []);

  const staticItems = [
    {
      id: "what-is-beeorder",
      title: "What is BeeOrder?",
      body: "BeeOrder is an on-demand food delivery platform that connects customers with their favorite outlets (restaurants and markets). The food is delivered to you wherever you are as long as you are within our delivery range.",
      delay: 100,
    },
    {
      id: "delivery-areas",
      title:
        "What are the delivery areas for the BeeOrder platform? / How can I add my address to the application?",
      body: "We are working hard to expand to all governorates, and you will be notified as soon as BeeOrder service is available in any new area through our social media platforms. You can check the availability of BeeOrder services within your location by opening our app and following these steps:\n Profile > my addresses > add new address > clicking next button > if you are in served radiance you can continue with adding address details and if you are not, we will let you know immediately.",
      delay: 150,
    },
    {
      id: "how-it-works",
      title: "How does BeeOrder works?",
      body: "It's simple.\n1) Enter your address.\n2) Choose your favorite outlet to order from.\n3) Review your order and its value from the final list (Checkout) and choose your preferred payment method.\n4) In case you have active vouchers, you can add it to the order and benefit from it through out adding the discount from 'add voucher' button.\n5) Once you have checked all the desired information click 'send order' so we can process your order, and a few minutes later a message will be sent to you confirming the order with the expected arrival time.",
      delay: 200,
    },
  ];

  const info = [
    {
      id: 1,
      title: "How do I change my registered phone number on the app?",
      body: "You can change your registered phone number by logging out of the app and to sign in with the requested phone number with a new account, bottom line you can't change the phone number for the same account.",
      delay: 250,
    },
    {
      id: 2,
      title: "What is Beeorder loyalty system, and how can I collect points?",
      body: "Our loyalty program is based on the system of earning and redeeming points when placing orders through the application (without applying discount on it) or achieving achievements.",
      delay: 300,
    },
    {
      id: 3,
      title:
        "I have a discount voucher but when I apply it on my order it shows that is not valid, why is this happening?",
      body: "Every voucher has its own criteria (expiry date, count of usage, amount, and which outlet you can apply it on) you can check them up in my vouchers list '%', located in the Home screen top of the list to the right.",
      delay: 350,
    },
    {
      id: 4,
      title: "How do I maintain my King/Queen Bee Status?",
      body: "You maintain your King/Queen Bee Status as long as you have 7000 Points in your balance",
      delay: 400,
    },
    {
      id: 5,
      title: "Do my points expire?",
      body: "Yes, your points will expire after 90 Days from the day you earn them- so make sure you use them! You can check the status of your points under points history.",
      delay: 400,
    },
    {
      id: 6,
      title: "How can I use my points?",
      body: "From the Rewards store, Pick the reward you like and hit Redeem, Rewards either will be added to you vouchers wallet or we will contact you through SMS.",
      delay: 400,
    },
    {
      id: 7,
      title: "Are my tier benefits valid in all cities?",
      body: "Your current tier and points are valid all across cities where Beeorder operates. Offers and reward values may vary depending on the city you are ordering in.",
      delay: 400,
    },
    {
      id: 8,
      title: "How to rate my order?",
      body: "You can rate your order during 48 hours period after delivering. If you are not happy with the service, you can submit your complain while rating the order, and we will look into in the nearest time.",
      delay: 400,
    },
  ];

  return (
    <section className="pt-20 pb-20 bg-p1">
      <Element name="faq">
        <div className="container text-center relative text-white pt-10">
          <div
            className="title text-5xl font-bold uppercase"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Frequently Asked
            <span className="text-p2 font-extrabold"> Questions</span>
          </div>

          <div className="faq-accordion mt-15">
            <Accordion className="flex w-full flex-col">
              {staticItems.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  <AccordionItem value={item.id} className="py-2 bg-p3 mt-2">
                    <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950">
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 ml-4" />
                        <div className="ml-2 text-zinc-950 text-xl md:text-2xl">
                          {item.title}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left text-left ml-4">
                      <p className="pl-6 pr-2 text-p2 whitespace-pre-line">
                        {item.body}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}

              {info.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  <AccordionItem
                    value={`info-${item.id}`}
                    className="py-2 bg-p3 mt-2"
                  >
                    <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950">
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 ml-4" />
                        <div className="ml-2 text-zinc-950 text-xl md:text-2xl">
                          {item.title}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="origin-left text-left ml-4">
                      <p className="pl-6 pr-2 text-p2 whitespace-pre-line">
                        {item.body}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
