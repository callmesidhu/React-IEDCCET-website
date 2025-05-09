import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext"; 


const QUICK_LINKS = [
  { label: "ABOUT", to: "about" },
  { label: "IGNITES", to: "ignites" },
  { label: "EVENTS", to: "section4" },
  { label: "ANNOUNCEMENTS", to: "announcements" },
  { label: "ACHIEVEMENTS", to: "section6" },
  { label: "INQ POINTS", to: "inopoints" },
  { label: "TEAM", to: "team" },
  { label: "CONTACT", to: "contact" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "X", icon: Twitter, href: "#" },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { darkMode, setDarkMode } = useDarkMode(); 
  const bgColor = darkMode ? "#00092C" : "#FFFFFF";
  const textColor = darkMode ? "#FFFFFF" : "#000000";

  const handleLinkClick = (sectionId) => {
    if (!isHomePage) {
      localStorage.setItem("scrollToSection", sectionId);
      navigate("/");
    }
  };

  return (
    <footer
      style={{ backgroundColor: bgColor, color: textColor }}
      className="w-full py-12 border-t transition-colors duration-300"
    >
      <div className="container mx-auto px-1 md:px-6">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col items-start gap-4 mb-8 md:mb-0">
            <div className="w-24 h-24 relative">
              <img src="/iedc_logo.png" alt="IEDC Logo" className="object-cover" />
            </div>
            
          </div>
          <div>
            <h3 className="sm:text-md font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  {isHomePage ? (
                    <ScrollLink
                      to={to}
                      spy
                      smooth
                      offset={-100}
                      duration={500}
                      className="hover:underline cursor-pointer"
                      style={{ color: textColor }}
                    >
                      {label}
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => handleLinkClick(to)}
                      className="hover:underline cursor-pointer"
                      style={{ color: textColor }}
                    >
                      {label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="sm:text-md font-semibold mb-4">Follow Us</h3>
            <div className="space-y-3">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center sm:text-xl text-sm gap-2 hover:underline"
                  style={{ color: textColor }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sm:text-lg text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
