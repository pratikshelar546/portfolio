import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <section id="project" className="">
        <div className="w-full h-full  relative top-20 bg-[#0a192f] text-blue-200 flex justify-center items-center">
          <div className=" flex  flex-col p-5 relative w-full max-w-4xl gap-5 items-center justify-center">
            <h1 className=" text-4xl font-serif">Projects</h1>
            <h1 className="text-3xl font-serif">
              Dive into <span className=" text-[#64ffda]">My Creations.</span>
            </h1>
            <div className=" gap-5 pb-10">
<ProjectsCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
