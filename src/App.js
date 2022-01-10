import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Propskills from "./components/Propskills";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
<Navbar />
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
