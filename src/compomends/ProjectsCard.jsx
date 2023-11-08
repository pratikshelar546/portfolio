import React, { useState } from "react";
import project from "../utlis/ProjectsTitle";

const ProjectsCard = () => {
  // console.log(project);
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
                  className="w-full items-center h-[450px] flex flex-col p-5 gap-5 text-white"
                  key={index}
                >
                  {/* <video src={data.video}  muted loop autoPlay/> */}
                  <div
                    className={`relative w-full h-80`}
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
                  <div className=" flex flex-col items-center justify-center w-3/5">

                  <h1 className="text-2xl font-semibold">{data.title}</h1>
                  <h2 className="text-lg font-semibold">{data.key}</h2>
                  <h2 className="text-lg font-semibold">{data.skills}</h2>
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
