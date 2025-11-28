import React, { useEffect,useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../context/DarkModeContext"; 
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/configs";



// Fade-in-up variant
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.1, once: true }, // triggers when only 10% is visible
  transition: { duration: 0.6 },
};

const Announcements = () => {

  const [announcements,setAnnouncements] = useState([]);

  const staticAnnouncement = {
    id: "static-1",
    date: "26-11-2025",
    //title: "CII – Industrial Visit",
    description:
      "A visit has been arranged for the faculty members from CET and CETSOM by the Confederation of Indian Industries on 26/11/2025 to discuss internship, entrepreneurial and innovation opportunities at Bio Life Sciences Park, Thonnakkal, Trivandrum.",
    images: [
      "https://res-console.cloudinary.com/dxhoy2m9o/thumbnails/v1/image/upload/v1764256334/cGhvdG9fMjAyNS0xMS0yN18yMC0zOC00MF9qNnh2bjk=/drilldown",
      "https://res-console.cloudinary.com/dxhoy2m9o/thumbnails/v1/image/upload/v1764256282/cGhvdG9fMjAyNS0xMS0yN18yMC0zOC01MV9hb3BzNno=/drilldown",
    ],
  };


  const { darkMode, setDarkMode } = useDarkMode();
  const bgColor = darkMode ? "#000414" : "#FFFFFF";
  
  useEffect(() =>{
     const fetchAnnouncements = async () =>{
      try{
        const querySnapshot = await getDocs(collection(db, "Announcements"));
        const announcementsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched Announcements: ", announcementsData);
        console.log("Static Announcement: ", staticAnnouncement);
        // Add hardcoded announcement before firebase announcements
        setAnnouncements([staticAnnouncement, ...announcementsData]);
       

      }catch(error){
        console.error("Error fetching announcements: ",error);
      }
     }

     fetchAnnouncements();
  },[]);

  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="border-4 rounded-2xl p-6 md:p-12 pr-6  w-[90%] md:max-w-7xl overflow-y-auto"
        style={{
          borderColor: darkMode ? "#2164F6" : "#1D4ED8",
          backgroundColor: darkMode ? "#000C3B" : "#FFFFFF",
        }}
      >
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-5xl font-bold  mb-8"
          style={{ color: darkMode ? "#FFFFFF" : "#1D4ED8" }}
        >
          Announcements
        </motion.h1>

        <div className="flex flex-col gap-8 h-96 overflow-y-scroll pr-6  md:pr-10 rounded-lg">
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 10px;
            }
            div::-webkit-scrollbar-track {
              background: ${darkMode ? "#000000" : "#eff6ff"};
              border-radius: 4px;
              border: 1px solid grey;
            }
            div::-webkit-scrollbar-thumb {
              background-color: ${darkMode ? "#FFFFFF" : "#cccccc"};
              border-radius: 6px;
              height: 10px;
            }
          `}</style>

          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="bg-gray-200  border-2 border-gray-700 rounded-md p-6 shadow-sm"
              style={{
                borderColor: darkMode ? "#9DAFFF" : "#374151",
                backgroundColor: darkMode ? "#091B62" : "#E5E7EB", // gray-800 : gray-200
              }}
            >
              <p
                className="text-base font-bold text-blue-700 uppercase mb-1"
                style={{ color: darkMode ? "#FFFFFF" : "#1D4ED8" }}
              >
                {announcement.date}
              </p>
              <h2
                className="text-2xl font-bold text-blue-700 mb-2"
                style={{ color: darkMode ? "#FFFFFF" : "#1D4ED8" }}
              >
                {announcement.title}
              </h2>
              <p
                className="text-base font-semibold mr-4"
                style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
              >
                {announcement.description}
              </p>

              {announcement.images && (
                <div className="my-4 flex gap-4 flex-wrap">
                  {announcement.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Announcement"
                      className="md-w-[48%] rounded-md shadow-md border"
                    />
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;