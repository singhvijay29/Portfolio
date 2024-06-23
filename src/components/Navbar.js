import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import "./Navbar.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Navbar({ scrollY }) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
      once: true,
    });
  });

  return (
    <>
      <header
        className={`headerTop mt-0 fixed top-0 overflow-hidden w-full z-[999] ${
          scrollY > 80 && "bg-[#000]"
        }`}
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="700"
      >
        <div className="container mx-auto flex flex-wrap px-6 pt-[6px] flex-row items-center justify-between">
          <div className="flex items-center">
            <a className="title-font font-medium text-white">
              <a href="/#home" className="">
                <img src="/name_logo.png" className="h-[74px] ml-[-14px]" />
              </a>
            </a>
            <nav className="cool-link hidden md:block md:ml-6 md:py-4 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
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
          </div>
          {/* <div onClick={onOpen} className="block md:hidden">
            <Hamburger />
          </div> */}
          <a
            href="/#contact"
            className=" items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base transition duration-300 hidden md:inline-flex"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>
      {/* <Sidebar isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
}
