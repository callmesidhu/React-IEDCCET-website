import React, { useState } from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./Toggle";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";

const NAV_ITEMS = [
  { label: "HOME", to: "landing" },
  { label: "ABOUT", to: "about" },
  { label: "ANNOUNCEMENTS", to: "announcements" },
  { label: "GALLERY", to: "gallery" },
  { label: "FACULTY", to: "faculty" },
  { label: "TEAM", to: "team" },
  { label: "FEEDBACK", to: "feedback" },
  { label: "INO POINTS", to: "inopoints" },
  { label: "CONTACT", to: "contact" },
  { label: "UPCOMING", to: "section4" },
  { label: "ACHIEVEMENTS", to: "section6" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const toggleDark = () => setDarkMode(prev => !prev);

  return (
    <nav
      style={{ backgroundColor: darkMode ? '#00092C' : '#FFFFFF', color: darkMode ? '#FFFFFF' : '#000000' }}
      className="sticky top-0 z-50 shadow-sm"
    >
      {/* Mobile Header */}
      <div className="sm:hidden relative px-2 py-3 flex items-center justify-between">
        {/* Dark Mode Toggle on Left */}
        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className="p-2"
        >
          <DarkModeToggle isDark={darkMode} />
        </button>

        {/* Logo Center */}
        <img
          src="/iedc_logo.png"
          alt="IEDC Logo"
          className="w-10 h-auto"
        />

        {/* Menu Toggle on Right */}
        <button
          onClick={toggleMenu}
          className="p-2"
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? closeIcon : menuIcon}
            alt="menu toggle"
            className="w-8 h-auto"
          />
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden sm:flex items-center justify-between sm:px-6 px-2 py-3">
        {/* Logo Left */}
        <div>
          <img src="/iedc_logo.png" alt="IEDC Logo" className="w-10 h-auto" />
        </div>

        {/* Links + Dark Mode Toggle */}
        <div className="flex items-center space-x-6 font-medium">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              spy
              smooth
              offset={-100}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
              activeClass="text-blue-600"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleDark}
            className="p-2 rounded"
            aria-label="Toggle dark mode"
          >
            <DarkModeToggle isDark={darkMode} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{ backgroundColor: darkMode ? '#00092C' : '#F9FAFB' }}
          className="sm:hidden absolute top-full w-full py-4 transition-colors duration-300 z-40 shadow-lg"
        >
          <ul className="flex flex-col text-center space-y-2">
            {NAV_ITEMS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  spy
                  smooth
                  offset={-100}
                  duration={500}
                  className="block py-2 hover:text-blue-600"
                  activeClass="text-blue-600"
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDark}
                className="mx-auto mt-2 p-2 rounded"
                aria-label="Toggle dark mode"
              >
                <DarkModeToggle isDark={darkMode} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}