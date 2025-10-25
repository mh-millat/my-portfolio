import React from 'react';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <div className="bg-[#1b2233] text-white">
      <NavBar></NavBar>
      <Home></Home>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      <Footer />
    </div>
  );
};

export default Root;