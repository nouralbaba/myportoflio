import React from 'react'
import Project1 from '../assets/images/project1.png';
import Project2 from '../assets/images/project2.png';
import Project3 from '../assets/images/project33.png';
import Project4 from '../assets/images/project4.png';
import Project5 from '../assets/images/project5.png';
import { motion } from "framer-motion";


import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaExternalLinkAlt , FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    name: "Sushi Place",
    title: "Restaurant ",
    technologies: ["HTML ", "- CSS", "- Plain Javascript"],
    description: "A clean and responsive website for a small sushi restaurant, showcasing the menu, location, and a simple contact form.",
  
    link:'https://sushiiplace.netlify.app/',
    githubLink: "https://github.com/nouralbaba/sushiplace/tree/main/sushi",
    image: Project1,
  },
  
  {
    name: "Swimming Academy",
    title: "Academy Website",
    technologies: ["React Vite ", " -Tailwind CSS", "-Framer Motion"],
    description: "A modern swimming academy website providing information about classes, schedules, and enrollment options with smooth animations.",
 
    link:'https://swimmingacademy.netlify.app/',
    githubLink: "https://github.com/nouralbaba/swimming-academy",
    image: Project2,
  },
  {
    name: "Dior mini store",
    technologies: ["React Vite ", " -Tailwind CSS", "-Framer Motion"],
    title: "E-commerce Website",
    description: "An e-commerce mini store that allows users to browse products and manage existing listings with edit and delete functionality.",
  
    link:'https://diorstore.netlify.app/',
    githubLink: "https://github.com/nouralbaba/dior-e-commerce",
    image: Project5,
  },
  {
    
    name: "Tinty Make-up Store",
    title: "E-commerce Website",
    technologies: ["Next.js", "-Tailwind CSS", "-Framer Motion"],
    description: "Tinty Make-up Store is a vibrant e-commerce platform designed for beauty enthusiasts. With a user-friendly interface and a focus on showcasing a wide range of cosmetics, this store offers a seamless shopping experience. Customers can explore products, read reviews, and enjoy an interactive shopping cart that enhances their journey.",
 
    link: 'https://e-commerce-store-main-oiletwuwn-nour-albabas-projects.vercel.app',
    githubLink: "https://github.com/nouralbaba/E-commerce-store",
    image: Project4,
  },
  {
    name: "Fitness Exercises (API)",
    technologies: ["React Vite", "-Tailwind css" ],
    title: "Gym & Exercises API fetching Website",
    
    description: "A fitness-focused website that fetches exercise data from an API, helping users explore various workouts and exercises.",
 
    link:'https://apifitnessexercies.netlify.app/',
    githubLink: "https://github.com/nouralbaba/Gym-API-fitness",
    image: Project3,
  },
 
];
const Projects = () => {
  return (
    <div id='projects' className='pt-8 lg:py-20 bg-gray-300/50 rounded-md '>
  
  <div className="heading flex  flex-col justify-center items-center gap-4 mt-4">
  <h1 className="font-serif lg:text-4xl md:text-4xl text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-red-900 to-purple-600 text-transparent bg-clip-text"> 
        Latest Projects
        </h1>
    
        <p className="font-serif text-sm font-semibold lg:text-2xl md:text-xl sm:text-lg mt-2 text-black/70 text-center">
        Explore my latest development projects
        </p>
    </div>
    <div className='mt-20 ml-4 mr-4 '>
      {PROJECTS.map((project,index) => (
        <div key={index} className='mb-8 border-b-2  border-gray-900 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4 '>
          <img src={project.image} width={250} height={150}
          className='mb-6 rounded '  />
        
      
          </div>
        <div className='w-full max-w-xl lg:mx-4 lg:w-3/4 flex justify-center lg:items-center items-start flex-col'>
        <h6 className='bg-gradient-to-r from-red-900 to-purple-600 text-transparent bg-clip-text font-semibold tracking-wider text-xl lg:text-2xl'>{project.name}</h6>
        <h6 className='text-red-700 text-lg lg:text-xl'>{project.title}</h6>
        <div className='flex flex-wrap gap-2 mt-3 text-lg lg:text-xl text-red-700'>
                      {project.technologies}
                    </div>
       <p className='text-xl lg:text-2xl'>{project.description}</p>
        <div className='flex flex-row  gap-3 mt-4 mb-4'>
                    <a
                      href={project.link}
                       target="_blank"
                       rel="noopener noreferrer"
                      className='group relative overflow-hidden rounded-lg'
                    >
                      <button className='
                        w-full flex items-center justify-center gap-2
                        px-4 py-3 bg-red-600/50 hover:bg-red-600/80
                        border border-purple-500/30 
                        text-black
                        transition-all duration-300 text-lg
                      '>
                        <FaExternalLinkAlt className='w-4 h-4' />
                        <span>Live Demo</span>
                      </button>
                    </a>

                    <a
                      href={project.githubLink}
                       target="_blank"
                       rel="noopener noreferrer"
                      className='group relative overflow-hidden rounded-lg'
                    >
                      <button className='
                        w-full flex items-center justify-center gap-2
                        px-4 py-3 bg-gray-700/20 hover:bg-gray-700/30
                        border border-gray-600/30 
                       text-black
                        transition-all duration-300 text-lg
                      '>
                        <FaGithub className='w-4 h-4' />
                        <span>View Code</span>
                      </button>
                    </a>
                  </div>

        </div>
        </div>
      ))}
      
    </div>



       
        </div>
      
  )
}

export default Projects