import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext"; // adjust path if needed

// Scroll-triggered fade-in-up variant
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8 },
};

const INOPoints = () => {
  const { darkMode } = useDarkMode(); // custom hook from context
  const bgColor = darkMode ? "#00092C" : "#F8F6F3";
  const textColor = darkMode ? "#FFFFFF" : "#000000";

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 md:py-20 px-6 md:px-12 lg:px-24 xl:px-48 transition-colors duration-300"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Title */}
      <motion.h1
        {...fadeInUp}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center uppercase mb-6"
        style={{ color: darkMode ? "#66CCFF" : "#1E3A8A" }} // blue in light, lighter cyan in dark
      >
        Introducing INO Points
      </motion.h1>

      <div className="flex flex-col items-center w-full">
        {/* Video Embed */}
        <motion.div
          {...fadeInUp}
          className="w-full max-w-4xl aspect-video mb-6 md:mb-8"
        >
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/CrJgOZmH4vA?si=Hx6bBcKJe6ddJujV"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeInUp}
          className="max-w-3xl md:max-w-5xl lg:max-w-7xl mt-6 text-lg md:text-xl lg:text-2xl text-center leading-relaxed"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words.
        </motion.p>
      </div>

      {/* Footer */}
      <footer
        style={{ backgroundColor: bgColor, color: textColor }}
        className="w-full py-12 mt-20 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300 text-center"
      >
        <p className="text-base md:text-lg">
          &copy; {new Date().getFullYear()} INO Points. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default INOPoints;
