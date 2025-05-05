import React from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./Toggle";

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
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        <div>
          <img
            src="/iedc_logo.png"
            alt="IEDC Logo"
            className="w-[40px] h-auto"
          />
        </div>

        <div className="flex text-lg font-medium">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-100}      
              duration={500}
              className="cursor-pointer mx-6 text-black  hover:text-blue-600"
              activeClass="text-blue-600"
            >
              {label}
            </Link>
          ))}
          <DarkModeToggle/>
        </div>
      </div>
    </nav>
  );
}
