import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePic from '../../assets/Profile-image.png';
import resume from '../../assets/mh_millat.pdf';

const Home = () => {
  return (
    <div className="bg-[#0F172A] text-white w-full md:max-w-[1200px] lg:max-w-[1480px] rounded-2xl mt-3 mx-auto px-4 sm:px-6">
      {/* ===== Hero Section ===== */}
      <section id="home" className="flex items-center min-h-screen">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center py-10">

          {/* ---- Left Text ---- */}
          <motion.div
            className="space-y-4 md:space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Hey! I'm Millat Sarker Himel
            </p>
            <p className="text-[#3ebff6] text-lg sm:text-lg md:text-xl lg:text-2xl">
              Creating modern, responsive, and scalable web solutions
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg">
              Hello! I'm a dedicated Junior Web Developer with a strong passion for crafting elegant and efficient web applications.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg">
              I specialize in building modern, responsive, and user-friendly interfaces using HTML, CSS, Tailwind CSS, React, JavaScript, and Node.js, Express.js, MongoDB on the backend.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg">
              I love turning creative ideas into real-world digital solutions and continuously learning new technologies to become a skilled Full Stack Developer.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-5 py-2 bg-[#3ebff6] text-[#0F172A] font-semibold rounded-lg shadow-md hover:bg-[#0c98d4] transition duration-300 text-sm sm:text-base md:text-base"
              >
                Download Resume
              </a>

              {/* <Link
                to="/projects"
                className="px-5 py-2 border border-[#38BDF8] text-[#3ebff6] rounded-lg hover:bg-[#384b69] transition duration-300 text-sm sm:text-base md:text-base"
              >
                View Projects
              </Link> */}

              <a
                href="#contact"
                className="px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 border border-[#3ebff6] text-[#3ebff6] rounded-lg text-xs sm:text-sm md:text-base font-medium hover:bg-[#3ebff6] hover:text-white transition"
              >
                Contact Me
              </a>

            </div>
          </motion.div>

          {/* ---- Right Image ---- */}
          <motion.div
            className="flex justify-center md:justify-end mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="w-40 sm:w-56 md:w-72 lg:w-96 aspect-square rounded-full overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-110 hover:shadow-[0_0_60px_10px_rgba(56,189,248,0.6)]">
              <img
                src={profilePic}
                alt="Millat"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Home;
