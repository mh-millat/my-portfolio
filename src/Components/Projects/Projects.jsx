import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../../Components/Projects/projectData";
import { IoMdClose } from "react-icons/io";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div id="projects" className="bg-[#0F172A] w-full md:w-7xl mx-auto text-gray-200 py-10 sm:py-12 mt-12 rounded-2xl px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#3ebff6]">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#1E293B] p-5 rounded-xl shadow-lg flex flex-col cursor-pointer w-full"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(62,191,246,0.3)" }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg mb-4 object-cover h-48 w-full transition-opacity duration-300"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-2">{project.brief}</p>
            <div className="mb-2">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </div>

            <motion.button
              onClick={() => openModal(project)}
              className="mt-auto px-4 py-2 bg-[#3EBFF6] text-black font-semibold rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1E293B] p-6 rounded-2xl max-w-lg w-full relative shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-2xl text-white hover:text-gray-300 transition duration-300"
            >
              <IoMdClose />
            </button>

            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg mb-4 object-cover h-56 w-full transition-opacity duration-300"
            />
            <p className="mb-2"><strong>Brief:</strong> {selectedProject.brief}</p>
            <p className="mb-2"><strong>Tech:</strong> {selectedProject.tech.join(", ")}</p>
            <p className="mb-2"><strong>Challenges:</strong> {selectedProject.challenges}</p>
            <p className="mb-4"><strong>Improvements:</strong> {selectedProject.improvements}</p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.githubClient && (
                <motion.a
                  href={selectedProject.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-600 rounded text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Client GitHub
                </motion.a>
              )}
              {selectedProject.githubServer && (
                <motion.a
                  href={selectedProject.githubServer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-green-600 rounded text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Server GitHub
                </motion.a>
              )}
              {selectedProject.live && (
                <motion.a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-indigo-600 rounded text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
