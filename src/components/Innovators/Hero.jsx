import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext";

const InnovatorsSection = () => {
  const { darkMode } = useDarkMode();
  const bgColor = darkMode ? "#00092C" : "#F8F6F3";
  const textColor = darkMode ? "#FFFFFF" : "#1E40AF"; // blue-600 or white

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen flex flex-col items-center py-10 px-6 md:px-12 lg:px-24 xl:px-48 transition-colors duration-300"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase text-center md:mx-14"
        style={{ color: textColor }}
      >
        The Innovators
      </motion.h1>

      <div className="flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-md md:max-w-3xl sm:max-w-xl lg:max-w-5xl p-2"
        >
          <img
            src="/Innovators/innovator.png"
            alt="The Innovators"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl md:max-w-5xl lg:max-w-7xl mt-8 text-lg md:text-xl lg:text-2xl text-center leading-relaxed"
          style={{ color: textColor }}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words,
        </motion.p>
      </div>
    </div>
  );
};

export default InnovatorsSection;
