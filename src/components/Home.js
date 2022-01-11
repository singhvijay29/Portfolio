import React, { useEffect } from "react";
import "./Home.css";
import Type from "./Type";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(()=>{
    Aos.init({duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated'
    });
  })
  
  return (
    <section id="home" data-aos="fade-up">
      <div className="about-cont container mx-auto flex px-10 py-20 md:flex-row flex-col items-center mt-24">
        <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-aos="fade-up">
          <h1 className="heading text-8xl mt-20">
            Hi There!{" "}
            <span className="wave" data-aos="fade-up">👋</span>
          </h1>
          <br></br>
          <br></br>
          <br></br>

          <h1 className="heading-name text-7xl mr-0.5">
            I'M 
            <strong className="main-name text-5xl"> Vijay Kumar Singh</strong></h1>
            <br></br>
    
            <h1 className="text-4xl" data-aos="fade-"> <Type /></h1>
           
          <br></br>
          <br></br>
          <br></br>
          <br></br>
           
         
         

          <div>
            <div>
           
             
            </div>
            <div>
        
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-right">
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