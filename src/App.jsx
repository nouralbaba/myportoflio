import React from 'react';
import NavBar from './sections/NavBar';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

function App() {
  return (
    <div className='overflow-x-hidden text-black antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen w-full bg-[#cef0feca] bg-[radial-gradient(ellipse_80%_80%_at_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <div className='container mx-auto px-4 md:px-8'>
        <NavBar />
        <div className='space-y-10 md:space-y-16'>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
