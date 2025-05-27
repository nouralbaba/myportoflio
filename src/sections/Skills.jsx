import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='pb-24 mt-52 h-screen text-center'>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      className="heading flex flex-col justify-center items-center gap-4 mt-4">
        <h1 className="font-serif lg:text-4xl md:text-4xl text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-red-800 to-purple-600 text-transparent bg-clip-text"> 
          Current Skills
        </h1>
        <h3 className="font-roboto lg:text-4xl md:text-4xl text-2xl uppercase font-bold tracking-widest text-center">
          Eager to Learn and Grow 
        </h3>
        <p className="font-serif text-lg font-semibold lg:text-xl md:text-xl sm:text-xl mt-2 text-black/70 text-center">
          Explore the technologies and tools I use to craft exceptional digital experiences.
        </p>
      </motion.div>

      <motion.div 
         initial="hidden"
         whileInView="visible"
         variants={fadeInUp}
         transition={{ duration: 0.3 }}
      className='grid grid-cols-3 lg:grid-rows-3 items-center justify-center gap-4 mt-10 p-4 '>
        {[
          { icon: <FaHtml5 className='lg:text-4xl md:text-3xl text-2xl text-purple-900' />, label: "HTML" },
          { icon: <FaCss3Alt className='lg:text-4xl md:text-3xl text-2xl text-purple-900' />, label: "CSS" },
          { icon: <IoLogoJavascript className='lg:text-4xl md:text-3xl text-2xl text-purple-900' />, label: "Javascript" },
          { icon: <RiReactjsLine className='lg:text-4xl md:text-3xl text-2xl text-purple-900' />, label: "React JS" },
          { icon: <RiTailwindCssFill className='lg:text-4xl md:text-3xl text-2xl text-purple-900' />, label: "Tailwind CSS" },
          { icon: <SiNextdotjs className='lg:text-4xl md:text-3xl text-2xl text-purple-900' />, label: "Next JS" },
          { icon: <TbBrandFramerMotion className='lg:text-4xl md:text-3xl text-2xl text-purple-900' />, label: "Framer Motion" },
          { icon: <FaGithub className='lg:text-4xl md:text-3xl text-2xl text-purple-900' />, label: "Github" },
        ].map((skill, index) => (
          <div key={index} className='rounded-xl border-2 border-purple-500 p-2 flex flex-col items-center'>
            {skill.icon}
            <p className='bg-gradient-to-r from-pink-500 to-purple-900 text-transparent bg-clip-text lg:text-2xl text-xl'>
              {skill.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;