import { useEffect, useState } from "react";
import Home from "./compomends/Home";
import Navbar from "./compomends/Navbar";
import Projects from "./compomends/Projects";
import Skills from "./compomends/Skills";
import LaodingScreen from "./compomends/LaodingScreen";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timeOut = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timeOut)
  })
  return (
    <>{
      loading ? <LaodingScreen /> : <>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
      </>
        }
    </>
  );
}

export default App;
