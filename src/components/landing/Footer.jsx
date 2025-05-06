import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const QUICK_LINKS = [
  { label: "ABOUT", to: "about" },
  { label: "IGNITES", to: "ignites" },
  { label: "EVENTS", to: "section4" },
  { label: "ANNOUNCEMENTS", to: "announcements" },
  { label: "ACHIEVEMENTS", to: "section6" },
  { label: "INQ POINTS", to: "inopoints" },
  { label: "TEAM", to: "team" },
  { label: "CONTACT", to: "contact" }
];

const SOCIAL_LINKS = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "X", icon: Twitter, href: "#" }
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Function to handle link clicks
  const handleLinkClick = (sectionId) => {
    if (isHomePage) {
      // If already on home page, just scroll
      return;
    } else {
        localStorage.setItem("scrollToSection", sectionId);
      // If on another page, navigate to home page with hash
      navigate("/");
    }
  };

  return (
    <footer className="w-full bg-white py-12 border-t">
      <div className="container mx-auto px-1 md:px-6">
        <div className="flex flex-row justify-between">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <div className="w-32">
              {/* Replace with your actual logo */}
              <div className="w-24 h-24 relative">
                <img
                  src="/iedc_logo.png"
                  alt="IEDC Logo"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex flex-row gap-5 md:gap-24">
            {/* Quick Links Section */}
            <div>
              <h3 className="sm:text-md  font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {QUICK_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    {isHomePage ? (
                      // If on home page, use ScrollLink for smooth scrolling
                      <ScrollLink
                        to={to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="text-blue-600 sm:text-lg text-sm hover:underline cursor-pointer"
                      >
                        {label}
                      </ScrollLink>
                    ) : (
                      // If not on home page, use a regular button to navigate to home + hash
                      <button
                        onClick={() => handleLinkClick(to)}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        {label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="sm:text-md font-semibold mb-4">Follow Us</h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center sm:text-xl text-sm gap-2 text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sm:text-lg text-sm">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}