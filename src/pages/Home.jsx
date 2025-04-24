import React from "react";

import Contact from "../components/landing/Contact"; 
import INOPoints from "../components/landing/INOPoints"; 
import Faculty from "../components/landing/Faculty";
import Team from "../components/landing/Team";
import Feedback from "../components/landing/Feedback";

function Home() {
  return (
    <>
      <Faculty/>
      <Team/>
      <Feedback/>
      <INOPoints/>
      <Contact />
        </>
  );
}

export default Home;