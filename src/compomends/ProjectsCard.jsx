import React, { useState } from "react";
import project from "../utlis/ProjectsTitle";
import { FiGithub,FiExternalLink } from "react-icons/fi";
const ProjectsCard = () => {
  // console.log(project.git);
  const [hovered, setHoverd] = useState(null);
  const mouseHoverd = (index) => {
    setHoverd(index);
  };
  const mounseLeanved = () => {
    setHoverd(null);
  };
  // console.log(hovered);
  
  return (
    <>
      <div className="flex flex-col gap-10  h-full w-full ">
        {project &&
          project.map((data, index) => {
            return (
              <>
                <div
                  className=" w-full items-center h-full  flex flex-col p-5 gap-5  text-white"
                  key={index}
                >
                  {/* <video src={data.video}  muted loop autoPlay/> */}
                  <div className=" w-4/5 pt-9 px-9 pb-4 border border-[#64ffda]  bg-[#112240] rounded-lg shadow-slate-700 shadow hover:scale-105 transition duration-300">
                    <div className="flex justify-center flex-col items-center">
                      <div
                        className={`relative w-fit h-80 `}
                        onMouseEnter={() => mouseHoverd(index)}
                        onMouseLeave={mounseLeanved}
                      >
                        <div className="h-full w-full flex justify-center">
                          {hovered === index ? (
                            <video
                              src={data.video}
                              muted
                              loop
                              autoPlay
                              className="h-full w-full"
                            />
                          ) : (
                            <img
                              src={data.image}
                              alt={data.title}
                              className=" h-full w-[580px]  "
                            />
                          )}
                        </div>
                      </div>
                      <div className=" flex flex-col items-center  justify-center w-3/4 gap-1  p-2">
                        <h1 className="text-2xl font-serif ">{data.title}</h1>
                        <h2 className="text-sm font-serif">{data.key}</h2>
                        <h2 className="text-sm font-serif text-center text-[#64ffda]">
                          {data.skills}
                        </h2>
                      </div>
                    </div>
                   
                    <a href={data.git}>
                      <FiGithub
                        className=" float-right text-[#64ffda]  "
                        size={"1.5rem"}
                      />
                    </a>
                   { data.web && 
                   <a href={data.web}>
                      <FiExternalLink  className=" float-right mr-5 text-[#64ffda] "
                        size={"1.5rem"}/>
                    </a>}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ProjectsCard;
