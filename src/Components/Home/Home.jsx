import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePic from '../../assets/banner image-13.png';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div>
      <section className="flex items-center bg-gradient-to-br from-[#e3f2fd] via-[#e8f5e9] to-[#fffde7] min-h-[90vh]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-20">

          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="text-indigo-600 font-semibold uppercase tracking-wide text-2xl">
              Hello — I am
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Millat Sarker <span className='text-indigo-600'>Himel</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-md">
              A passionate <span className="font-semibold text-indigo-600">Frontend Developer</span> &
              <span className="font-semibold text-green-600"> Full Stack Enthusiast</span>.
              I build responsive, fast and accessible web applications using React, Tailwind, Node.js, and MongoDB.
            </p>

            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a
                href="/resume.pdf"
                download
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Download Resume
              </a>

              <Link
                to="/projects"
                className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="w-[350px] md:w-[420px] aspect-square rounded-full overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-110 hover:shadow-[0_0_60px_10px_rgba(99,102,241,0.6)]">
              <img
                src={profilePic}
                alt="Millat"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;