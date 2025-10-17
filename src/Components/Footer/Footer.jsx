import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 mt-5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl font-bold text-white">Millat Sarker Himel</h2>
          <p className="text-gray-400 hover:text-indigo-400 transition">
            Email: <a href="millatsarker224@gmail.com">millatsarker224@gmail.com</a>
          </p>
          <p className="text-gray-400 hover:text-indigo-400 transition">
            Location: Rangpur, Bangladesh
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/mh-millat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/millat-sarker-himel-717b7a2b2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/1GnZWiBzhR/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>

        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Millat Sarker Himel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
