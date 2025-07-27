import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext";

const fadeIn = {
  initial: { opacity: 0, x: 0 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 1 },
};

const fadeInUp1 = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8 },
};

const fadeInUp2 = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8 },
};

function LandingPage() {

  const { darkMode, setDarkMode } = useDarkMode(); 
  const bgColor = darkMode ? "#000414" : "#FFFFFF";
  const bg2 = darkMode ? "#000C3B" : "#FFFFFF";
  const textColor1 = darkMode ? "#FFFFFF" : "#0732EF";
  const textColor2 = darkMode ? "#FFFFFF" : "#000000";
  const textColor3 = darkMode ? "#87C5FF" : "#0732EF"
  const extras = darkMode ? "#1B00B2" : "#0732EF";

  return (
    <section
      className="w-full min-h-screen"
      style={{ backgroundColor: bgColor, color: textColor1 }}
    >
      <div className="sm:pt-18 pt-14 sm:px-24 px-2 sm:pb-24 pb-14">
        <motion.div {...fadeIn}>
          <div className="flex items-start justify-between">
            <div className="flex flex-col sm:-ml-10 items-start max-w-[600px]">
              <h1 className="font-bold text-xl sm:text-[4vw] leading-[1.2]">
                INNOVATION AND <br />
                ENTREPRENEURSHIP <br />
                DEVELOPMENT CENTRE
              </h1>
              <p className="sm:text-2xl text-[12px] mt-4">
                COLLEGE OF ENGINEERING TRIVANDRUM
              </p>

              <p
                className="sm:text-xl text-sm sm:mt-10 mt-6"
                style={{ color: textColor2 }}
              >
                Welcome to the IEDC CET, where innovation <br></br> meets opportunity.
                Join us in fostering entrepreneurial <br></br> spirit and transforming
                ideas into reality.
              </p>

              <div className="flex sm:gap-6 gap-4 sm:mt-10 mt-6">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-white cursor-pointer sm:px-8 sm:py-4 px-2 py-1 rounded-full sm:text-base text-sm font-semibold hover:bg-blue-800 transition"
                  style={{ backgroundColor: extras }}
                >
                  CONTACT US
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="border-2 border-blue-700 cursor-pointer sm:px-8 sm:py-4 px-2 py-1 rounded-full sm:text-base text-sm font-semibold hover:bg-blue-700 hover:text-white transition"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>

            <div className="absolute top-0 right-0">
              <img
                src="Vector 2.png"
                alt="Conference Room"
                className="sm:w-[850px] w-[270px]"
              />
            </div>
          </div>
        </motion.div>

        {darkMode ? (
          <div className="relative sm:mt-[160px] mt-[90px] flex justify-center">
            <motion.div {...fadeInUp1}>
              <img
                src="IEDC.png"
                alt="IEDC Logo"
                className="sm:w-[700px] w-[200px]"
              />
            </motion.div>

            <img
              src="/dp_d.png"
              alt=""
              className="absolute z-0 sm:-left-24 sm:-top-[65px] -top-[20px] -left-2 sm:w-44 w-12 object-contain"
            />
            <img
              src="/dp_d.png"
              alt=""
              className="absolute z-0 sm:left-20 sm:top-[97px] left-10 top-[24px] sm:w-44 w-12 object-contain"
            />
            <img
              src="/gp.png"
              alt=""
              className="absolute z-0 sm:-left-24 sm:top-[135px] -top-[20px] left-10 sm:w-44 w-12 object-contain"
            />
            <img
              src="/gp.png"
              alt=""
              className="absolute z-0 sm:left-20 sm:top-[297px] -left-2 top-[40px] sm:w-44 w-12 object-contain"
            />
            <img
              src="/gp.png"
              alt=""
              className="absolute z-0 sm:left-20 sm:-top-[65px] sm:w-44 w-12 left-10 top-[84px] object-contain"
            />

            <img
              src="/gp_d.png"
              alt=""
              className="absolute z-0 sm:right-20 sm:top-[200px] top-[70px] right-10 sm:w-44 w-12 object-contain"
            />
            <img
              src="/gp_d.png"
              alt=""
              className="absolute z-0 sm:-right-24 sm:top-[362px] top-[114px] -right-2 sm:w-44 w-12 object-contain"
            />
            <img
              src="/dp.png"
              alt=""
              className="absolute z-0 sm:right-20 sm:top-[400px] top-[124px] right-10 sm:w-44 w-12 object-contain"
            />
            <img
              src="/dp.png"
              alt=""
              className="absolute z-0 sm:-right-24 sm:top-[562px] top-[168px] -right-2 sm:w-44 w-12 object-contain"
            />
          </div>
        ) : (
          <div className="relative sm:mt-[160px] mt-[90px] flex justify-center">
            <motion.div {...fadeInUp1}>
              <img
                src="IEDC.png"
                alt="IEDC Logo"
                className="sm:w-[700px] w-[200px]"
              />
            </motion.div>

            <div className="absolute z-0 sm:w-[700px] w-[250px] h-full bg-[#0732EF] mix-blend-soft-light pointer-events-none"></div>
            <img
              src="/purple_d.png"
              alt=""
              className="absolute z-0 sm:-left-24 sm:-top-[65px] -top-[20px] -left-2 sm:w-44 w-12 object-contain"
            />
            <img
              src="/purple_d.png"
              alt=""
              className="absolute z-0 sm:left-20 sm:top-[97px] left-10 top-[24px] sm:w-44 w-12 object-contain"
            />
            <img
              src="/green.png"
              alt=""
              className="absolute z-0 sm:-left-24 sm:top-[135px] -top-[20px] left-10 sm:w-44 w-12 object-contain"
            />
            <img
              src="/green.png"
              alt=""
              className="absolute z-0 sm:left-20 sm:top-[297px] -left-2 top-[40px] sm:w-44 w-12 object-contain"
            />
            <img
              src="/green.png"
              alt=""
              className="absolute z-0 sm:left-20 sm:-top-[65px] sm:w-44 w-12 left-10 top-[84px] object-contain"
            />

            <img
              src="/green_d.png"
              alt=""
              className="absolute z-0 sm:right-20 sm:top-[200px] top-[70px] right-10 sm:w-44 w-12 object-contain"
            />
            <img
              src="/green_d.png"
              alt=""
              className="absolute z-0 sm:-right-24 sm:top-[362px] top-[114px] -right-2 sm:w-44 w-12 object-contain"
            />
            <img
              src="/purple.png"
              alt=""
              className="absolute z-0 sm:right-20 sm:top-[400px] top-[124px] right-10 sm:w-44 w-12 object-contain"
            />
            <img
              src="/purple.png"
              alt=""
              className="absolute z-0 sm:-right-24 sm:top-[562px] top-[168px] -right-2 sm:w-44 w-12 object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default LandingPage;
