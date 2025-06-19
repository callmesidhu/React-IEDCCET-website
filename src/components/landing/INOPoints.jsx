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
                <video
                  className="w-full h-full rounded-xl shadow-lg"
                  src="https://iedc-cet-website.vercel.app/Videos/INO.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>


        {/* Description */}
        <motion.p
          {...fadeInUp}
          className="max-w-3xl md:max-w-5xl lg:max-w-7xl mt-6 text-lg md:text-xl lg:text-2xl text-center leading-relaxed"
        >
          Introducing  𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦

A revolution in how CET thinks.

Your work and hardships will now be recognized by 𝗜𝗘𝗗𝗖 𝗖𝗘𝗧.

Earn through registrations to events and workshops

Redeem cash prize and vouchers.

So what are you waiting for !!

Start farming your INO POINTS now.

𝗖𝗢𝗠𝗣𝗘𝗧𝗘 𝗖𝗢𝗟𝗟𝗘𝗖𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧 
        </motion.p>
      </div>

    </div>
  );
};

export default INOPoints;
