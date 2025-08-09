import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";
import DarkModeToggle from "./Toggle";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";

const NAV_ITEMS = [
  { label: "HOME", to: "/" },
 // { label: "START UPS", to: "/startups" },//
  { label: "PORTAL", to: "/portal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") setDarkMode(true);
  }, [setDarkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const toggleDark = () => setDarkMode(prev => !prev);

  return (
    <nav
      style={{
        backgroundColor: darkMode ? "#00092C" : "#FFFFFF",
        color: darkMode ? "#FFFFFF" : "#000000",
      }}
      className="sticky font-grotesk_b top-0 z-50 shadow-sm transition-colors duration-300 w-full"
    >
      {/* Mobile Navbar */}
      <div className="sm:hidden relative px-2 py-3 flex items-center justify-between">
        <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2">
          <DarkModeToggle isDark={darkMode} />
        </button>
        <img src="/iedc_logo.png" alt="IEDC Logo" className="w-10 h-auto" />
        <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu">
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt="menu toggle"
            className="w-8 h-auto"
          />
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex items-center justify-between sm:px-6 px-2 py-3 relative">
        {/* Left: Logo */}
        <div className="flex-shrink-0 z-10">
          <img src="/iedc_logo.png" alt="IEDC Logo" className="w-10 h-auto" />
        </div>

        {/* Center: Nav Items (Absolutely centered) */}
        <div className="absolute left-0 right-0 justify-center text-lg flex gap-x-6 font-medium">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="cursor-pointer hover:text-blue-600 transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://leaderboard.iedccet.com/"
            target="_blank"
            className="cursor-pointer hover:text-blue-600 transition-colors duration-150"
          >
            Leaderboard 
          </a>
        </div>

        {/* Right: Dark Mode Toggle */}
        <div className="flex-shrink-0 z-10">
          <button onClick={toggleDark} className="p-2 rounded" aria-label="Toggle dark mode">
            <DarkModeToggle isDark={darkMode} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          style={{ backgroundColor: darkMode ? "#00092C" : "#F9FAFB" }}
          className="sm:hidden absolute top-full w-full py-4 transition-colors duration-300 z-40 shadow-lg"
        >
          <ul className="flex flex-col text-center space-y-2 justify-center">
            {NAV_ITEMS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block py-2 hover:text-blue-600 transition-colors duration-150"
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
                <hr className="mx-4"></hr>
              </li>
            ))}
            <li>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
