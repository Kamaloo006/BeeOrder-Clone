import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import { TextShimmer } from "../../components/motion-primitives/text-shimmer";

const Hero = () => {
  const meals = [
    "/images/meal-1.png",
    "/images/meal-2.png",
    "/images/meal-3.png",
    "/images/meal-4.png",
  ];
  const [currentMealIndex, setCurrentMealIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMealIndex((prevIndex) => (prevIndex + 1) % meals.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [meals.length]);

  return (
    <section className="relative pb-40 max-lg:pb-36 max-md:pb-32 overflow-hidden">
      <Element name="hero">
        <div className="hero-bg overflow-hidden">
          <div className="container md:flex md:justify-between relative">
            <div className="text-wrapper">
              <div
                className="hero-title  gap-2 text-4xl md:text-5xl lg:max-w-352 uppercase font-bold tracking-wide text-p6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
              >
                Making Ordering Easier and More Innovative
                <TextShimmer
                  duration={3}
                  className=" text-5xl md:text-6xl  md:block mt-1  [--base-color:var(--color-p2)] [--base-gradient-color:var(--color-p2)] dark:[--base-color:var(--color-p3)] dark:[--base-gradient-color:var(--color-p2)]"
                >
                  for Everyone
                </TextShimmer>
              </div>
              <div
                className="text-2xl mt-5 text-p6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                Launched in 2016 as the first food-ordering app, we have since
                expanded to include grocery shopping. Our mission is to enhance
                daily life by providing a seamless and enjoyable ordering
                experience. With a vision for growth and innovation, we continue
                to build on our first-mover advantage.
              </div>
              <button
                className="mt-10 font-bold tracking-wide border-3 p-3 rounded-bl-3xl rounded-tr-3xl cursor-pointer
                  bg-white text-p1 border-p1
                  relative overflow-hidden
                  group transition-all duration-500 ease-linear
                  px-6 py-3 shadow-md hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <span className="relative z-10 group-hover:text-p6 transition-colors duration-300">
                  <a href="https://careers.beeorder.com/">We're Hiring</a>
                </span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-p1 to-p1/40 
                   opacity-0 group-hover:opacity-100
                   transition-all duration-500 ease-in-out 
                   transform -translate-x-full group-hover:translate-x-0
                   group-hover:duration-500"
                ></span>
              </button>
            </div>

            <div className="hidden lg:block w-[350px] h-[350px] rounded-full image-rotate ">
              <img
                src={meals[currentMealIndex]}
                width={325}
                className="absolute inset-0 hover:rotate-45 transition-all duration-300"
                alt={`Meal ${currentMealIndex + 1}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;

/*
<motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                </motion.div>
*/
