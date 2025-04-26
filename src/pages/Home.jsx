import React from "react";

import Contact from "../components/landing/Contact"; 
import INOPoints from "../components/landing/INOPoints"; 
import Faculty from "../components/landing/Faculty";
import Team from "../components/landing/Team";
import Feedback from "../components/landing/Feedback";

import Gallery from "../components/landing/Gallery";
import Announcements from "../components/landing/Announcements";
import About from "../components/landing/About";

function Home() {
  return (
    <>
      
      <About />
      <Announcements />
      <Gallery />
      <Faculty/>
      <Team/>
      <Feedback/>
      <INOPoints/>
      <Contact />
        </>
  );
}

export default Home;