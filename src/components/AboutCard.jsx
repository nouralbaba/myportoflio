import React from 'react'

const AboutCard = ({ children }) => {
    return (
      <div className=" py-8 px-8 md:px-10 lg:px-20">
        <div className="bg-gray-300/50 rounded-3xl relative overflow-hidden outline outline-2 outline-white/20 hover:outline-purple-600 px-8 pt-8 md:pt-12 ">
          {children}
        </div>
      </div>
    );
  };
export default AboutCard