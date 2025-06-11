import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/configs"; // adjust path as needed
import { useState,useEffect } from "react";
import aboutimg from "../../assets/About.png";
import facultyimg from "../../assets/Faculty.png";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Gallery() {
  

  const { darkMode, setDarkMode } = useDarkMode();
  const bgColor = darkMode ? "#000414" : "#FFFFFF";


  const [images,setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Gallery"));
        const imagesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div
      className="w-full min-h-[120vh] mx-auto  flex flex-col items-center relative px-4 pt-10 pb-20 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={darkMode ? "/blue1.png" : "/green.png"}
        alt=""
        className={
          darkMode
            ? "absolute left-[-2%] top-[-3%] w-[12%] h-[20%] object-contain md:-left-[1.2%] md:top-[-1.1%] md:w-[8.5%] md:h-[32.5%]"
            : "absolute left-[-2%] -top-[-3%] w-[15%] h-[20%] object-contain  md:left-[-10.7%] md:-top-[-4.4%] md:w-[20%] md:h-[26.5%] md:object-contain"
        }
      />

    
       
      <img
        src={darkMode ? "/darkblue.png" : "/purple_d.png"}
        alt=""
        className={
          darkMode
            ? "absolute left-[-4.8%] -top-[-25%] w-[20.5%] h-[20%] object-contain"
            : "absolute left-[-4.8%] -top-[-25%] w-[20%] h-[20%] object-contain"
        }
      />

      <img
        src={darkMode ? "/darkblue2.png" : "/green.png"}
        alt=""
        className={
          darkMode
            ? "absolute  right-[-7.5%] top-[48.3%] w-[21.8%] h-[26.5%] object-contain"
            : "absolute  right-[-8.8%] top-[49.5%] w-[20%] h-[22.5%] object-contain rotate-270"
        }
      />

      <img
        src={darkMode ? "/blue2.png" : "/purple1.png"}
        alt=""
        className={
          darkMode
            ? "absolute right-[-4%] top-[70.7%] w-[19%] h-[21.8%] object-contain "
            : "absolute right-[-4.9%] top-[70.6%] w-[21%] h-[22%] object-contain"
        }
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
          
          className="rounded-2xl overflow-hidden"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.imageUrl}
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
