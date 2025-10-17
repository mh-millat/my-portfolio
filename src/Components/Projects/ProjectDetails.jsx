
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './projectData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-xl font-bold">Project not found</h2>
        <Link to="/projects" className="btn btn-link mt-4">Back to projects</Link>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <img src={project.image} alt={project.name} className="rounded-lg shadow" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <p className="text-gray-700 mt-4">{project.brief}</p>

            <div className="mt-4">
              <h4 className="font-semibold">Main Tech Stack</h4>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-sm bg-base-200">{t}</span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Links</h4>
              <div className="flex gap-3 mt-2">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                    Live Demo
                  </a>
                )}
                {project.githubClient && (
                  <a href={project.githubClient} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
                    Client Repo
                  </a>
                )}
                {project.githubServer && (
                  <a href={project.githubServer} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
                    Server Repo
                  </a>
                )}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Challenges</h4>
              <p className="text-gray-700 mt-2">{project.challenges}</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Potential Improvements</h4>
              <p className="text-gray-700 mt-2">{project.improvements}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
