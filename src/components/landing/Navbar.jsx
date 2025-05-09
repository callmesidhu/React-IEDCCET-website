import { useState } from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "./Toggle";
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

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

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between sm:px-6 px-2 py-3">
        <div>
          <img
            src="/iedc_logo.png"
            alt="IEDC Logo"
            className="w-[40px] h-auto"
          />
        </div>

        <div className="flex text-md items-center justify-center font-medium">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-100}      
              duration={500}
              className="cursor-pointer sm:block hidden mx-5 text-black  hover:text-blue-600"
              activeClass="text-blue-600"
            >
              {label}
            </Link>
          ))}
          <DarkModeToggle/>
        </div>
        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-block sm:hidden text-white z-50 focus:outline-none"
                        >
                        {isOpen ? (
                            <img src={close} className='w-8 bg-white h-auto rounded-sm'/>
                        ) : (
                            <img src={menu} className='w-8 bg-white h-auto rounded-sm'/>
                        )}
          </button>
          {isOpen && (
            <div className="sm:hidden p-4 top-0 h-svh w-full absolute z-40 bg-gray-50 shadow-lg">
            <ul className="flex flex-col border-2 rounded-2xl text-xl text-gray-700">
            {NAV_ITEMS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-100}      
              duration={500}
              className="cursor-pointer border-2 p-2 w-full text-center text-black  hover:text-blue-600"
              activeClass="text-blue-600"
              onClick={()=>setIsOpen(!isOpen)}
            >
              {label}
            </Link>
            ))}
          </ul>
          </div>
          )}
      </div>
    </nav>
  );
}
