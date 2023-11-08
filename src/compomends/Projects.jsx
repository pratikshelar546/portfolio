import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <section id="project" className="">
        <div className="w-full h-full  relative top-20 bg-gray-800 text-white flex justify-center items-center">
          <div className=" flex  flex-col p-5 relative w-full max-w-4xl gap-5 items-center justify-center">
            <h1 className=" text-5xl font-semibold">Projects</h1>
            <h1 className="text-4xl font-semibold">
              Dive into <span className=" text-red-500">My Creations.</span>
            </h1>
            <div className=" gap-5">
<ProjectsCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
