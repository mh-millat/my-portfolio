import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import profilePic from '../../assets/Profile-image.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'skills', label: 'Skills' },
    { to: 'education', label: 'Education' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'education', 'projects', 'contact'];
      let current = 'home';

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section && section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="bg-[#0F172A] sticky top-0 z-50 shadow-lg w-full md:w-[1480px] mx-auto rounded-b-2xl">
      <div className="flex justify-between items-center px-4 md:px-6 py-3">
        {/* Left: Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-lg font-semibold text-white">Millat Sarker Himel</div>
            <div className="text-xs text-gray-400">Frontend / Full Stack</div>
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Center Menu: Desktop */}
        <div className="hidden md:flex justify-center gap-10 relative">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => handleClick(item.to)}
              className={`relative text-sm font-medium transition px-1 pb-1 ${
                activeSection === item.to
                  ? 'text-[#3ebff6] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-indigo-400 after:via-purple-500 after:to-pink-500'
                  : 'text-gray-300 hover:text-[#3ebff6]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="hidden md:flex gap-4 text-xl">
          <a href="https://github.com/mh-millat" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ebff6] transition transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/millat-sarker-himel" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ebff6] transition transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/share/1GnZWiBzhR/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ebff6] transition transform hover:scale-110">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F172A] w-full flex flex-col items-center gap-6 py-6 border-t border-gray-700">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => handleClick(item.to)}
              className={`text-lg font-medium transition ${
                activeSection === item.to
                  ? 'text-[#3ebff6]'
                  : 'text-gray-300 hover:text-[#3ebff6]'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="flex gap-6 text-2xl mt-4">
            <a href="https://github.com/mh-millat" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ebff6] transition transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/millat-sarker-himel" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ebff6] transition transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1GnZWiBzhR/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ebff6] transition transform hover:scale-110">
              <FaFacebook />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
