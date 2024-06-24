import React, { useEffect } from "react";
import "./Home.css";
import Type from "./Type";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
    });
  });

  return (
    <div className="gradient-to-black w-[100vw] overflow-hidden">
    <section
      id="home"
      data-aos="fade-in"
      data-aos-duration="700"
      className="lg:h-[100vh] flex items-center justify-center"
    >
      <div className="about-cont container mx-auto flex gap-[64px] lg:gap-0 px-10 pt-[80px] md:pt-[160px] lg:pt-20 pb-20 lg:flex-row flex-col items-center ">
        <div
          className="lg:flex-grow lg:w-1/2 lg:pr-28 lg:pr-16 flex flex-col lg:items-start lg:text-left items-center text-center"
          data-aos="fade-in"
          data-aos-duration="700"
        >
          <h1 className="heading text-8xl mt-10">
            Hi There! <span className="wave">👋</span>
          </h1>
          <br></br>
          <br></br>
          <h1 className="heading-name text-[24px] md:text-6xl mr-0.5  whitespace-nowrap">
            I'M
            <strong className="main-name text-[44px] md:text-5xl">
              {" "}
              Vijay <span className="hidden md:inline">Kumar</span> Singh
            </strong>
          </h1>
          <h1 className="text-[24px] md:text-4xl whitespace-nowrap">
            <Type />
          </h1>

          <div className="flex justify-center mt-14">
            <a
              href={
                "https://drive.google.com/file/d/1CO_bPEtsQOdLXppGNLd1q3MkmOMMrp4N/view?usp=sharing"
              }
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer flex items-center justify-center"
            >
              Resume
            </a>
            <a
              href="/#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer flex items-center justify-center"
            >
              Projects
            </a>
          </div>
        </div>
        <div
          className="lg:max-h-[30vh] m-auto"
          data-aos="fade-in"
          data-aos-duration="700"
        >
          <img
            className="image-bar"
            alt="hero"
            src="https://i.ibb.co/pZVd8Ct/Png-Item-1127587-1.png"
          />
        </div>
      </div>
    </section>
</div>
  );
}
