import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext"; 

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3  },
  transition: { duration: 1 },
};

const Quote = () => {
    
    const { darkMode, setDarkMode } = useDarkMode(); 
    const bgColor = darkMode ? "#000414" : "#FFFFFF";
    const bg2 = darkMode ? "#000C3B" : "#FFFFFF";
    const textColor1 = darkMode ? "#FFFFFF" : "#0732EF";
    const textColor2 = darkMode ? "#FFFFFF" : "#000000";
    const textColor3 = darkMode ? "#87C5FF" : "#0732EF"
    const extras = darkMode ? "#1B00B2" : "#0732EF";

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="px-4 md:p-20 space-y-14 -mt-24 pb-14"
    >
      <div>
        <motion.div {...fadeInUp}
            className="relative z-10 border-2 border-blue-700 rounded-xl sm:mt-24 mt-24 p-10 max-w-3xl mx-auto text-center"
            style={{ backgroundColor: bg2 }}
        >
            <p
            className="text-blue-700 font-bold sm:text-4xl text-xl leading-relaxed"
            style={{ color: textColor1 }}
            >
            “INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER”
            </p>
            <p
            className="text-gray-500 text-base mt-2"
            style={{ color: textColor2 }}
            >
            - Steve Jobs
            </p>
        </motion.div>

        <motion.div {...fadeInUp} className="sm:grid flex flex-col grid-cols-3 gap-12 sm:mt-24 mt-20">
            <div
            className="border-2 border-blue-700 rounded-2xl p-8 flex flex-col items-center text-center"
            style={{ backgroundColor: bg2 }}
            >
            <div className="text-5xl mb-6">💡</div>
            <h3
                className="text-blue-700 font-bold text-2xl mb-4"
                style={{ color: textColor3 }}
            >
                Innovation
            </h3>
            <p
                className="text-gray-600 text-base"
                style={{ color: textColor2 }}
            >
                We regularly host ideathons and challenges to help kindle the
                fire of innovation and creativity in budding entrepreneurs on
                campus, and bring about a culture of idea-driven development in
                college.
            </p>
            </div>

            <div
            className="border-2 border-blue-700 rounded-2xl p-8 flex flex-col items-center text-center"
            style={{ backgroundColor: bg2, color: textColor1 }}
            >
            <div className="text-5xl mb-6">🧠</div>
            <h3
                className="text-blue-700 font-bold text-2xl mb-4"
                style={{ color: textColor3 }}
            >
                Entrepreneurship
            </h3>
            <p
                className="text-gray-600 text-base"
                style={{ color: textColor2 }}
            >
                We provide assistance to startup founders in the college, by
                collaborating with Kerala Startup Mission and CET TBI. We are
                also supported by our illustrious alumni and other leading
                entrepreneurs and innovators.
            </p>
            </div>

            <div
            className="border-2 border-blue-700 rounded-2xl p-8 flex flex-col items-center text-center"
            style={{ backgroundColor: bg2, color: textColor1 }}
            >
            <div className="text-5xl mb-6">🔧</div>
            <h3
                className="text-blue-700 font-bold text-2xl mb-4"
                style={{ color: textColor3 }}
            >
                Technology
            </h3>
            <p
                className="text-gray-600 text-base"
                style={{ color: textColor2 }}
            >
                We regularly conduct workshops, competitions, hackathons and
                panel discussions to delve into the latest technologies and
                processes that drive the industries of today.
            </p>
            </div>
        </motion.div>
        </div>
    </div>
  );
};

export default Quote;
