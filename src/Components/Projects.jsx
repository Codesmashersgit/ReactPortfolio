

import React from 'react';
import Image from '../assets/Untitled_design__1_-removebg-preview.png';
import Img from '../assets/Untitled_design__3_-removebg-preview.png';
import Student from '../assets/Untitled_design__2_-removebg-preview (1).png';

const projects = [
  {
    id: 1,
    description: 'A virtual assistant created using HTML, CSS, and JavaScript. The virtual assistant listens for voice commands and responds with spoken feedback. Additionally, it can execute commands that allow for web navigation and open installed applications based on user instructions.',
    image: Image,
    title:"Virtual Assistant",
    link: 'https://virtualassistantshifra.netlify.app/', 
  },
 
  {
    id: 2,
    description: 'This project focuses on tracking student attendance in educational institutions. Built with the MERN stack, the system provides an intuitive interface for both students and teachers. It makes it easy for teachers to mark and manage attendance while allowing students to view their attendance records anytime, anywhere.',
    image: Student,
    title:"Student Attendance System",
    link: '', 
  },
  {
    id: 3,
    description: 'Welcome to our innovative doctor consultation platform, a startup project dedicated to revolutionizing healthcare access. Our platform connects patients with qualified doctors for seamless consultations, provides medical prescriptions in a document format, and securely saves medical records.',
    image: Img,
    title:"Startup Project",
    link: '', 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-mono text-center mb-8 ">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-lg shadow-lg ${
                project.id === 3 ? 'border-4 border-red-500' : ''
              }`}
            >
              {project.id === 3 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                  In Progress
                </span>
              )}
              <p className='text-center font-bold text-[20px]'>{project.title}</p>
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105 py-2"
              />
              <div className="p-4">
                <p className="text-gray-700">{project.description}</p>
                {project.link && (
                  <a href={project.link} className="text-blue-500 underline mt-4 block text-center">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
