import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="py-16 relative   ">
    <div className="absolute h-[400px] w-[800px]  md:w-[1000px]   lg:w-[1000px] bottom-0 left-1/2 -translate-x-1/2 bg-red-500/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] "></div>
    <div className="container ">
      <div className="border-t  border-white/50 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-black/70 text-md lg:text-lg underline  "> Find Me On: </div>
          <nav className="flex flex-row justify-center items-center gap-6">
  
            <a 
              href="https://github.com/nouralbaba" 
                target="_blank" 
               rel="noopener noreferrer"
              className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-pink-300 to-sky-400/50 text-black font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-gray-700 hover:to-black/10 relative"
            >
              <FaGithub className="size-6 " />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-300 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                GitHub
              </span>
            </a>

            
            <a 
              href="https://linkedin.com/in/nooralbaba" 
                 target="_blank" 
               rel="noopener noreferrer"
              className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-pink-300 to-sky-400/50 text-black font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-blue-600 hover:to-blue-800 relative"
            >
              <FaLinkedin className="size-6" />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-blue-200 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                LinkedIn
              </span>
            </a>

            
            

          
            <a 
              href="mailto:nouralbaba65@gmail.com" 
               target="_blank" 
               rel="noopener noreferrer"
              className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-pink-300 to-sky-400/50 text-black font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-red-600 hover:to-red-700 relative"
            >
              <MdEmail className="size-6" />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-red-200 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                Email
              </span>
            </a>
          </nav>


        </div>     



    </div>

  </footer>
  )
}

export default Footer