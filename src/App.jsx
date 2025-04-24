import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Innovators from "./pages/Innovators";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovators" element={<Innovators />} />
      </Routes>
    </Router>
  );
}

export default App;
