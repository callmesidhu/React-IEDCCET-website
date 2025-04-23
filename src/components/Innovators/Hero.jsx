import React from "react";

const InnovatorsSection = () => {
  return (
    <div className="bg-[#F8F6F3] min-h-screen flex flex-col  px-48 py-20">
     <h1 className="text-6xl font-bold text-blue-600 mb-6 uppercase mx-14">The Innovators</h1>
    <div className=" min-h-screen flex flex-col items-center">
     
      
      <div className=" p-1">
        <img 
          src="/Innovators/innovator.png" 
          alt="The Innovators" 
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="max-w-7xl mt-6 text-gray-800 text-2xl text-center leading-relaxed">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
        in a piece of classical Latin literature from 45 BC, making it over 2000 years
        old. Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words,
      </p>
    </div>
    </div>
  );
};

export default InnovatorsSection;
