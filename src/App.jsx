
import React from 'react';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Background from './assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="relative overflow-hidden">
      <Nav />
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 w-full h-screen z-[-1]" ></div>
      <Landing />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
