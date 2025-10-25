 import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 md:py-20 bg-[#0F172A] w-full md:w-7xl mx-auto rounded-2xl mt-12 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 text-center text-[#3ebff6]">
          Educational Qualification
        </h2>

        <motion.div
          className="bg-[#1e293b] p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-700 mx-auto"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 20px 40px rgba(62,191,246,0.4)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3ebff6] mb-4 text-center md:text-left">
            Diploma in Computer Science & Technology
          </h3>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mb-2 text-center md:text-left">
            Rangpur Ideal Institute of Technology, Rangpur, Bangladesh
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left">
            📅 2022 – 2026 (Expected)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
