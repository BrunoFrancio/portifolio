// src/pages/Projetos.tsx
import React from 'react';
import allProjects from '../data/allProjects';

const Projetos: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 my-2">
              {project.description}
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.technologies.map((tech, index) => (
                <li key={index}>• {tech}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver projeto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
