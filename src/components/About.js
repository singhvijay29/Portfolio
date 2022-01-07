import React from "react";
import "./About.css";
import Type from "./Type";

export default function About() {
  return (
    <section id="about">
      <div className="about-cont container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 style={{ paddingBottom: 17 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'M
            <strong className="main-name"> VIJAY KUMAR SINGH</strong>
            <Type />
          </h1>

          <div>
            <div>
              <div md={8} className="home-about-description">
                
                <p className="home-about-body"  style={{ fontSize: "1.3em" }}>
                  A Passionate aspiring Full Stack Developer skilled in MERN
                  stack, moulded and shaped by Masai school’s intensive and
                  immersive learning. Look forward to joining a company where I
                  will be able to contribute towards individual and company
                  growth.
                 

  
                </p>
              </div>
             
            </div>
            <div>
        
            </div>
          </div>

          <div className="flex justify-center mt-14">
            <a
              href="https://drive.google.com/file/d/1z3NDzbJEGTA8C9zFtSC6zMpbbdCNz2-y/view?usp=sharing"
              className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Resume
            </a>
            <a
              href="/#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="image-bar"
            alt="hero"
            src="https://i.ibb.co/pZVd8Ct/Png-Item-1127587-1.png"
          />
        </div>
      </div>
    </section>
  );
}
