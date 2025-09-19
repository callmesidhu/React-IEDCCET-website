import React from "react";
import { motion } from "framer-motion";
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";
import objectives from "../../assets/objectives.JPG";
import { useDarkMode } from "../../context/DarkModeContext"; 

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3  },
  transition: { duration: 1 },
};

const About = () => {

   const {darkMode,setDarkMode} = useDarkMode();
   const bgColor = darkMode ? "#000414" : "#FFFFFF";
   const textColor = darkMode ? "#FFFFFF" : "#000000";

  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="min-h-screen px-4 md:p-20 pb-10 space-y-14"
    >
      {/* Title */}
      <motion.h1
        {...fadeInUp}
        className="text-4xl md:text-5xl font-bold text-center md:text-left"
        style={{ color: darkMode ? "#FFFFFF" : "#1D4ED8" }}
      >
        IEDC CET
      </motion.h1>

      {/* Divider */}
      <motion.hr
        {...fadeInUp}
        className="border-t-2 border-blue-700 my-6"
        style={{ borderColor: darkMode ? "#9DAFFF" : "#1D4ED8" }}
      />

      {/* Section 1: Our Vision */}
      <motion.div
        {...fadeInUp}
        className="bg-white p-6 rounded-xl shadow-lg mb-10 border-2"
        style={{
          borderColor: darkMode ? "#0676D6" : "#1D4ED8",
          backgroundColor: darkMode ? "#000C3B" : "#FFFFFF",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-3/5">
            <h2
              className="text-3xl md:text-4xl font-bold  mb-4"
              style={{ color: darkMode ? "#4CAFFF" : "#1D4ED8" }}
            >
              Our Vision
            </h2>
            <p
              className=" text-lg leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >
              To establish IEDC CET as a center of excellence in technology-driven entrepreneurship, fostering a sustainable ecosystem that empowers students to become innovators, founders, and industry leaders by integrating cutting-edge technologies, industry collaborations, and startup support.
            </p>
          </div>
          <div className="w-full md:w-[480px]">
            <img
              src={vision}
              className="w-full h-[250px] rounded-lg object-cover"
              alt="Our Vision"
            />
          </div>
        </div>
      </motion.div>

      {/* Section 2: About IEDC */}
      <motion.div
        {...fadeInUp}
        className="bg-white p-6 rounded-xl shadow-lg mb-10 border-2 "
        style={{
          borderColor: darkMode ? "#0676D6" : "#1D4ED8",
          backgroundColor: darkMode ? "#000C3B" : "#FFFFFF",
        }}
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-3/5">
            <h2
              className="text-3xl md:text-4xl font-bold  mb-4"
              style={{ color: darkMode ? "#4CAFFF" : "#1D4ED8" }}
            >
              Our Mission
            </h2>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >
            • To promote an innovation-driven entrepreneurial culture among students by providing structured mentorship, industry exposure, and hands-on experience.
            </p>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >• To foster enterprise among budding technopreneurs and create more employment opportunities by nurturing high-potential student startups.
            </p>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >• To bridge the gap between industry and academia by facilitating strategic collaborations and knowledge-sharing platforms.
            </p>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >• To support budding entrepreneurs through grants and foster an entrepreneurial mindset in the academic community, ensuring long-term sustainability of startup ventures.
            </p>
          </div>
          <div className="w-full md:w-[480px]">
            <img
              src={mission}
              className="w-full h-[250px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover"
              alt="About IEDC"
            />
          </div>
        </div>
      </motion.div>

      {/* Section 3: Objectives */}
      <motion.div
        {...fadeInUp}
        className="bg-white p-6 rounded-xl shadow-lg border-2"
        style={{
          borderColor: darkMode ? "#0676D6" : "#1D4ED8",
          backgroundColor: darkMode ? "#000C3B" : "#FFFFFF",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-3/5">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: darkMode ? "#4CAFFF" : "#1D4ED8" }}
            >
              Objectives
            </h2>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >
            • Facilitate experiential learning through workshops and mentorship aligned with the structured process.
            </p>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >• Establish strong partnerships with industry leaders, research organizations, and startup enablers.
            </p>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >• Support the development of market-ready products and startups with incubation support.
            </p>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >• Promote sustainable innovation addressing regional and global challenges.
            </p>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >• Build entrepreneurial and intrapreneurial skills through continuous engagement.
            </p>
            <p
              className="text-black text-lg p-2 leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
            >• Create a structured methodology to build entrepreneurs from CET. The IgnitES 5-phase program, already approved by the College Council and spread across 8 semesters, will be used as the foundational guideline and framework. This program can be adapted as necessary to meet evolving institutional and industry needs.
            </p>
          </div>
          <div className="w-full md:w-[480px]">
            <img
              src={objectives}
              className="w-full h-[250px] rounded-lg object-cover"
              alt="Objectives"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
