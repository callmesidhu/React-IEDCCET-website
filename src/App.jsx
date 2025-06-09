import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Innovators from "./pages/Innovators";
import Startups from "./pages/Startups";
import InnovatorPortal from "./pages/InnovatorPortal";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovators" element={<Innovators />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/portal" element={< InnovatorPortal/>} />
      </Routes>
    </Router>
  );
}

export default App;
