
import React from 'react';
import Image from '../assets/Screenshot 2024-09-18 140934.png';
import Img from '../assets/doctor.png';
import Student from '../assets/Screenshot 2024-09-18 154528.png';

const projects = [
  {
    id: 1,
    title: 'Virtual Assistant',
    description: 'A virtual assistant created using HTML, CSS, and JavaScript. The virtual assistant listens for voice commands and responds with spoken feedback. Additionally, it can execute commands that allow for web navigation and open installed applications based on user instructions.',
    image: Image,
    link: '', 
  },
  {
    id: 2,
    title: 'Student Attendance System',
    description: 'This project focuses on tracking student attendance in educational institutions. Built with the MERN stack, the system provides an intuitive interface for both students and teachers. It makes it easy for teachers to mark and manage attendance while allowing students to view their attendance records anytime, anywhere.',
    image: Student,
    link: '', 
  },
  {
    id: 3,
    title: 'Startup Project',
    image: Img,
    description: 'Welcome to our innovative doctor consultation platform, a startup project dedicated to revolutionizing healthcare access. Our platform connects patients with qualified doctors for seamless consultations, provides medical prescriptions in a document format, and securely saves medical records.',
    link: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-600 text-center">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-white font-mono">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gray-100 p-6 rounded-lg shadow-md transform transition duration-700 hover:scale-105 relative ${
                project.id === 3 ? 'border-4 border-red-500' : ''
              }`}
            >
              {project.id === 3 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                  In Progress
                </span>
              )}
              <h3 className="text-2xl font-bold mb-7">{project.title}</h3>
              <img
                src={project.image}
                className="w-full bg-cover mb-2"
                alt={project.title} 
              />
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} className="text-blue-500 underline mt-4 block">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


