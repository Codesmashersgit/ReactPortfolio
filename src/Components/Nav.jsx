
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMenuAlt1, HiX } from 'react-icons/hi';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='bg-slate-400 w-screen fixed top-0 z-50'>
      <div className='flex justify-between items-center h-16 px-4'>
        <h1 className='font-semibold text-2xl md:text-3xl text-white'>
          Portfolio
        </h1>

    
        <ul className='hidden md:flex gap-10 mr-6'>
          <li>
            <a href='#landing' className='hover:border-b-2 hover:border-slate-100 transition duration-300 text-white'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='hover:border-b-2 hover:border-slate-100 transition duration-300 text-white'>
              About
            </a>
          </li>
          <li>
            <a href='#projects' className='hover:border-b-2 hover:border-slate-100 transition duration-300 text-white'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:border-b-2 hover:border-slate-100 transition duration-300 text-white'>
              Contact
            </a>
          </li>
          <li>
            <a href='https://github.com/Codesmashersgit' aria-label='GitHub Profile' className='text-2xl text-white'>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/sudhanshu-raj-45b205250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' aria-label='LinkedIn Profile' className='text-2xl text-white'>
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <button 
          onClick={toggleMenu} 
          aria-label='Toggle Menu' 
          aria-expanded={isMenuOpen}
          className='md:hidden text-2xl text-white mr-[3%]'
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt1 />}
        </button>
      </div>

      <div className={`fixed top-0 right-0 h-full bg-black w-full md:hidden transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <div className='flex justify-end p-4'>
          <button 
            onClick={toggleMenu} 
            aria-label='Close Menu' 
            className='text-2xl text-white'
          >
            <HiX />
          </button>
        </div>
        <ul className='flex flex-col items-center pt-10 gap-5'>
          <li className='py-2 w-full text-center'>
            <a href='#landing' className='text-xl text-white' onClick={handleMenuItemClick}>
              Home
            </a>
          </li>
          <li className='py-2'>
            <a href='#about' className='text-xl text-white' onClick={handleMenuItemClick}>
              About
            </a>
          </li>
          <li className='py-2'>
            <a href='#projects' className='text-xl text-white' onClick={handleMenuItemClick}>
              Projects
            </a>
          </li>
          <li className='py-2'>
            <a href='#contact' className='text-xl text-white' onClick={handleMenuItemClick}>
              Contact
            </a>
          </li>
          <li className='py-2'>
            <a href='https://github.com/Codesmashersgit' aria-label='GitHub Profile' className='text-3xl text-white' onClick={handleMenuItemClick}>
              <FaGithub />
            </a>
          </li>
          <li className='py-2'>
            <a href='https://www.linkedin.com/in/sudhanshu-raj-45b205250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' aria-label='LinkedIn Profile' className='text-3xl text-white' onClick={handleMenuItemClick}>
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
