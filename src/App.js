import React, { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Propskills from "./components/Propskills";
import Footer from "./components/Footer";

function App() {
  const [scrollY, setScrollY] = useState(0);
  return (
    <div
      className="App text-gray-400 body-font max-w-[1440px] mx-auto h-[100vh] overflow-y-auto no-scrollbar"
      onScroll={(e) => setScrollY(e?.target?.scrollTop)}
    >
      <Navbar scrollY={scrollY} />
      <Home />
      <About />
      <Skills />
      <Propskills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
