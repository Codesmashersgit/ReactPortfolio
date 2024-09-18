
import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <section id='about' className='bg-black text-white min-h-screen flex items-center justify-center flex-col pt-14'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl font-mono font-bold mb-4'>About Me</h1>
        <p className='max-w-2xl mx-auto px-4 text-base md:text-lg'>
          I'm a MERN developer with a passion for creating dynamic and responsive web applications. 
          With a strong background in JavaScript and React, I love turning ideas into reality through code. 
          I'm always eager to learn new technologies and improve my skills.
        </p>
      </div>
      <div className='mt-8 md:mt-11 md:flex md:gap-11 flex-wrap justify-center'>
        <p className='transition-transform hover:scale-110 mb-4'>
          <FaHtml5 className='text-[#e67e22] text-[40px] md:text-[50px] bg-white p-2 rounded-full' />
        </p>
        <p className='transition-transform hover:scale-110 mb-4'>
          <IoLogoCss3 className='text-blue-700 text-[40px] md:text-[50px] bg-white p-2 rounded-full'/>
        </p>
        <p className='transition-transform hover:scale-110 mb-4'>
          <FaJs className='text-yellow-500 text-[40px] md:text-[50px] bg-white p-2 rounded-full'/>
        </p>
        <p className='transition-transform hover:scale-110 mb-4'>
          <FaReact className='text-cyan-500 text-[40px] md:text-[50px] bg-white p-2 rounded-full'/>
        </p>
        <p className='transition-transform hover:scale-110 mb-4'>
          <RiTailwindCssFill className='text-cyan-500 text-[40px] md:text-[50px] bg-white p-2 rounded-full'/>
        </p>
      </div>
    </section>
  );
};

export default About;
