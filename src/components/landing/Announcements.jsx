import React from "react";

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

const Announcements = () => {
  return (
    <div className="min-h-screen  bg-white flex items-center justify-center">
      <div className="border-3 border-blue-700 rounded-2xl p-12 pr-6  max-w-7xl  overflow-y-auto">
        <h1 className="text-5xl font-bold text-blue-700 mb-8">Announcements</h1>

        <div className="flex flex-col gap-8 h-96 overflow-y-scroll pr-10 rounded-lg">
          
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 10px;
            }
            div::-webkit-scrollbar-track {
              background: #eff6ff;
              border-radius: 4px;
              border: 1px solid grey;
            }
            div::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 6px;
                         
            }
          `}</style>
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="bg-gray-200 border border-gray-700 rounded-md p-6 shadow-sm"
            >
              <p className="text-xs font-bold text-blue-700 uppercase mb-1">
                {announcement.date}
              </p>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                {announcement.title}
              </h2>
              <p className="text-black font-semibold mr-4">
                {announcement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
