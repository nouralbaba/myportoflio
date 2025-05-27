import React from 'react';
import AboutCard from '../components/AboutCard';
import { motion } from "framer-motion";


const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div id="About" className="py-20"   >
   
 
    <motion.div
     initial="hidden"
     whileInView="visible"
     variants={fadeInUp}
     transition={{ duration: 0.5 }}
    className="heading flex flex-col justify-center items-center gap-4 mt-4">
      <h1  className="font-serif lg:text-4xl md:text-4xl text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-red-800 to-purple-600 text-transparent bg-clip-text"> 
        About Me
      </h1>
      <h3 className="font-roboto lg:text-4xl md:text-4xl text-2xl uppercase font-bold tracking-widest text-center">
        A Glimpse Into My World
      </h3>
      <p className="font-serif text-xl font-semibold lg:text-2xl  mt-2 text-black/70 text-center">
        Get to know more about who I am, what I do, and what inspires me.
      </p>
    </motion.div>

      <motion.div 
      initial="hidden"
     whileInView="visible"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.7 }}
      className='grid grid-rows-1 md:grid-rows-2 gap-6 p-4'>
        <AboutCard>
          <h1 className="text-2xl lg:text-3xl font-serif bg-gradient-to-r from-red-700 to-purple-600 text-transparent bg-clip-text">
            Background and Passion
          </h1>
          <h3 className="font-serif text-xl flex-1 min-w-0 lg:text-2xl sm:text-lg mt-4 mb-4">
          From Engineering to Web Development. I'm originally from Syria and currently living in Egypt, where I completed my studies in Communication and Electronics Engineering. After graduating, I decided to follow my passion for web development. I enjoy creating user-friendly experiences and solving problems with code.
          </h3>
        </AboutCard>
<motion.div
 initial="hidden"
 whileInView="visible"
  variants={fadeInUp}
  transition={{ duration: 0.5, delay: 0.7 }}
>
     <AboutCard>
          <h1 className="text-2xl lg:text-3xl font-serif bg-gradient-to-r from-red-700 to-purple-600 text-transparent bg-clip-text">
            What I Do
          </h1>
          <h3 className="font-serif text-xl flex-1 min-w-0 lg:text-2xl sm:text-lg mt-4 mb-4">
            I’m a front-end web developer with a background in engineering, specializing in building interactive and visually appealing websites using technologies like HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.
          </h3>
        </AboutCard>
</motion.div>
     
<motion.div
 initial="hidden"
 whileInView="visible"
  variants={fadeInUp}
  transition={{ duration: 0.5, delay: 0.7 }}
>
       <AboutCard>
          <h1 className="text-2xl lg:text-3xl font-serif bg-gradient-to-r from-red-700 to-purple-600 text-transparent bg-clip-text">
            Outside of Coding
          </h1>
          <h3 className="font-serif text-xl lg:text-2xl sm:text-lg mt-4 mb-4">
          When I’m not coding, I enjoy exploring my passion for design and digital drawing, both 2D and 3D. I also love learning new languages and staying active through sports.
          </h3>
        </AboutCard>
</motion.div>
   
      </motion.div>
    </motion.div>
  );
};

export default About;