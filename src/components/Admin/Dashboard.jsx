import React, { useState } from "react";
import UpcomingEvents from "./UpcomingEvents";
import Announcements from "./Announcements";
import Achievements from "./Achievements";
import Gallery from "./Gallery";
import Faculty from "./Faculty";
import Team from "./Team";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("upcomingevents");

  return (
    <div className="flex min-h-screen text-white bg-gray-900">
      {/* Sidebar */}
      <div className="w-[300px] bg-blue-700 p-8 flex flex-col m-5 rounded-xl min-h-screen">
        <h1 className="text-3xl font-bold mb-10 text-center">Admin Panel</h1>
        <nav className="flex flex-col gap-2 ">
          <button
            onClick={() => setSelectedPage("upcomingevents")}
            className="text-lg hover:text-black font-semibold block hover:bg-white px-2 py-2 rounded-lg"
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setSelectedPage("announcements")}
            className="hover:text-black text-lg font-semibold block hover:bg-white px-2 py-2 rounded-lg"
          >
            Announcements
          </button>
          <button
            onClick={() => setSelectedPage("achievements")}
            className="hover:text-black text-lg font-semibold block hover:bg-white px-2 py-2 rounded-lg"
          >
            Achievements
          </button>
          <button
            onClick={() => setSelectedPage("gallery")}
            className="hover:text-black text-lg font-semibold block hover:bg-white px-2 py-2 rounded-lg"
          >
            Gallery
          </button>
          <button
            onClick={() => setSelectedPage("faculty")}
            className="hover:text-black text-lg font-semibold block hover:bg-white px-2 py-2 rounded-lg"
          >
            Faculty
          </button>
          <button
            onClick={() => setSelectedPage("team")}
            className="hover:text-black text-lg font-semibold block hover:bg-white px-2 py-2 rounded-lg"
          >
            Team
          </button>
        </nav>
        <button className="mt-auto bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg mt-10">
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {selectedPage === "upcomingevents" && <UpcomingEvents />}
        {selectedPage === "announcements" && <Announcements />}
        {selectedPage === "achievements" && <Achievements />}
        {selectedPage === "gallery" && <Gallery />}
        {selectedPage === "faculty" && <Faculty />}
        {selectedPage === "team" && <Team />}
      </div>
    </div>
  );
};

export default Dashboard;
