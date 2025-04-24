import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Faculty = "https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png";
const sampleTeam = {
  id: 1,
  name: "Dr. Suresh Babu",
  designation: "Principal",
  email: "principal@cet.ac.in",
  phone: "+91 0000000000",
  image: Faculty,
};

const facultyData = Array.from({ length: 6 }, (_, i) => ({
  ...sampleTeam,
  id: i + 1, 
}));

function FacultyCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Image dimensions
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = 477;
  const IMAGE_RADIUS = 30;
  const IMAGE_BORDER = 5;
  
  // Responsive cards 
  const getCardsToShow = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };
  
  const cardsToShow = getCardsToShow();

  // Calculating responsive dimensions
  const gap = windowWidth < 640 ? 10 : 20;
  const containerPadding = windowWidth < 640 ? 20 : 60;
  const maxContainerWidth =
    IMAGE_WIDTH * cardsToShow + gap * (cardsToShow - 1) + containerPadding;

  const cardWidth = Math.min(
    IMAGE_WIDTH,
    (windowWidth - containerPadding - gap * (cardsToShow - 1)) / cardsToShow
  );

  const cardHeight = cardWidth * (IMAGE_HEIGHT / IMAGE_WIDTH);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= facultyData.length - cardsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? facultyData.length - cardsToShow : prev - 1
    );
  };

  //mid point of img for arrows
  const imageMiddlePoint = `calc(75% - ${cardHeight / 2}px)`;

  
  const arrowPosition = windowWidth < 640 ? "4" : "10";

  return (
    <section className="w-full font-grotesk bg-custom-blue py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-4 relative">
      {/* left arrow */}
      <button
        onClick={prevSlide}
        className="absolute z-10 text-white rounded-full p-2 sm:p-3 hover:bg-white/10 transition-colors"
        aria-label="Previous slide"
        style={{
          left: `${arrowPosition}px`,
          top: imageMiddlePoint,
          transform: "translateY(-50%)",
        }}
      >
        <FaChevronLeft className="text-lg sm:text-xl md:text-2xl" />
      </button>

      <div className="mx-auto" style={{ maxWidth: `${maxContainerWidth}px` }}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          Faculty
        </h2>

        <div className="relative">
          {/* Carousel container */}
          <div
            className="overflow-hidden mx-auto"
            style={{
              width: `${cardWidth * cardsToShow + gap * (cardsToShow - 1)}px`,
            }}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                gap: `${gap}px`,
              }}
            >
              {facultyData.map((faculty) => (
                <div
                  key={faculty.id}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div className="flex flex-col items-center">
                    {/* Image container */}
                    <div
                      className="relative overflow-hidden bg-white w-full"
                      style={{
                        height: `${cardHeight}px`,
                        borderRadius: `${IMAGE_RADIUS}px`,
                        padding: `${IMAGE_BORDER}px`,
                      }}
                    >
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                        style={{
                          borderRadius: `${IMAGE_RADIUS - IMAGE_BORDER}px`,
                        }}
                      />
                    </div>

                    {/* Description */}
                    <div className="bg-custom-blue p-2 sm:p-3 md:p-4 w-full text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-1">
                        {faculty.name}
                      </h3>
                      <p className="text-sm sm:text-base text-white mb-1 sm:mb-2 line-clamp-1">
                        {faculty.designation}
                      </p>

                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center justify-center">
                          <FaEnvelope className="text-white mr-2 text-sm sm:text-base" />
                          <span className="text-white text-sm truncate max-w-[80px] sm:max-w-[120px]">
                            {faculty.email}
                          </span>
                        </div>
                        <div className="flex items-center justify-center">
                          <FaPhone className="text-white mr-1 text-sm sm:text-base" />
                          <span className="text-white text-sm">
                            {faculty.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* right arrow */}
      <button
        onClick={nextSlide}
        className="absolute z-10 text-white rounded-full p-2 sm:p-3 hover:bg-white/10 transition-colors"
        aria-label="Next slide"
        style={{
          right: `${arrowPosition}px`,
          top: imageMiddlePoint,
          transform: "translateY(-50%)",
        }}
      >
        <FaChevronRight className="text-lg sm:text-xl md:text-2xl" />
      </button>
    </section>
  );
}

export default FacultyCards;