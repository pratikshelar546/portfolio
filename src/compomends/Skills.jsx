import React from "react";
import { logo } from "../utlis/SkillsLogo";

const Skills = () => {
  return (
    <>
      <main id="skills">
        <section className=" h-full top-20 relative w-full bg-gray-200 text-gray-700  flex flex-col items-center justify-center p-5 ">
          <div className="w-full max-w-4xl flex justify-center items-center flex-col">
            <h1 className="text-5xl font-semibold  pb-4">Skills</h1>
            <h1 className="text-4xl pb-8 font-semibold">
              Technologies <span className=" text-red-700">i know</span>
            </h1>
            <div className=" grid grid-cols-4 gap-x-32 gap-y-10 justify-center">
              {logo &&
                logo.map((data) => {
                  // console.log(data.image);
                  return (
                    <>
                      <img
                        src={data.image}
                        alt={data.name}
                        className=" w-auto h-24 mix-blend-darken"
                      />
                    </>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Skills;
