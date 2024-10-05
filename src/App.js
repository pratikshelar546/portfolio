import { useEffect, useState } from "react";
import Home from "./compomends/Home";
import Navbar from "./compomends/Navbar";
import Projects from "./compomends/Projects";
import Skills from "./compomends/Skills";
// import LaodingScreen from "./compomends/LaodingScreen";
import Footer from "./compomends/Footer";



function App() {
 
  return (
    <>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Footer/>
     
      
    </>
  );
}

export default App;
