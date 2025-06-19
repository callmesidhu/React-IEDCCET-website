import React from "react";
import { Element } from "react-scroll";
import { useEffect } from "react";
import { scroller } from "react-scroll";

import Navbar from "../components/landing/Navbar";
import LandingPage from "../components/landing/LandingPage";
import About from "../components/landing/About";
import Announcements from "../components/landing/Announcements";
import Gallery from "../components/landing/Gallery";
import Faculty from "../components/landing/Faculty";
import Team from "../components/landing/Team";
import Feedback from "../components/landing/Feedback";
import INOPoints from "../components/landing/INOPoints";
import Contact from "../components/landing/Contact";
import Section4 from "../components/landing/Upcoming";
import Section6 from "../components/landing/Achievements";
import Footer from "../components/landing/Footer";
function Home() {
  useEffect(() => {
    const sectionId = localStorage.getItem("scrollToSection");
    if (sectionId) {
      scroller.scrollTo(sectionId, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -100,
      });
      localStorage.removeItem("scrollToSection");
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
      <Element name="landing">
        <LandingPage />
      </Element>

      <Element name="about">
        <About />
      </Element>
      <Element name="section4">
        <Section4 />
      </Element>
      <Element name="announcements">
        <Announcements />
      </Element>
     
      <Element name="section6">
        <Section6 />
      </Element>
      
      <Element name="inopoints">
        <INOPoints />
      </Element>

      <Element name="gallery">
        <Gallery />
      </Element>

      <Element name="faculty">
        <Faculty />
      </Element>

      <Element name="team">
        <Team />
      </Element>

      <Element name="feedback">
        <Feedback />
      </Element>


      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
      
     </div>
     </>
  );
}

export default Home;
