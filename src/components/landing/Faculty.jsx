import { useState, useEffect } from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/configs"; // adjust path as needed



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  FaPhone,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


function FacultyCards() {
  const { darkMode } = useDarkMode();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [facultys,setFaculty] = useState([]);
  // Dark mode colors
  const bgColor = darkMode ? "#000C3B" : "#0732EF";
  const textColor = "#FFFFFF";
  const borderColor = "#FFFFFF";

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 640);
    };
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

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Faculty"));
        const facultyData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFaculty(facultyData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchFaculty();
  }, []);


  const cardsToShow = getCardsToShow();
  const gap = windowWidth < 640 ? 16 : 20;
  const containerPadding = windowWidth < 640 ? 16 : 120;
  const maxContainerWidth =
    IMAGE_WIDTH * cardsToShow + gap * (cardsToShow - 1) + containerPadding;

  const cardWidth = Math.min(
    IMAGE_WIDTH,
    (windowWidth - containerPadding - gap * (cardsToShow - 1)) / cardsToShow
  );

  const cardHeight = cardWidth * (IMAGE_HEIGHT / IMAGE_WIDTH);

  const FacultyCard = ({ faculty }) => (
    <div className="flex flex-col items-center h-full">
      {/* Image container */}
      <div
        className="relative overflow-hidden w-full transition-colors duration-300"
        style={{
          height: `${cardHeight}px`,
          borderRadius: `${IMAGE_RADIUS}px`,
          padding: `${IMAGE_BORDER}px`,
          backgroundColor: borderColor,
        }}
      >
        <img
          src={faculty.imageUrl}
          alt={faculty.name}
          className="w-full h-full object-cover"
          style={{
            borderRadius: `${IMAGE_RADIUS - IMAGE_BORDER}px`,
          }}
        />
      </div>

      {/* Description */}
      <div 
        className="p-3 sm:p-4 w-full text-center transition-colors duration-300"
        style={{ 
          backgroundColor: darkMode ? "#000C3B" : "#0732EF" 
        }}
      >
        <h3 
          className="text-lg sm:text-xl font-bold mb-2 line-clamp-1 transition-colors duration-300"
          style={{ color: textColor }}
        >
          {faculty.name}
        </h3>
        <p 
          className="text-sm sm:text-base mb-2 sm:mb-3 line-clamp-1 transition-colors duration-300"
          style={{ color: textColor }}
        >
          {faculty.designation}
        </p>

        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center justify-center">
            <FaEnvelope 
              className="mr-2 text-sm sm:text-base transition-colors duration-300"
              style={{ color: textColor }}
            />
            <span 
              className="text-xs sm:text-sm truncate max-w-[100px] sm:max-w-[120px] transition-colors duration-300"
              style={{ color: textColor }}
            >
              {faculty.email}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <FaPhone 
              className="mr-2 text-sm sm:text-base transition-colors duration-300"
              style={{ color: textColor }}
            />
            <span 
              className="text-xs sm:text-sm transition-colors duration-300"
              style={{ color: textColor }}
            >
              {faculty.phone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );



  return (
    <section 
      className="w-full font-grotesk py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 relative transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto" style={{ maxWidth: `${maxContainerWidth}px` }}>
        <h2 
          className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-colors duration-300"
          style={{ color: textColor }}
        >
          Faculty
        </h2>

        {isMobile ? (
          /* Mobile Swiper Carousel */
          <div className="relative px-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              style={{
                '--swiper-pagination-color': '#FFFFFF',
                '--swiper-pagination-bullet-inactive-color': 'rgba(255,255,255,0.3)',
                '--swiper-pagination-bullet-size': '8px',
                '--swiper-pagination-bullet-horizontal-gap': '6px'
              }}
            >
              {facultys.map((faculty) => (
                <SwiperSlide key={faculty.id}>
                  <div className="px-2 pb-10"> {/* Added padding for pagination */}
                    <FacultyCard faculty={faculty} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          /* Desktop/Tablet Original Carousel */
          <div className="relative">
            {/* left arrow */}
            <button
              onClick={() => {
                const swiper = document.querySelector('.desktop-swiper')?.swiper;
                if (swiper) swiper.slidePrev();
              }}
              className="absolute z-10 rounded-full p-2 sm:p-3 hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
              style={{
                left: `-${containerPadding / 3}px`,
                top: `${IMAGE_HEIGHT / 2}px`,
                transform: "translateY(-50%)",
                color: textColor
              }}
            >
              <FaChevronLeft className="text-xl sm:text-2xl" />
            </button>

            <Swiper
              className="desktop-swiper"
              modules={[Navigation, Autoplay]}
              spaceBetween={gap}
              slidesPerView={cardsToShow}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              navigation={false}
            >
              {facultys.map((faculty) => (
                <SwiperSlide key={faculty.id} style={{ width: `${cardWidth}px` }}>
                  <FacultyCard faculty={faculty} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* right arrow */}
            <button
              onClick={() => {
                const swiper = document.querySelector('.desktop-swiper')?.swiper;
                if (swiper) swiper.slideNext();
              }}
              className="absolute z-10 rounded-full p-2 sm:p-3 hover:bg-white/20 transition-colors"
              aria-label="Next slide"
              style={{
                right: `-${containerPadding / 3}px`,
                top: `${IMAGE_HEIGHT / 2}px`,
                transform: "translateY(-50%)",
                color: textColor
              }}
            >
              <FaChevronRight className="text-xl sm:text-2xl" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FacultyCards;