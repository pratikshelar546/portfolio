import React from 'react'

import github from "../images/GitHub-logo.png";
import linedin from "../images/LinkedIn_logo.png";
import twitter from "../images/x.png";
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <>
        <main>
            <section className='h-full  relative w-full  text-gray-200  flex flex-col items-center justify-center p-5 mt-20 '>
                <div className='w-full max-w-4xl flex justify-center items-center flex-col'>
                    <h1 className='text-5xl font-semibold'>  Let's connect</h1>
                    <div  className="flex relative gap-6 py-3">
                  <a href="https://www.linkedin.com/in/pratikshelar987">
                    <img
                      src={linedin}
                      alt="Linkedin"
                      className="w-8 md:w-10 h-8 md:h-10"
                    />
                  </a>
                  <a href="https://github.com/pratikshelar546">
                    <img
                      src={github}
                      alt="GitHub"
                      className=" rounded-full w-8 md:w-10 h-8 md:h-10"
                    />
                  </a>
                  <a href="https://twitter.com/pratikshelar03">
                    <img
                      src={twitter}
                      alt="Twitter(x)"
                      className=" rounded-lg object-fill w-10  md:w-10 h-10 md:h-10"
                    />
                  </a>
                </div>
                <h1 className='text-2xl font-semibold'>pratikshelar987@gmail.com</h1>
                </div>
            </section>

        </main>
    </>
  )
}

export default Footer