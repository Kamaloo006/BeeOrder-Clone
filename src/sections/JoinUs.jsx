import { Element } from "react-scroll";
import Card from "../../components/Card";
import { motion } from "framer-motion";

const JoinUs = () => {
  const info = [
    {
      id: 1,
      job: "Restaurant",
      text: "Grow your business by partnering with US! Expand your reach, increase your orders, and connect with more customers who are looking for variety and delicious food.",
      img: "/images/career.png",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf1OlulWLqTRHIIZaIkDQxfcPpaIqPhw0WceegsvtwkwrjQ1g/viewform?usp=sharing&ouid=113893095947687136443",
    },
    {
      id: 2,
      job: "Employee",
      text: "Join us and be a part of the beehive! Apply now and take your career to the next level.",
      img: "/images/partner.png",
      link: "https://be.sy/careersjoin",
    },
    {
      id: 3,
      job: "Driver",
      text: "Join our expanding food delivery network and experience the freedom of flexible work, great earnings, and exciting opportunities.",
      img: "/images/driver.png",
      link: "https://be.sy/driverjoin",
    },
  ];

  return (
    <section className="pt-40 ">
      <Element name="join-us">
        <div className="join-us-bg">
          <div className="container py-20 relative text-center">
            <h1
              className="uppercase text-p2 text-5xl font-bold tracking-wide"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              join us
            </h1>
            <div
              className="h-1 w-22 bg-p1 absolute left-[50%] translate-x-[-50%] mt-2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="400"
            />

            <p className="text-2xl mt-10 text-black" data-aos="fade-up">
              <span className="text-p1 font-bold">JOIN US</span> and Become a
              Chapter in Our Story!
            </p>
            <div className="cards mt-22  flex max-lg:flex-wrap gap-6 items-center justify-center">
              {info.map(({ id, job, text, img, link }) => (
                <Card key={id} job={job} text={text} img={img} link={link} />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default JoinUs;
