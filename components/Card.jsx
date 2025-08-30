const Card = ({ job, text, img, link }) => {
  return (
    <div className="h-full w-full">
      <div
        className="h-[588px] w-full flex flex-col bg-white/50 border border-p2 rounded-tr-4xl rounded-bl-4xl shadow-xl transition-all duration-500 overflow-hidden group"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
      >
        <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            src={img}
            alt={`${job} position`}
          />
          {/* Gradient Overlay - Visible on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/0 via-gray-900/10 to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="flex-1 flex flex-col p-6 w-full">
          <div className="mb-4 w-full relative">
            <h3 className="text-2xl font-bold text-gray-900 w-full">
              Join US as <span className="text-p1">{job}</span>
            </h3>
            <div className="w-16 h-0.5 bg-p1 mt-1 rounded-full absolute left-[50%] translate-x-[-50%]" />
          </div>

          <div className="mb-6 flex-grow w-full mt-2">
            <p className="text-gray-600 dark:text-gray-500 w-full text-xl">
              {text}
            </p>
          </div>

          <a
            href={link}
            className="w-full inline-flex items-center justify-center px-5 py-3 text-[18px] font-bold uppercase text-white bg-p1 hover:bg-p1/90 rounded-lg transition-colors duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
