import {React, useRef} from "react";
import HeroImg from '../assets/images/portImg.png';
import {motion , useScroll, useTransform} from 'framer-motion'
import { FaDownload } from "react-icons/fa6";
import { FaArrowAltCircleDown } from "react-icons/fa";
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const translateY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div id='Home' className='py-20 lg:py-16 w-full relative z-0 mt-10'>
      <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='w-full lg:w-1/2 px-4'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl mt-10'>
             
            </h1>
            <span className='bg-gradient-to-r from-red-700 via-purple-600 to-sky-500 bg-clip-text text-5xl tracking-tight text-transparent'>
              Front End Developer
            </span><br></br>
            <p className='text-2xl mt-4 text-start lg:text-3xl'>
              Hi, I'm Noor , a passionate
              <span className='bg-gradient-to-r from-sky-800 to-purple-600 bg-clip-text lg:text-3xl text-2xl  text-transparent'>
                {' '}
                Junior Front-End Developer{' '}
              </span>
              with a background in
              <span className='bg-gradient-to-r to-purple-800 from-sky-600 bg-clip-text lg:text-3xl text-2xl text-transparent'>
                {' '}
                Communication & Electronics Engineering.{' '}
              </span>
              I specialize in building responsive and user-friendly web experiences using React.js and Tailwind CSS. I also
              have basic knowledge of Next.js and Framer Motion, allowing me to enhance interactivity and performance in my projects.
            </p>
            <div className='flex flex-col mt-8 sm:flex-row gap-3 justify-center lg:justify-start'>
            <a href='#projects'>
              <button className='
                inline-flex items-center gap-2
                px-6 py-3 bg-white/10 border border-gray-500
                rounded-xl hover:border-purple-900 hover:bg-purple-500/30
                text-2xl md:text-xl transition-all
              '>
               <FaArrowAltCircleDown className="size-5" />
               <span className="font-semibold text-xl lg:text-2xl  "> Explore My Work</span>
              </button>
            </a>
            
            <a href='#contact'>
              <button className='
                inline-flex items-center gap-2
                px-6 py-3 bg-white/10 border border-gray-500
                rounded-xl hover:border-purple-900 hover:bg-purple-500/30
                text-2xl md:text-xl transition-all 
              '>
                <FaDownload className="size-5" />
                <span className="font-semibold text-xl lg:text-2xl ">Download My CV</span>
              </button>
            </a>

            </div>
          </div>
        </motion.div>
        <motion.div
         animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ translateY }}
        className='w-full lg:w-1/2 flex justify-center p-14'>
          <img src={HeroImg} alt='Me Image' className='rounded-full lg:mt-20 w-56 h-56 lg:w-72 lg:h-72 object-cover shadow-lg shadow-purple-300/30' />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;