import React from "react";
import pratik from "../images/pratik2.png";
import github from "../images/GitHub-logo.png";
import linedin from "../images/LinkedIn_logo.png";
import twitter from "../images/x.png";
import gmail from "../images/gmail.png";
import resume from "../images/pratikresume.pdf";
import { motion } from "framer-motion";

const LgHome = () => {
  const openResume = () => {
    window.open(resume);
  };

  return (
    <>
      <main id="home">
        <section
          className={`lg:flex h-screen hidden bg-[#0a192f] text-white overflow-hidden font-serif relative lg:top-24 md:top-24 lg:mt-5 md:mt-0`}
        >
          <div className=" w-full h-full flex items-center justify-center relative ">
            <div className=" w-full h-full max-w-6xl flex lg:flex-row md:flex-col items-center justify-between ">
              <motion.div variants={{ hidden:{opacity:0,x:-100}, visible:{opacity:1,x:0}}} initial="hidden" animate="visible" transition={{duration:1 ,delay:0.2}} className="w-1/4 relative left-9 gap-8 flex flex-col  ">
                <div className="w-full ">
                  <h1 className="lg:text-7xl text-4xl text-[#64ffda]">
                    Pratik_Shelar.
                  </h1>
                  <p className="text-sm underline flex gap-2 p-2 items-center">
                    <img src={gmail} alt="gmail" className="w-5 rounded h-5" />
                    pratikshelar987@gmail.com
                  </p>
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
                      className=" mix-blend-lighten object-fill w-12 -m-2 h-12"
                    />
                  </a>
                </div>
                <button
                  onClick={openResume}
                  className="text-lg hover:shadow hover:scale-110 hover:shadow-[#64ffda] px-6 w-fit py-2 border border-[#64ffda]"
                >
                  Resume
                </button>
              </motion.div>
              <motion.div variants={{ hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{duration:2 ,delay:0.2}} className=" lg:h-[86%] -bottom-3 relative md:h-1/4 w-2/4 flex">
                <img
                  src={pratik}
                  alt="pratik"
                  className=" h-full w-full object-contain"
                />
              </motion.div>
              <motion.div variants={{ hidden:{opacity:0,x:100}, visible:{opacity:1,x:0}}} initial="hidden" animate="visible" transition={{duration:1 ,delay:0.2}} className="text-white  w-96 gap-4 font-serif relative top-14  flex flex-col justify-center items-start">
                <h1 className=" font-normal text-2xl">-INTRODUCTION</h1>
                <h1>
                  <spam className="text-[#64ffda] lg:text-5xl text-3xl ">
                    Web developer
                  </spam>{" "}
                  based in Mumbai, India
                </h1>
                <p className="text-sm">
                  Web developer with a passion for code, dedicated to turning
                  your ideas into interactive reality. Explore my portfolio to
                  witness the fusion of creativity and technology. Let's
                  collaborate to bring your vision to life on the web.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
const SmHome = () => {
  const openResume = () => {
    window.open(resume);
  };
 const aboutText ="Hello! My name is Pratik Shelar from Mumbai, India! I enjoy creating things that make a real-world impact. My journe began in 2022, and over the past year, I've acquired crucial skills such as time management and problem-solving, leading to significant personal growth. I'm excited about the upcoming  years as a web developer."
 const aboutWords = aboutText.split(" ");
  return (
    <>
      <main id="home">
        <section
          className={`lg:hidden flex h-full  bg-[#0a192f] text-white font-serif relative mt-5`}
        >
          <div className=" w-full h-full flex ">
            <div className=" w-full flex flex-col">
              <div className="w-full h-screen relative text-blue-200 gap-3 p-6 flex justify-center -top-10  flex-col  ">
                <div className="flex flex-col gap-3  ">
                  <motion.p variants={{ hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{duration:0.7,delay:0.1}} className="text-[#64ffda] text-sm md:text-xl">
                    Hi, my name is
                  </motion.p>
                  <motion.h1 variants={{ hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{duration:0.7, delay:0.3}} className="text-4xl md:text-7xl text-blue-100">
                    Pratik Shelar.
                  </motion.h1>
                  <motion.h2 variants={{ hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{duration:0.7, delay:0.4}} className="text-2xl md:text-6xl text-blue-200">
                    I am Web developer
                  </motion.h2>
                  <motion.p variants={{ hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{duration:0.7, delay:0.6}} className="text-md text-blue-200">
                    Web developer with a passion for code, dedicated to turning
                    your ideas into interactive reality. Explore my portfolio to
                    witness the fusion of creativity and technology. Let's
                    collaborate to bring your vision to life on the web.
                  </motion.p>
                  <motion.p variants={{ hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{duration:0.7, delay:0.7}} className="text-sm md:text-lg underline flex gap-2 p-2 items-center">
                    <img src={gmail} alt="gmail" className="w-5 rounded h-5" />
                    pratikshelar987@gmail.com
                  </motion.p>
                </div>
                <motion.div variants={{ hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{duration:0.7, delay:0.7}} className="flex relative gap-6 pb-3">
                  <a href="https://www.linkedin.com/in/pratikshelar987">
                    <img
                      src={linedin}
                      alt="Linkedin"
                      className="w-8 md:w-16 h-8 md:h-16"
                    />
                  </a>
                  <a href="https://github.com/pratikshelar546">
                    <img
                      src={github}
                      alt="GitHub"
                      className=" rounded-full w-8 md:w-16 h-8 md:h-16"
                    />
                  </a>
                  <a href="https://twitter.com/pratikshelar03">
                    <img
                      src={twitter}
                      alt="Twitter(x)"
                      className=" mix-blend-plus-lighter object-fill w-10 -m-1 md:w-20 h-10 md:h-20"
                    />
                  </a>
                </motion.div>
                <motion.button variants={{ hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} initial="hidden" animate="visible" transition={{duration:0.7, delay:0.8}}
                  onClick={openResume}
                  className="text-xl font-semibold  text-blue-200 px-5 md:px-8 w-fit py-2 md:py-3 border border-[#64ffda]"
                >
                  Resume
                </motion.button>
              </div>

              <div className="text-blue-100 w-full font-serif relative px-6 gap-3 flex flex-col justify-center items-start">
                <motion.h1 variants={{ hidden:{opacity:0,x:-100}, visible:{opacity:1,x:0}}} initial="hidden" whileInView="visible" transition={{ duration:1 }} className=" font-normal text-2xl">-About Me</motion.h1>

                <motion.p className="w-full text-blue-200">
                 {
                  aboutWords.map((text,index)=>(
                    <motion.span variants={{ hidden:{opacity:0,x:100}, visible:{opacity:1,x:0}}} initial="hidden" whileInView="visible" transition={{ duration:0.5 ,delay: 0.09* index}}>{text}{" "}</motion.span>
                  ))
                 }
                </motion.p>
                <div className=" shadow-smd shadow-[#64ffda]  border-[#64ffda] w-full flex">
                  <img
                    src={pratik}
                    alt="pratik"
                    className=" h-full w-full object-contain "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const Home = () => {
  return (
    <>
      <LgHome />
      <SmHome />
    </>
  );
};
export default Home;
