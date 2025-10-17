import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from './projectData';

const Projects = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#f8fafc] via-[#f0fdfa] to-[#eef2ff] mt-5 rounded">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          <span className="text-indigo-600">My</span> Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0px 20px 40px rgba(99,102,241,0.3)' }}
            >
              <div className="h-52 md:h-44 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-xl mb-2">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.brief}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {p.tech.slice(0, 3).join(' • ')}
                  </div>
                  <Link
                    to={`/projects/${p.id}`}
                    className="btn btn-sm btn-outline hover:bg-indigo-600 hover:text-white transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
