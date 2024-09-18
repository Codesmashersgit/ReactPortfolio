
import React from 'react';
import boy from '../assets/20640-removebg-preview (1).png';
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Landing() {
  return (
    <section id='landing'>
      <div className="h-screen p-4 flex items-center justify-center relative">
     
        <div className="flex items-center justify-end w-full h-full max-w-screen-lg">
          <img 
            src={boy}   
            className="object-contain md:h-[80%] w-auto h-[50%] md:mr-[7%] mr-0 mt-[3%]" 
          />
        </div>
        
        <div className='absolute md:top-[40%] top-1/2 left-16 w-20 md:w-[40%] lg:w-auto md:left-56 lg:left-[30%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 mt-20'>
          <h1 className='md:text-4xl font-bold text-white text-2xl'>
            Hii.. I'm Sudhanshu Raj
          </h1>
          <div className='flex flex-col md:gap-16 gap-20'>
            <p className='text-red-500 text-2xl italic animate-bounce'>MERN Developer</p>
            <div className='flex md:gap-11 gap-7'>
              <p className='text-green-800 bg-white px-2 py-2 md:text-4xl text-2xl rounded-full'><SiMongodb /></p>
              <p className='text-yellow-500 bg-white px-2 py-2 md:text-4xl text-2xl rounded-full'><SiExpress /></p>
              <p className='text-cyan-500 bg-white px-2 py-2 md:text-4xl text-2xl rounded-full'><FaReact /></p>
              <p className='text-yellow-500 bg-white px-2 py-2 md:text-4xl text-2xl rounded-full'><FaNodeJs /></p>
            </div>
            <div>
              <a href='#about' className='px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md text-white'>
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
