import React from "react";
import aboutimg from "../../assets/About.png";

const About = () => {
  return (
    <div className="min-h-screen mx-20 my-14">
      <h1 className="text-5xl font-bold text-blue-700 mb-12 ">IEDC CET</h1>

      <hr className="border-t-2 border-blue-700 my-7" />

      <div className="bg-white p-6 rounded-xl  mb-10 border-2 border-blue-700">
        <div className="flow-root items-center gap-8">
          <div className="float-left w-3/5  pr-6">
            <h2 className="text-4xl font-bold text-blue-700 mb-4 relative ">
              Our Vision
            </h2>
            <p className="text-black text-lg leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words,
            </p>
          </div>
          <div className="float-right">
            <img
              src={aboutimg}
              className="w-[480px] h-[250px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-10 border-2 border-blue-700">
        <div className="flow-root items-center gap-8">
          <div className="float-right w-3/5 pl-6">
            <h2 className="text-4xl font-bold text-blue-700 mb-4 relative">
              About IEDC
            </h2>
            <p className="text-black text-lg leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words,
            </p>
          </div>
          <div className="float-left">
            <img
              src={aboutimg}
              className="w-[480px] h-[250px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-10 border-2 border-blue-700 ">
        <div className="flow-root items-center gap-8">
          <div className="float-left w-3/5 pr-6">
            <h2 className="text-4xl font-bold text-blue-700 mb-4 relative ">
              Objectives
            </h2>
            <p className="text-black text-lg leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words,
            </p>
          </div>
          <div className="float-right ">
            <img
              src={aboutimg}
              className="w-[480px] h-[250px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
