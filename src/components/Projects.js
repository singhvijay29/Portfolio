import { ArrowRightIcon, CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="gradient-to-gray-900 w-[100vw] overflow-hidden">
    <section id="projects" className="text-gray-400 body-font">
      <div className="px-6 pt-[80px] mb-[120px] mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Recent Works
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              className="overflow-hidden group bg-gray-900 rounded-[16px] relative group transition duration-[400ms] cursor-pointer lg:hover:scale-[105%] hover:ring-1 ring-gray-700"
            >
              <img
                src={project?.image}
                className={
                  "hidden md:block h-full w-full absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-0 transition duration-[400ms] lg:group-hover:scale-[110%] object-center	object-cover"
                }
              />
              <img
                src={project?.mobImage}
                className={
                  "block md:hidden h-full w-full absolute top-0 bottom-0 left-0 right-0 group-hover:opacity-0 transition duration-[400ms] lg:group-hover:scale-[110%] object-center"
                }
              />
              <div className="px-8 py-6 z-10 w-full opacity-0 group-hover:opacity-100 rounded-[16px] transition duration-[400ms]">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-3 mt-4 px-3">
                  {project.subtitle}
                </h2>
                <h1 className="text-[28px] title-font text-lg font-bold text-white mb-3 my-6">
                  {project.title}
                </h1>
                <p className="leading-relaxed text-[16px] mb-[64px] lg:mb-0">
                  {project.description}
                </p>
                <div className="h-[76px]"></div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-3">
                  <div
                    onClick={() => window.open(project?.link)}
                    className="text-16 flex items-center justify-center px-5 py-3 rounded-[24px] border-[1px] border-gray-800 w-max mx-auto bg-gray-800 hover:text-[#fff] transition duration-[400ms] cursor-pointer hover:ring-[1px] ring-gray-700"
                  >
                    {"Visit Website"}
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                  {project?.isApp && (
                    <div
                      onClick={() => window.open(project?.appLink)}
                      className="text-16 flex items-center justify-center px-5 py-3 rounded-[24px] border-[1px] border-gray-800 w-max mx-auto bg-gray-800 hover:text-[#fff] transition duration-[400ms] cursor-pointer hover:ring-[1px] ring-gray-700"
                    >
                      {"Download App"}
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
</div>
  );
}
