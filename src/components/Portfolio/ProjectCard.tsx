import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const ProjectCard: React.FC<Project> = ({ title, description, technologies, link, image }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {/* Link externo */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            {language === 'pt' ? 'Visualizar' : 'View'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
