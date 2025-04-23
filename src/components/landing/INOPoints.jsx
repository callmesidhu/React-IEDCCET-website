import React from "react";

const INOPoints = () => {
  return (
    <div className="bg-[#F8F6F3] min-h-screen flex flex-col items-center  px-48 py-20">
     <h1 className="text-6xl font-bold text-blue-600 mb-6 uppercase mx-14">Introducing INO Points</h1>
    <div className=" min-h-screen flex flex-col items-center">
     
      
      <div className=" w-full max-w-4xl aspect-video">
          <iframe
            className="w-full h-full" // Increased height for the iframe
            src="https://www.youtube.com/embed/CrJgOZmH4vA?si=Hx6bBcKJe6ddJujV"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>      </div>

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

export default INOPoints;
