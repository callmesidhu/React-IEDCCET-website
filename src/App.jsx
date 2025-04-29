import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Innovators from "./pages/Innovators";
import Startups from "./pages/Startups";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovators" element={<Innovators />} />
        <Route path="/startups" element={<Startups />} />
      </Routes>
    </Router>
  );
}

export default App;
