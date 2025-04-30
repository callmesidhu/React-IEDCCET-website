import { useState, useEffect } from "react";
import aboutimg from "../../assets/About.png";
import facultyimg from "../../assets/Faculty.png";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: aboutimg, alt: "Meeting room" },
    { id: 2, src: facultyimg, alt: "Conference" },
    { id: 3, src: aboutimg, alt: "Collaboration" },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Watch for currentIndex to reset timer

  return (
    <div className="w-full min-h-screen mx-auto p-6 flex flex-col items-center relative mb-20">
      {/* Decorative Background Shapes */}
      <img
        src="/green.png"
        alt=""
        className="absolute left-[-50px] -top-[-47px] w-[170px] h-[180px] object-contain"
      />

      <img
        src="/purple_d.png"
        alt=""
        className="absolute -left-0 -top-[-200px] w-[175px] h-[180px] object-contain"
      />

      <img
        src="/green.png"
        alt=""
        className="absolute -right-[40px] top-[418px] w-[150px] h-[160px] object-contain rotate-270"
      />

      <img
        src="/purple_d.png"
        alt=""
        className="absolute -right-[8px] top-[566px] w-[185px] h-[200px] object-contain rotate-270"
      />

      {/* Title */}
      <h1 className="text-6xl font-bold text-center text-blue-700 m-14">
        Gallery
      </h1>

      {/* Image Slider */}
      <div className="relative w-full max-w-[1140px]">
        <div className="border-6 border-blue-500 rounded-3xl overflow-hidden">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-[500px] object-cover rounded-xl transition-all duration-900 ease-in-out"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute -left-14 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full text-6xl flex items-center justify-center text-blue-700 font-bold"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute -right-14 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center text-6xl text-blue-700 font-bold"
        >
          &gt;
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              currentIndex === idx ? "bg-blue-700" : "bg-blue-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}
