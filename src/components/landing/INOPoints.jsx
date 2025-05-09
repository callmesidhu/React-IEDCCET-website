import React from "react";
import { motion } from "framer-motion";

// Scroll-triggered fade-in-up variant
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8 },
};

const INOPoints = () => {
  return (
    <div className="bg-[#F8F6F3] min-h-screen flex flex-col items-center py-10 md:py-20 px-6 md:px-12 lg:px-24 xl:px-48">

      {/* Title */}
      <motion.h1
        {...fadeInUp}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6 uppercase text-center md:mx-14"
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
            className="w-full h-full"
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
          className="max-w-3xl md:max-w-5xl lg:max-w-7xl mt-6 text-gray-800 text-lg md:text-xl lg:text-2xl text-center leading-relaxed"
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

export default INOPoints;
