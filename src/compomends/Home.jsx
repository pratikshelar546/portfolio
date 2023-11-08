import React, { useState } from "react";
import pratik from "../images/pratik2.png";
import github from "../images/GitHub-logo.png";
import linedin from "../images/LinkedIn_logo.png";
import twitter from "../images/x.png";
import gmail from "../images/gmail.png";
import resume from "../images/pratikresume.pdf";
import { useEffect } from "react";
const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const openResume = () => {
    window.open(resume);
  };

  // useEffect(() => {
  //   const handledScroll = () => {
  //     if (window.scrollY >650) {
  //       setScrolled(true);
  //       console.log(window.scrollY.toString());
  //     } else {
  //       console.log(scrolled);

  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll',handledScroll);
  //   return()=>{
  //     window.removeEventListener('scroll', handledScroll);
  //   }
  //   ${scrolled ?'top-24' :'top-0'}
  // },[]);

  return (
    <>
      <main id="home">
        <section
          className={`h-full bg-gray-800 text-white overflow-hidden relative top-24`}
        >
          <div className=" w-full h-full flex items-center justify-center relative ">
            <div className=" w-full h-full max-w-6xl flex items-center justify-between ">
              <div className="w-80 relative -m-44 left-[120px] gap-8 flex flex-col">
                <div>
                  <h1 className="text-7xl">Pratik Shelar.</h1>
                  <p className="text-sm underline flex gap-2 p-2 items-center">
                    <img src={gmail} alt="gmail" className="w-5 rounded h-5" />
                    pratikshelar987@gmail.com
                  </p>
                  <button onClick={openResume} className="text-lg">
                    Pratik's Resume
                  </button>
                </div>
                <div className="flex gap-5 relative ">
                  <a href="https://www.linkedin.com/in/pratikshelar987">
                    <img src={linedin} alt="Linkedin" className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/pratikshelar546">
                    <img
                      src={github}
                      alt="GitHub"
                      className=" rounded-full w-8 h-8"
                    />
                  </a>
                  <a href="https://twitter.com/pratikshelar03">
                    <img
                      src={twitter}
                      alt="Twitter(x)"
                      className=" mix-blend-color-dodge object-fill w-12 -m-2 h-12"
                    />
                  </a>
                </div>
              </div>
              <div className=" h-[620px] w-[500px] flex">
                <img
                  src={pratik}
                  alt="pratik"
                  className=" h-full w-full object-cover"
                />
              </div>
              <div className="text-white text-5xl w-96 gap-4 font-semibold relative top-14  flex flex-col justify-center items-start">
                <h1 className=" font-normal text-2xl">-INTRODUCTION</h1>
                <h1>web developer based in Mumbai, India</h1>
                <p className="text-sm">
                  Web developer with a passion for code, dedicated to turning
                  your ideas into interactive reality. Explore my portfolio to
                  witness the fusion of creativity and technology. Let's
                  collaborate to bring your vision to life on the web.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
