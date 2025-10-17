import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
              M
            </div>
            <div>
              <div className="text-lg font-semibold">Millat Sarker Himel</div>
              <div className="text-xs text-gray-500">Frontend / Full Stack</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-2 btn btn-sm btn-outline"
            >
              Download Resume
            </a>
          </div>

          {/* mobile */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white/90 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition ${
                    isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href="/resume.pdf" download className="block px-3 py-2">
              <button className="btn btn-sm btn-outline w-full">Download Resume</button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
