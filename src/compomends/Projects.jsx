import React from "react";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <>
      <section id="project" className="">
        <div className="w-full h-full  relative lg:top-20 top-0 md:top-16 bg-[#0a192f] text-blue-200 flex justify-center items-center">
          <div className=" flex  flex-col p-5 relative w-full max-w-4xl gap-5 items-center justify-center">
            <motion.h1  variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} className=" text-4xl font-serif text-blue-100">Projects</motion.h1>
            <motion.h1 variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} className="text-3xl font-serif">
              Dive into <span className=" text-[#64ffda]">My Creations.</span>
            </motion.h1>
            <div className=" gap-5 md:pb-10 pb-20">
<ProjectsCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
