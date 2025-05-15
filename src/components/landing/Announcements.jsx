import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext"; 

const announcements = [
  {
    date: "March 2, 2025",
    title: "Quickfolio",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    date: "March 2, 2025",
    title: "Quickfolio",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    date: "March 2, 2025",
    title: "Quickfolio",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    date: "March 2, 2025",
    title: "Quickfolio",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    date: "March 2, 2025",
    title: "Quickfolio",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

// Fade-in-up variant
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.8 },
  transition: { duration: 0.6 },
};

const Announcements = () => {

  const { darkMode, setDarkMode } = useDarkMode();
  const bgColor = darkMode ? "#000414" : "#FFFFFF";
  
  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="border-4 border-blue-700 rounded-2xl p-12 pr-6 max-w-7xl overflow-y-auto"
        style={{ borderColor: darkMode ? "#2164F6" : "#1D4ED8" ,
          backgroundColor: darkMode ? "#000C3B" : "#FFFFFF",
        }}
      >
        <motion.h1
          {...fadeInUp}
          className="text-5xl font-bold text-blue-700 mb-8"
          style={{ color: darkMode ? "#FFFFFF" : "#1D4ED8" }}
        >
          Announcements
        </motion.h1>

        <div className="flex flex-col gap-8 h-96 overflow-y-scroll pr-10 rounded-lg">
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 10px;
            }
            div::-webkit-scrollbar-track {
              background: ${darkMode ? "#000000" : "#eff6ff"};
              border-radius: 4px;
              border: 1px solid grey;
            }
            div::-webkit-scrollbar-thumb {
              background-color: ${darkMode ? "#FFFFFF" : "#cccccc"};
              border-radius: 6px;
              height: 10px;
            }
          `}</style>

          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="bg-gray-200 border-2 border-gray-700 rounded-md p-6 shadow-sm"
              style={{
                borderColor: darkMode ? "#9DAFFF" : "#374151",
                backgroundColor: darkMode ? "#091B62" : "#E5E7EB", // gray-800 : gray-200
              }}
            >
              <p
                className="text-xs font-bold text-blue-700 uppercase mb-1"
                style={{ color: darkMode ? "#FFFFFF" : "#1D4ED8" }}
              >
                {announcement.date}
              </p>
              <h2
                className="text-2xl font-bold text-blue-700 mb-2"
                style={{ color: darkMode ? "#FFFFFF" : "#1D4ED8" }}
              >
                {announcement.title}
              </h2>
              <p
                className=" font-semibold mr-4"
                style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
              >
                {announcement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;