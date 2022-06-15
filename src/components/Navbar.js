
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import './Navbar.css'
export default function Navbar() {
  return (
    <header className="headerTop bg-gray-800 top-0 bg-gray-800 mt-0 sticky top-0 overflow-hidden w-full z-10 top-0">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-3 md:mb-0">
          <a href="/#home" className="ml-3 text-xl">
          𝒱𝒾𝒿𝒶𝓎 𝒦𝓊𝓂𝒶𝓇 𝒮𝒾𝓃𝑔𝒽
          </a>
        </a>
        <nav className="cool-link md:mr-auto md:ml-6 md:py-4 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="/#about" className="mr-5 hover:text-white">
            About Me
          </a>
          <a href="/#Skills" className="mr-5 hover:text-white">
            Tools & Skills
          </a>
          <a href="/#projects" className="mr-6 hover:text-white">
            Projects
          </a>
          <a href="/#contact" className="mr-5 hover:text-white">
            Contact Me
          </a>
        </nav>
        <a
          href="/#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
