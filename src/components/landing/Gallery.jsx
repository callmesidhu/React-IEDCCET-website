import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aboutimg from "../../assets/About.png";
import facultyimg from "../../assets/Faculty.png";

export default function Gallery() {
  const images = [
    { id: 1, src: aboutimg, alt: "Meeting room" },
    { id: 2, src: facultyimg, alt: "Conference" },
    { id: 3, src: aboutimg, alt: "Collaboration" },
  ];

  return (
    <div className="w-full min-h-screen mx-auto p-6 flex flex-col items-center relative mb-20">
      <img
        src="/green.png"
        alt=""
        className="absolute left-[0px] -top-[-47px] w-[170px] h-[180px] object-contain"
      />
      <img
        src="/purple_d.png"
        alt=""
        className="absolute left-0 -top-[-200px] w-[175px] h-[180px] object-contain"
      />
      <img
        src="/green.png"
        alt=""
        className="absolute right-[-5px] top-[418px] w-[150px] h-[160px] object-contain rotate-270"
      />
      <img
        src="/purple_d.png"
        alt=""
        className="absolute right-[-5px] top-[566px] w-[185px] h-[200px] object-contain rotate-270"
      />

      <h1 className="text-6xl font-bold text-center text-blue-700 m-8">
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
