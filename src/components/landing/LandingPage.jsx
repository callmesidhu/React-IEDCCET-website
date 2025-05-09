import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <section className="w-full min-h-screen bg-white">
      
      <div className="sm:pt-24 mt-16 sm:px-24 px-2">

        <div className="flex items-start justify-between">

          <div className="flex flex-col items-start max-w-[600px]">
            <h1 className="text-blue-700 font-bold text-xl sm:text-6xl leading-[1.2]">
              INNOVATION AND <br />
              ENTREPRENEURSHIP <br />
              DEVELOPMENT CENTRE
            </h1>
            <p className="text-blue-600 sm:text-xl text-sm mt-4">
              COLLEGE OF ENGINEERING TRIVANDRUM
            </p>

            <p className="text-gray-600 sm:text-lg text-sm sm:mt-10 mt-6">
              Welcome to the IEDC CET, where innovation meets opportunity. Join us in fostering entrepreneurial spirit and transforming ideas into reality.
            </p>

            <div className="flex sm:gap-6 gap-4 sm:mt-10 mt-6">
              <Link
                to="contact"
                smooth={true}      
                duration={500}
                className="bg-blue-700 text-white sm:px-8 sm:py-4 px-2 py-1 rounded-full sm:text-base text-sm font-semibold hover:bg-blue-800 transition"
              >
                CONTACT US
              </Link>
              <Link
                to="about"
                smooth={true}      
                duration={500}
                className="border-2 border-blue-700 text-blue-700 sm:px-8 sm:py-4 px-2 py-1 rounded-full sm:text-base text-sm font-semibold hover:bg-blue-700 hover:text-white transition"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

        <div
            className="absolute top-0 right-0"
        >
        <img
            src="Vector 2.png"
            alt="Conference Room"
            className="sm:w-[850px] w-[270px]"
            />
        </div>
        </div>

        <div className="relative sm:mt-[160px] mt-[90px] flex justify-center">

        <img
          src="IEDC.png"
          alt="IEDC Logo"
          className="sm:w-[700px] w-[200px]"
        />
        <div className="absolute sm:w-[700px] w-[250px] h-full bg-[#0732EF] mix-blend-soft-light pointer-events-none">
        </div>
        <img
          src="/purple_d.png"
          alt=""
          className="absolute sm:-left-24 sm:-top-[65px] -top-[20px] -left-2 sm:w-44 w-12 object-contain"
        />
        <img
          src="/purple_d.png"
          alt=""
          className="absolute sm:left-20 sm:top-[97px] left-10 top-[24px] sm:w-44 w-12 object-contain"
        />
        <img
          src="/green.png"
          alt=""
          className="absolute sm:-left-24 sm:top-[135px] -top-[20px] left-10 sm:w-44 w-12 object-contain"
        />
        <img
          src="/green.png"
          alt=""
          className="absolute sm:left-20 sm:top-[297px] -left-2 top-[40px] sm:w-44 w-12 object-contain"
        />
        <img
          src="/green.png"
          alt=""
          className="absolute sm:left-20 sm:-top-[65px] sm:w-44 w-12 left-10 top-[84px] object-contain"
        />
    
        <img
          src="/green_d.png"
          alt=""
          className="absolute sm:right-20 sm:top-[200px] top-[70px] right-10 sm:w-44 w-12 object-contain"
        />
        <img
          src="/green_d.png"
          alt=""
          className="absolute sm:-right-24 sm:top-[362px] top-[114px] -right-2 sm:w-44 w-12 object-contain"
        />
        <img
          src="/purple.png"
          alt=""
          className="absolute sm:right-20 sm:top-[400px] top-[124px] right-10 sm:w-44 w-12 object-contain"
        />
        <img
          src="/purple.png"
          alt=""
          className="absolute sm:-right-24 sm:top-[562px] top-[168px] -right-2 sm:w-44 w-12 object-contain"
        />

        </div>

        <div className="border-2 border-blue-700 rounded-xl sm:mt-12 mt-24 p-10 max-w-3xl mx-auto text-center">
          <p className="text-blue-700 font-bold sm:text-4xl text-xl leading-relaxed">
            “INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER”
          </p>
          <p className="text-gray-500 text-base mt-2">
            - Steve Jobs
          </p>
        </div>

        <div className="sm:grid flex flex-col grid-cols-3 gap-12 sm:mt-24 mt-20">
          
          <div className="border-2 border-blue-700 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="text-5xl mb-6">💡</div>
            <h3 className="text-blue-700 font-bold text-2xl mb-4">
              Innovation
            </h3>
            <p className="text-gray-600 text-base">
              We regularly host ideathons and challenges to help kindle the fire of innovation and creativity in budding entrepreneurs on campus, and bring about a culture of idea-driven development in college.
            </p>
          </div>

          <div className="border-2 border-blue-700 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-blue-700 font-bold text-2xl mb-4">
              Entrepreneurship
            </h3>
            <p className="text-gray-600 text-base">
              We regularly conduct workshops, competitions, hackathons and panel discussion to delve into the latest technologies and processes that drive the industries of today.
            </p>
          </div>

          <div className="border-2 border-blue-700 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="text-5xl mb-6">🔧</div>
            <h3 className="text-blue-700 font-bold text-2xl mb-4">
              Technology
            </h3>
            <p className="text-gray-600 text-base">
              We provide assistance to startup founders in the college, by collaborating with Kerala Startup Mission and CET TBI. We are also supported by our illustrious alumni and other leading entrepreneurs and innovators.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default LandingPage;
