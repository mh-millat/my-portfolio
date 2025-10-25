import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percent, delay }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-200 text-sm sm:text-base md:text-base lg:text-lg">{skill}</span>
        <span className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400">{percent}%</span>
      </div>

      <div className="w-full bg-gray-700 rounded h-3 overflow-hidden">
        <motion.div
          className="h-3 rounded"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            delay: delay + 0.2,
          }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(90deg, #3ebff6, #7c3aed, #f472b6)',
            boxShadow: '0 0 12px rgba(62,191,246,0.5)',
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontend = [
    { skill: 'HTML', percent: 75 },
    { skill: 'CSS / Tailwind', percent: 73 },
    { skill: 'JavaScript', percent: 70 },
    { skill: 'React', percent: 70 },
  ];

  const backend = [
    { skill: 'Node.js', percent: 70 },
    { skill: 'Express.js', percent: 73 },
    { skill: 'MongoDB', percent: 75 },
  ];

  const tools = [
    { skill: 'Git', percent: 85 },
    { skill: 'VSCode', percent: 90 },
    { skill: 'Firebase', percent: 80 },
  ];

  return (
    <section id="skills" className="bg-[#0F172A] w-full md:w-7xl mx-auto text-gray-200 py-10 sm:py-12 mt-12 rounded-2xl px-4 sm:px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 text-[#3ebff6]">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Frontend */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl bg-[#1e293b] border border-gray-700 shadow-lg hover:shadow-[#3ebff6]/40 transition-all duration-500 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3ebff6] via-[#7c3aed] to-[#f472b6] border-b border-gray-600 pb-1">
              Frontend
            </h3>
            {frontend.map((s, i) => (
              <SkillBar key={s.skill} {...s} delay={i * 0.15} />
            ))}
          </motion.div>

          {/* Backend */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl bg-[#1e293b] border border-gray-700 shadow-lg hover:shadow-[#3ebff6]/40 transition-all duration-500 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3ebff6] via-[#7c3aed] to-[#f472b6] border-b border-gray-600 pb-1">
              Backend
            </h3>
            {backend.map((s, i) => (
              <SkillBar key={s.skill} {...s} delay={i * 0.15} />
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl bg-[#1e293b] border border-gray-700 shadow-lg hover:shadow-[#3ebff6]/40 transition-all duration-500 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3ebff6] via-[#7c3aed] to-[#f472b6] border-b border-gray-600 pb-1">
              Tools
            </h3>
            {tools.map((s, i) => (
              <SkillBar key={s.skill} {...s} delay={i * 0.15} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
