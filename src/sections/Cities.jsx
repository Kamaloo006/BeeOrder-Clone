import { Element } from "react-scroll";

const Cities = () => {
  const citiesImgs = [
    { src: "/images/damascus.png", alt: "Damascus", duration: "200" },
    { src: "/images/lattakia.png", alt: "Lattakia", duration: "300" },
    { src: "/images/aleppo.jpg", alt: "Aleppo", duration: "400" },
    { src: "/images/homs.png", alt: "Homs", duration: "500" },
    { src: "/images/tartus.jpg", alt: "Tartus", duration: "600" },
  ];

  return (
    <section className="pt-20 pb-20">
      <Element name="cities">
        <div className="container text-center relative">
          <h1 className="title text-5xl text-p2 font-bold tracking-wide uppercase">
            Cities We Serve in
          </h1>
          <div className="h-1 w-22 bg-p1 absolute left-[50%] translate-x-[-50%] mt-4" />

          <div className="carousel-cities mt-20 w-full relative mx-auto flex flex-wrap justify-center gap-5">
            {citiesImgs.map((city, index) => (
              <div
                className="city-item hover:cursor-pointer h-[350px] w-[240px] relative group overflow-hidden rounded-2xl shadow-lg sm:mt-4 max-sm:mt-4"
                key={index}
                data-aos="fade-up"
                data-aos-duration={city.duration}
                data-aos-delay="200"
              >
                <img
                  src={city.src}
                  alt={city.alt}
                  loading="lazy"
                  className="object-cover h-full w-full transition-all duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-p1/0 flex items-center justify-center transition-all duration-500 group-hover:bg-p1/90">
                  <span className="text-white text-3xl font-bold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {city.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Cities;
