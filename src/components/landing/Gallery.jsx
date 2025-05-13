import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aboutimg from "../../assets/About.png";
import facultyimg from "../../assets/Faculty.png";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext"; 

export default function Gallery() {
  const images = [
    { id: 1, src: aboutimg, alt: "Meeting room" },
    { id: 2, src: facultyimg, alt: "Conference" },
    { id: 3, src: aboutimg, alt: "Collaboration" },
  ];

  const { darkMode, setDarkMode } = useDarkMode();
    const bgColor = darkMode ? "#000414" : "#FFFFFF";
    
  return (
    <div
      className="w-full min-h-[120vh] mx-auto  flex flex-col items-center relative px-4 pt-10 pb-20 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src="/green.png"
        alt=""
        className="absolute left-[-12.7%] -top-[-2%] w-[24%] h-[28.5%] object-contain"
      />
      <img
        src="/purple_d.png"
        alt=""
        className="absolute left-[-5.4%] -top-[-25%] w-[21%] h-[21.5%] object-contain"
      />
      <img
        src="/green.png"
        alt=""
        className="absolute right-[-1.7%] top-[52.4%] w-[150px] h-[160px] object-contain rotate-270"
      />
      <img
        src="/purple_d.png"
        alt=""
        className="absolute right-[-0.5%] top-[70.3%] w-[190px] h-[200px] object-contain rotate-270"
      />

      <h1
        className="text-6xl font-bold text-center text-blue-700 m-8"
        style={{ color: darkMode ? "#FFFFFF" : "#1D4ED8" }}
      >
        Gallery
      </h1>

      <div className="border-8 border-blue-500 w-full max-w-[1140px] relative rounded-3xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-2xl overflow-hidden"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
