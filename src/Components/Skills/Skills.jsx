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
        <span className="font-medium text-gray-800">{skill}</span>
        <span className="text-sm text-gray-500">{percent}%</span>
      </div>

      <div className="w-full bg-base-200 rounded h-3 overflow-hidden">
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
            background:
              'linear-gradient(90deg, #7c3aed 0%, #06b6d4 100%)',
            boxShadow: '0 0 10px rgba(99,102,241,0.4)',
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontend = [
    { skill: 'HTML', percent: 95 },
    { skill: 'CSS / Tailwind', percent: 92 },
    { skill: 'JavaScript', percent: 90 },
    { skill: 'React', percent: 88 },
  ];

  const backend = [
    { skill: 'Node.js', percent: 80 },
    { skill: 'Express.js', percent: 78 },
    { skill: 'MongoDB', percent: 75 },
  ];

  const tools = [
    { skill: 'Git', percent: 85 },
    { skill: 'VSCode', percent: 95 },
    { skill: 'Postman', percent: 80 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#f0fdfa] to-[#eef2ff] mt-5 rounded-2xl">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          <span className="text-indigo-600">My</span> Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-2xl mb-6 text-indigo-500 border-b pb-2">Frontend</h3>
            {frontend.map((s, i) => (
              <SkillBar key={s.skill} {...s} delay={i * 0.15} />
            ))}
          </motion.div>
          <motion.div
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-2xl mb-6 text-indigo-500 border-b pb-2">Backend</h3>
            {backend.map((s, i) => (
              <SkillBar key={s.skill} {...s} delay={i * 0.15} />
            ))}
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-indigo-500/40 transition-all duration-500 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-2xl mb-6 text-indigo-500 border-b pb-2">Tools</h3>
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
