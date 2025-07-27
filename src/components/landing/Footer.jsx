import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

const NAV_ITEMS = [
  { label: "HOME", to: "/" },
  { label: "START UPS", to: "/startups" },
  { label: "PORTAL", to: "/portal" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "X", icon: Twitter, href: "#" },
];

export default function Footer() {
  const { darkMode } = useDarkMode();
  const bgColor = darkMode ? "#00092C" : "#FFFFFF";
  const textColor = darkMode ? "#FFFFFF" : "#000000";

  return (
    <footer
      style={{ backgroundColor: bgColor, color: textColor }}
      className="w-full py-12 border-t transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-8 flex flex-row justify-between gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start gap-4 ">
          <div className="sm:w-24 w-14 relative">
            <img src="/iedc_logo.png" alt="IEDC Logo" className="object-cover" />
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_ITEMS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:underline"
                  style={{ color: textColor }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="space-y-3">
            {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
                style={{ color: textColor }}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10">
        <p className="text-sm" style={{ color: textColor }}>
          &copy; {new Date().getFullYear()} IEDC CET. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
