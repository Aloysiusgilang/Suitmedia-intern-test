import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import { inter, openSans, playfairDisplay } from "@/components/fonts";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleAboutSubMenu = () => {
    setShowAboutSubMenu(!showAboutSubMenu);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed w-full z-20 top-0 left-0 bg-dark bg-opacity-50 backdrop-blur-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 w-full">
          <div className="flex items-center justify-between w-full ">
            <div className={playfairDisplay.className}>
              <Link href="/" className="flex-shrink-0 inline-block relative">
                <p className="font-bold text-xl text-white transition duration-300 transform hover:-translate-y-1">
                  Suitmedia.intern.test
                </p>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <div onMouseLeave={() => setOpen(false)} className="relative">
                  <div
                    onMouseOver={() => setOpen(true)}
                    className="flex items-baseline space-x-4 rounded-md"
                  >
                    <span className=" px-3 py-2 rounded-lg text-white text-sm font-medium hover:bg-orange-500 hover:text-white">
                      About
                    </span>
                  </div>

                  <ul
                    onMouseOver={() => setOpen(true)}
                    className={`absolute right-0 w-40 py-2 rounded-lg shadow-xl bg-dark text-white ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-300">
                      <Link href="/history">History</Link>
                    </li>
                    <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-300">
                      <Link href="/vision">Vision Mission</Link>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/our-work"
                  className="text-white hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Works
                </Link>
                <Link
                  href="/our-team"
                  className="text-white hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Team
                </Link>
                <Link
                  href="#contact"
                  className="text-white hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMobile ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMobile ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/history"
              className="text-gray-300 hover:bg-gray-700 flex items-center hover:text-white  px-3 py-2 rounded-md text-base font-medium"
            >
              History
            </Link>
            <Link
              href="/vision"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Vision
            </Link>
            <Link
              href="/our-team"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Team
            </Link>
            <Link
              href="/our-work"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Our Work
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
