import React, { useEffect, useRef } from "react";
import { logo } from "../utlis/SkillsLogo";
import { motion, useInView, useAnimation } from "framer-motion";
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [mainControl, isInView]);

  return (
    <>
      <main id="skills">
        <section className=" lg:h-screen h-full  relative w-full bg-gray-200 text-gray-700  flex flex-col items-center justify-center p-5 ">
          <div className="w-full max-w-4xl flex justify-center items-center flex-col">
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-semibold  pb-4"
            >
              Skills
            </motion.h1>
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl pb-8 font-semibold"
            >
              Technologies <span className=" text-red-700">i know</span>
            </motion.h1>
            <motion.div className=" grid lg:grid-cols-4 md:grid-cols-3 justify-items-center grid-cols-2 lg:gap-x-32 gap-x-6 gap-y-10 justify-center">
              {logo &&
                logo.map((data, index) => (
                  <motion.img
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -100 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.05* index }}
                    src={data.image}
                    alt={data.name}
                    className=" w-auto h-20 object-contain mix-blend-darken"
                  />
                ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Skills;
