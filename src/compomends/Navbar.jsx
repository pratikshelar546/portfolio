import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="h-24 text-2xl  w-full flex items-center  text-white  bg-gray-800 gap-10 justify-center ">
        <div className="flex flex-row fixed overflow-hidden z-10 bg-inherit w-full max-w-4xl justify-between border rounded-full py-4 px-7">
          <div>
            <h1 className=" cursor-pointer">Pratik shelar</h1>
          </div>
          <div className="flex gap-7 cursor-pointer ">
            <a
              href="#home"
              className="hover:scale-110 transition duration-300 hover:underline underline-offset-4"
            >
              Home
            </a>
            <a
              href="#skills"
              className="hover:scale-110 transition duration-300 hover:underline underline-offset-4"
            >
              Skills
            </a>
            <a
              href="#project"
              className="hover:scale-110 transition duration-300 hover:underline underline-offset-4"
            >
              Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
