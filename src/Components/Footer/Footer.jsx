import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-200 pt-12 pb-6 mt-12">
      <div className="max-w-9xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* ==== Left Section ==== */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Millat Sarker Himel</h2>
          <p className="text-gray-400 hover:text-[#3ebff6] transition">
            Email: <a href="mailto:millatsarker224@gmail.com">millatsarker224@gmail.com</a>
          </p>
          <p className="text-gray-400 hover:text-[#3ebff6] transition">
            Location: Rangpur, Bangladesh
          </p>
        </div>

        {/* ==== Social Icons ==== */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/mh-millat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3ebff6] transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/millat-sarker-himel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3ebff6] transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/share/1GnZWiBzhR/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3ebff6] transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* ==== Bottom Section ==== */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm md:text-base text-gray-500">
        &copy; {new Date().getFullYear()} Millat Sarker Himel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
