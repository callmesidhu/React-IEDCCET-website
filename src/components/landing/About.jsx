import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/About.png";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 1  },
  transition: { duration: 1 },
};

const About = () => {
  return (
    <div className="min-h-screen px-4 md:px-20 my-14 space-y-14">

      {/* Title */}
      <motion.h1
        {...fadeInUp}
        className="text-4xl md:text-5xl font-bold text-blue-700 text-center md:text-left"
      >
        IEDC CET
      </motion.h1>

      {/* Divider */}
      <motion.hr
        {...fadeInUp}
        className="border-t-2 border-blue-700 my-7"
      />

      {/* Section 1: Our Vision */}
      <motion.div
        {...fadeInUp}
        className="bg-white p-6 rounded-xl shadow-lg mb-10 border-2 border-blue-700"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Our Vision
            </h2>
            <p className="text-black text-lg leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            </p>
          </div>
          <div className="w-full md:w-[480px]">
            <img
              src={aboutimg}
              className="w-full h-[250px] rounded-lg object-cover"
              alt="Our Vision"
            />
          </div>
        </div>
      </motion.div>

      {/* Section 2: About IEDC */}
      <motion.div
        {...fadeInUp}
        className="bg-white p-6 rounded-xl shadow-lg mb-10 border-2 border-blue-700"
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              About IEDC
            </h2>
            <p className="text-black text-lg leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            </p>
          </div>
          <div className="w-full md:w-[480px]">
            <img
              src={aboutimg}
              className="w-full h-[250px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover"
              alt="About IEDC"
            />
          </div>
        </div>
      </motion.div>

      {/* Section 3: Objectives */}
      <motion.div
        {...fadeInUp}
        className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-700"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Objectives
            </h2>
            <p className="text-black text-lg leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            </p>
          </div>
          <div className="w-full md:w-[480px]">
            <img
              src={aboutimg}
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
