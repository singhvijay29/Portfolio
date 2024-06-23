import React, { useEffect, useRef } from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

export default function Projects() {
   const cardRef = useRef([]);

  useEffect(() => {
    cardRef.current.forEach((card) => {
      if (card) {
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => {
      cardRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const xAxis = (centerX - e.clientX) / 20;
    const yAxis = (centerY - e.clientY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card.style.transition = "none";
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = "transform 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  };
  
  return (
    <section id="projects" className="text-gray-400 body-font">
      <div className="container px-5 py-[80px] mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Recent Works
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="flex flex-wrap -m-1 max-w-7xl justify-center">
          {projects.map((project) => (
              <div key={project.image} className="flex relative sm:w-1/2 w-100 p-5"          
                    ref={(el) => (cardRef.current[index] = el)}>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-80 object-center overflow-hidden"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="p-5 text-3xl">
                    <a href={project.gitlink} className="mr-4">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href={project.link}>
                      <i class="fas fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
