import React from "react";
import { Element } from "react-scroll";
import { TextShimmerWave } from "../../components/motion-primitives/text-shimmer-wave";
import { motion } from "framer-motion";

const Download = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-p2">
      <Element name="download">
        <div className="container px-4 sm:px-6">
          <div
            className="title relative text-center text-p3 text-3xl md:text-4xl leading-normal tracking-tight"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="100"
          >
            Order the Food You Love From{" "}
            <TextShimmerWave
              duration={1}
              spread={0.5}
              zDistance={1}
              scaleDistance={1.1}
              rotateYDistance={20}
              className="text-6xl sm:text-7xl md:text-8xl font-extrabold block [--base-color:var(--color-p1)] [--base-gradient-color:var(--color-p7)] dark:[--base-color:var(--color-p1)] dark:[--base-gradient-color:var(--color-p8)]"
            >
              BeeOrder
            </TextShimmerWave>
          </div>

          <div className="body flex flex-col lg:flex-row items-center mt-8 sm:mt-12 md:mt-9">
            <motion.div
              className="img-section w-full md:w-[400px] lg:w-[520px] mb-10 md:mb-0 md:mr-10 lg:mr-20"
              animate={{
                y: ["-15px", "15px", "-15px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/images/mobile.png"
                className="w-full max-w-[320px] md:max-w-none mx-auto"
                loading="lazy"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="400"
              />
            </motion.div>

            <div className="text-section text-center lg:text-left w-full max-w-3xl">
              <p
                className="text-p3 tracking-wide text-xl sm:text-2xl md:text-3xl"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="400"
              >
                Download our app today and enjoy a seamless, joyful ordering
                experience that will make you happy. Order from BeeOrder and our
                team will take care of the rest.
              </p>
              <div
                className="buttons flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-8 md:mt-10 gap-4 sm:gap-6 md:gap-10"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <button className="rounded-xl">
                  <a href="https://apps.apple.com/de/app/%D8%A8%D9%8A-%D8%AF%D9%8A%D9%84%D9%8A%D9%81%D8%B1%D9%8A/id1667117372?l=en">
                    <img
                      src="/images/apple.png"
                      className="w-40 md:w-48 lg:w-52"
                      loading="lazy"
                      alt="App Store"
                    />
                  </a>
                </button>
                <button className="rounded-xl">
                  <a href="https://play.google.com/store/apps/details?id=com.beeorder.customer&pli=1">
                    <img
                      src="/images/gplay.png"
                      className="w-40 md:w-48 lg:w-52"
                      loading="lazy"
                      alt="Google Play"
                    />
                  </a>
                </button>
                <button className="bg-p1 px-4 py-2 sm:px-3 cursor-pointer rounded-xl text-p3 font-normal capitalize text-lg sm:text-xl lg:text-2xl lg: hover:text-p2 hover:bg-p3 transition duration-500 mt-4 sm:mt-0 max-sm:mt-0">
                  <a href="https://be.sy/live">Direct Download</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Download;
