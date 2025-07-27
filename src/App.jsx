import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Startups from "./pages/Startups";

import InnovatorPortal from "./pages/InnovatorPortal";
import AdminLogin from "./components/Admin/Loginform";
import Dashboard from "./components/Admin/Dashboard"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/portal" element={< InnovatorPortal/>} />
        <Route  path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
