import React from "react";
import { Element } from "react-scroll";

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

function Home() {
  return (
    <>
      <Navbar />

      <Element name="landing">
        <LandingPage />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="announcements">
        <Announcements />
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

      <Element name="inopoints">
        <INOPoints />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

export default Home;
