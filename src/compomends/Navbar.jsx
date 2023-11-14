import React from "react";
import { motion, useAnimation } from "framer-motion";
import { VscHome, VscLayers, VscTerminalPowershell } from "react-icons/vsc";
const LgNav = () => {
  return (
    <>
      <motion.section variants={{hidden:{opacity:0, scale:0}, visible:{opacity:1,scale:1}}} initial="hidden" animate="visible" transition={{duration:0.6,delay:0.1}}
        className="h-18 text-2xl fixed hidden m-0 z-[1000]  w-full md:flex items-center bg-transparent gap-10 justify-center "
      >
        <div className="flex flex-row text-blue-100 bg-[#0a192f] w-full lg:max-w-6xl md:max-w-2xl  justify-between border border-[#64ffda] rounded-full py-4 px-7">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -100, x: -100  },
              visible: { opacity: 1, y: 0,x:0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <h1 className=" cursor-pointer">Pratik shelar</h1>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -100, x: -50 },
              visible: { opacity: 1, y: 0, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-7 cursor-pointer "
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="#home"
              className="hover:scale-110 transition duration-300 hover:underline underline-offset-4"
            >
              Home
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              href="#skills"
              className="hover:scale-110 transition duration-300 hover:underline underline-offset-4"
            >
              Skills
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              href="#project"
              className="hover:scale-110 transition duration-300 hover:underline underline-offset-4"
            >
              Projects
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
const SmNav = () => {
  return (
    <>
      <motion.section  variants={{hidden:{opacity:0,y:100}, visible:{opacity:1,y:0}}} transition={{duration:0.65}} initial="hidden" animate="visible"   className=" h-24 -bottom-1 text-[#64ffda]  bg-[#0a192f] left-0 fixed z-[1000] overflow-hidden w-full  md:hidden flex">
        <div className="p-5 w-full">
          <div className="flex gap-4 px-5 justify-between items-center">
            <a
              href="#home"
              className="flex flex-col items-center text-xl font-serif gap-1"
            >
              <VscHome size={"1.5rem"} />
              Home
            </a>
            <a
              href="#skills"
              className="flex flex-col items-center text-xl font-serif gap-1"
            >
              <VscTerminalPowershell size={"1.5rem"} />
              Skills
            </a>
            <a
              href="#project"
              className="flex flex-col items-center text-xl font-serif gap-1 "
            >
              <VscLayers size={"1.5rem"} /> Project
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
};
const Navbar = () => {
  const control = useAnimation();

  return (
    <>
      <LgNav control={control} />
      <SmNav />
    </>
  );
};

export default Navbar;
