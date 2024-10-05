import React, { useState } from "react";
import project from "../utlis/ProjectsTitle";
import { FiGithub,FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectsCard = () => {
    const [hovered, setHoverd] = useState(null);
  const mouseHoverd = (index) => {
    setHoverd(index);
  };
  const mounseLeanved = () => {
    setHoverd(null);
  };

  
  return (
    <>
      <motion.div  className="flex flex-col gap-10  h-full w-full ">
        {project &&
          project.map((data, index) => {
            return (
              <>
                <motion.div variants={{hidden:{opacity:0,y:100,scale:0.6  },visible:{opacity:1, y:0,scale:1}}} viewport={{once:false}} initial="hidden" whileInView="visible" transition={{duration:1, delay:0}}
                  className=" w-full items-center h-full  flex flex-col md:p-5 gap-5 text-white"
                  key={index}
                >
                  {/* <video src={data.video}  muted loop autoPlay/> */}
                  <div className=" md:w-4/5 w-full md:pt-9 md:px-9 pb-4 md:border border-[#64ffda] md:bg-[#112240] rounded-lg shadow-slate-700 md:shadow hover:scale-105 transition duration-300">
                    <div className="flex justify-center flex-col items-center">
                      <div
                        className={`relative w-fit md:h-80 h-56 `}
                        onMouseEnter={() => mouseHoverd(index)}
                        onMouseLeave={mounseLeanved}
                      >
                        <div className="h-full w-full flex justify-center">
                        
                            <img
                              src={data.image}
                              alt={data.title}
                              className=" h-full md:w-[580px] w-full  "
                            />
                        </div>
                      </div>
                      <div className=" flex flex-col items-center justify-center md:w-3/4 w-4/5 gap-2  p-2">
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
                </motion.div>
              </>
            );
          })}
      </motion.div>
    </>
  );
};

export default ProjectsCard;
