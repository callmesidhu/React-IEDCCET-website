<<<<<<< HEAD
import Feedback from "./pages/Feedback";
import Faculty from "./pages/Faculty";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  return (
    <div>
      
      <Faculty />
      <Team/>
      <Feedback />
    </div>
=======
import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import these
import Home from "./pages/Home";
import InnovatorsSection from "./components/Innovators/Hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Innovators" element={<InnovatorsSection/>} />
      </Routes>
    </Router>
>>>>>>> main
  );
}

export default App;
