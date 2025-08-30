import { InfiniteSlider } from "../../components/motion-primitives/infinite-slider";

const Slider = () => {
  const imgs1 = [
    {
      id: 1,
      src: "/images/slider-img-1.png",
      alt: "image 1",
    },
    {
      id: 2,
      src: "/images/slider-img-2.png",
      alt: "image 2",
    },
    {
      id: 3,
      src: "/images/slider-img-3.png",
      alt: "image 3",
    },
    {
      id: 4,
      src: "/images/slider-img-4.png",
      alt: "image 4",
    },
    {
      id: 5,
      src: "/images/slider-img-5.png",
      alt: "image 5",
    },
  ];
  const imgs2 = [
    {
      id: 1,
      src: "/images/slider-img-7.png",
      alt: "image 7",
    },
    {
      id: 2,
      src: "/images/slider-img-8.png",
      alt: "image 8",
    },
    {
      id: 3,
      src: "/images/slider-img-9.png",
      alt: "image 9",
    },
    {
      id: 4,
      src: "/images/slider-img-10.png",
      alt: "image 10",
    },
    {
      id: 5,
      src: "/images/slider-img-11.png",
      alt: "image 11",
    },
    {
      id: 6,
      src: "/images/slider-img-1.png",
      alt: "image 1",
    },
  ];
  return (
    <section>
      <div className="container">
        <InfiniteSlider speed={100} gap={24} pauseOnHover className="my-8">
          {imgs1.map((item) => (
            <div key={item.id} className="px-4">
              <img
                src={item.src}
                alt={item.alt}
                className="h-32 w-auto"
                loading="lazy"
              />
            </div>
          ))}
        </InfiniteSlider>
        <InfiniteSlider
          speed={100}
          gap={24}
          pauseOnHover
          reverse
          className="my-8"
        >
          {imgs2.map((item) => (
            <div key={item.id} className="px-4">
              <img
                src={item.src}
                alt={item.alt}
                className="h-32 w-auto"
                loading="lazy"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default Slider;
