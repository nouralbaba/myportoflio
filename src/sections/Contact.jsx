import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id='contact' className='pb-24'>

<motion.div
    className="container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-pink-300/50 to-sky-400/50 text-gray-900 py-8 px-10 rounded-3xl text-center">
    <motion.h2
       variants={fadeInUp}
       transition={{ duration: 0.5, delay: 0.3 }}
    className="font-serif font-extrabold text-2xl lg:text-3xl bg-gradient-to-r from-black to-pink-600 text-transparent bg-clip-text ">
      Let's Build Something Amazing Together!</motion.h2>
    <motion.p 
       variants={fadeInUp}
       transition={{ duration: 0.5, delay: 0.4 }}
    className=" font-semibold  text-xl lg:text-2xl mt-2">I'm currently looking for junior front-end development opportunities where I can create engaging and interactive web experiences. If you're hiring or looking to collaborate, Let's connect.</motion.p>
   

     <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.5 }}
     className="flex justify-center flex-col lg:flex-row gap-4 items-center mt-4">

     <a href="mailto:nouralbaba65@gmail.com">
    <button className="text-gray-900 bg-gray-200/30  inline-flex items-center shadow-md px-6 h-14 md:px-8 md:h-16 rounded-xl gap-2 hover:shadow-gray-600  ">
    <FaLocationArrow  className="size-4"/>
     <span className="font-bold text-lg lg:text-xl "> Contact Me at: nouralbaba65@gmail.com</span>
     </button></a>
      

      <a href="/Nour_Albaba_CV.pdf">
    <button className="text-gray-900 bg-gray-200/30 inline-flex items-center shadow-md px-6 h-14 md:px-8 md:h-16 rounded-xl gap-2 hover:shadow-gray-600 ">
    <FaDownload className="size-4" />
      <span className="font-bold text-lg lg:text-xl ">Download My CV</span>
      
      </button></a>
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact