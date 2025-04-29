
import {Link} from "react-router-dom"
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-row justify-between">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <div className="w-32">
              {/* Replace with your actual logo */}
              <div className="w-24 h-24 relative">
                <img
                  src="/iedc_logo.png"
                  alt="Company Logo"
                 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex flex-row gap-12 md:gap-24">
            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ignites
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Announcements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    INQ Points
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-y-3">
                <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                  <Twitter className="h-5 w-5" />
                  <span>X</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
