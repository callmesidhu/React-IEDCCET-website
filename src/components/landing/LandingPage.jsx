import React from "react";
import { Link } from "react-scroll";

function LandingPage() {
  return (
    <section className="w-full min-h-screen bg-white">
      
      <div className="pt-24 px-24">

        <div className="flex items-start justify-between">

          <div className="flex flex-col items-start max-w-[600px]">
            <h1 className="text-blue-700 font-bold text-6xl leading-[1.2]">
              INNOVATION AND <br />
              ENTREPRENEURSHIP <br />
              DEVELOPMENT CENTRE
            </h1>
            <p className="text-blue-600 text-xl mt-4">
              COLLEGE OF ENGINEERING TRIVANDRUM
            </p>

            <p className="text-gray-600 text-lg mt-10">
              Welcome to the IEDC CET, where innovation meets opportunity. Join us in fostering entrepreneurial spirit and transforming ideas into reality.
            </p>

            <div className="flex gap-6 mt-10">
              <Link
                to="contact"
                smooth={true}      
                duration={500}
                className="bg-blue-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-800 transition"
              >
                CONTACT US
              </Link>
              <Link
                to="about"
                smooth={true}      
                duration={500}
                className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 hover:text-white transition"
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
            className="w-[850px]"
            />
        </div>
        </div>

        <div className="relative mt-[160px] flex justify-center">

        <img
          src="IEDC.png"
          alt="IEDC Logo"
          className="w-[700px]"
        />
        <div className="absolute w-[700px] h-full bg-[#0732EF] mix-blend-soft-light pointer-events-none">
        </div>
        <img
          src="/purple_d.png"
          alt=""
          className="absolute -left-24 -top-[65px] w-44 h-44 object-contain"
        />
        <img
          src="/purple_d.png"
          alt=""
          className="absolute left-20 top-[97px] w-44 h-44 object-contain"
        />
        <img
          src="/green.png"
          alt=""
          className="absolute -left-24 top-[135px] w-44 h-44 object-contain"
        />
        <img
          src="/green.png"
          alt=""
          className="absolute left-20 top-[297px] w-44 h-44 object-contain"
        />
        <img
          src="/green.png"
          alt=""
          className="absolute left-20 -top-[65px] w-44 h-44 object-contain"
        />
    
        <img
          src="/green_d.png"
          alt=""
          className="absolute right-20 top-[200px] w-44 h-44 object-contain"
        />
        <img
          src="/green_d.png"
          alt=""
          className="absolute -right-24 top-[362px] w-44 h-44 object-contain"
        />
        <img
          src="/purple.png"
          alt=""
          className="absolute right-20 top-[400px] w-44 h-44 object-contain"
        />
        <img
          src="/purple.png"
          alt=""
          className="absolute -right-24 top-[562px] w-44 h-44 object-contain"
        />

        </div>

        <div className="border-2 border-blue-700 rounded-xl mt-12 p-10 max-w-3xl mx-auto text-center">
          <p className="text-blue-700 font-bold text-4xl leading-relaxed">
            “INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER”
          </p>
          <p className="text-gray-500 text-base mt-2">
            - Steve Jobs
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 mt-24">
          
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
