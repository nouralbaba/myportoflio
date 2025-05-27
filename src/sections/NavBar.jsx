import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
      };

    return (
        <header className=' container'>
           <div className="fixed top-0 left-0 right-0 z-10 flex justify-center items-center gap-6 mt-6">
            <div className="bg-gradient-to-r from-red-800 to-purple-600 text-transparent bg-clip-text lg:text-4xl sm:text-2xl font-bold font-serif ">
                Nour Albaba 
            </div>
            
       
            <nav className="hidden md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a href="#Home" className="px-4 py-1.5 rounded-full text-black/50  sm:text-lg lg:text-xl font-semibold hover:text-black transition duration-300 hover:bg-white/10">
                    Home
                </a>
                <a href="#Projects" className="px-4 py-1.5 rounded-full text-black/50 sm:text-lg lg:text-xl  font-semibold hover:text-black transition duration-300 hover:bg-white/10">
                    Projects
                </a>
                <a href="#About" className="px-4 py-1.5 rounded-full text-black/50 sm:text-lg lg:text-xl  font-semibold hover:text-black transition duration-300 hover:bg-white/10">
                    About
                </a>
                <a href="#Contact" className="px-4 py-1.5 rounded-full sm:text-lg lg:text-xl font-semibold bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900">
                    Contact
                </a>
            </nav>

        
            <div className='border border-white h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden cursor-pointer z-30'
                 onClick={toggleMenu}
            >
                <IoMenu />
            </div>
        </div>

         
                    {isMenuOpen && (
                <div className='md:hidden p-4 fixed flex top-20 right-0 left-0 z-20 bg-gray-400/20'>
                    <ul className='flex flex-col items-center gap-4 '>
                        <li><a href="#Home" className="px-4 py-1.5 rounded-full text-black/70 sm:text-lg lg:text-xl  font-semibold hover:text-white transition duration-300 hover:bg-white/10">Home</a></li>
                        <li><a href="#projects" className="px-4 py-1.5 rounded-full text-black/70 sm:text-lg lg:text-xl  font-semibold hover:text-white transition duration-300 hover:bg-white/10">Projects</a></li>
                        <li><a href="#About" className="px-4 py-1.5 rounded-full text-black/70 sm:text-lg lg:text-xl  font-semibold hover:text-white transition duration-300 hover:bg-white/10">About</a></li>
                        <li><a href="#contact" className="px-4 py-1.5 rounded-full text-black/70 sm:text-lg lg:text-xl font-semibold hover:text-white transition duration-300 hover:bg-white/10">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;
