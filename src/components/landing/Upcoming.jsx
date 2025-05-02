"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  FaPhone,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import image from "../../assets/section4.png"

function Section4() {
  const events = [
    { title: "Build Club", date: "12/03/2025", image },
    { title: "Tech Talk", date: "20/03/2025", image },
    { title: "Hackathon", date: "25/03/2025", image },
    { title: "Design Sprint", date: "28/03/2025", image },
    { title: "Code Night", date: "01/04/2025", image },
    { title: "Build Club", date: "12/03/2025", image },
    { title: "Tech Talk", date: "20/03/2025", image },
    { title: "Hackathon", date: "25/03/2025", image },
    { title: "Design Sprint", date: "28/03/2025", image },
    { title: "Code Night", date: "01/04/2025", image },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [isPaused, setIsPaused] = useState(false)
  const pauseTimeoutRef = useRef(null)
useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
useEffect(() => {
  if (isPaused) return

  const interval = setInterval(() => {
    nextSlide()
  }, 2500)

  return () => clearInterval(interval)
}, [currentIndex, isPaused])

// Cleanup timeouts when component unmounts
useEffect(() => {
  return () => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
    }
  }
}, [])
const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 477;
const IMAGE_RADIUS = 30;
const IMAGE_BORDER = 5;

const getCardsToShow = () => {
  if (windowWidth < 640) return 1;
  if (windowWidth < 1024) return 2;
  return 3;
};

const cardsToShow = getCardsToShow();

const gap = windowWidth < 640 ? 10 : 20;
const containerPadding = windowWidth < 640 ? 16 : 120;
const maxContainerWidth =
  IMAGE_WIDTH * cardsToShow + gap * (cardsToShow - 1) + containerPadding;

const cardWidth = Math.min(
  IMAGE_WIDTH,
  (windowWidth - containerPadding - gap * (cardsToShow - 1)) / cardsToShow
);

const cardHeight = cardWidth * (IMAGE_HEIGHT / IMAGE_WIDTH);

const nextSlide = () => {
  setCurrentIndex((prev) => (prev >= events.length - cardsToShow ? 0 : prev + 1))
}

const prevSlide = () => {
  setCurrentIndex((prev) => (prev <= 0 ? events.length - cardsToShow : prev - 1))
}

const handleManualScroll = (direction) => {
  setIsPaused(true)
  if (direction === "next") nextSlide()
  else prevSlide()

  // Clear any existing timeout
  if (pauseTimeoutRef.current) {
    clearTimeout(pauseTimeoutRef.current)
  }

  // Set a new timeout to resume auto-scrolling after 5 seconds
  pauseTimeoutRef.current = setTimeout(() => {
    setIsPaused(false)
  }, 5000)
}

const imageMiddlePoint = `calc(75% - ${cardHeight / 2}px)`
const arrowPosition = windowWidth < 640 ? "4" : "10"

return (
  <section className="w-full font-grotesk bg-[#0732EF] py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-4 relative">
    <button
      onClick={() => handleManualScroll("prev")}
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
      <h2 className="text-2xl  md:text-5xl font-bold text-white text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        Achievements
      </h2>

      <div className="relative" onMouseEnter={() => setIsPaused(false)} onMouseLeave={() => setIsPaused(false)}>
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
           {events.map((event, index) => (
  <div
    key={index}
    className="flex-shrink-0"
    style={{ width: `${cardWidth}px` }}
  >
    <div className="flex flex-col items-center">
      {/* Image container */}
      <div
        className="relative overflow-hidden  w-full"
        style={{
          height: `${cardHeight}px`,
          borderRadius: `${IMAGE_RADIUS}px`,
          padding: `${IMAGE_BORDER}px`,
        }}
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          style={{
            borderRadius: `${IMAGE_RADIUS - IMAGE_BORDER}px`,
          }}
        />
      </div>


                  <div className="bg-custom-blue p-2 sm:p-3 md:p-4 w-full text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-sm sm:text-base text-white mb-2">{event.date}</p>
                    <p className="text-sm sm:text-base text-white text-justify">{event.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <button
      onClick={() => handleManualScroll("next")}
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
)}

export default Section4
