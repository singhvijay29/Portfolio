import React, { useEffect, useState } from 'react';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Propskills from "./components/Propskills";
import Footer from "./components/Footer";
import Loader from "./components/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        let timer = setTimeout(() => {
            setIsLoading(false);
            return () => clearInterval(timer);
        }, 1000);
    }, []);
    return isLoading ? (
        <Loader />
    ) : (
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