import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectCard from './ProjectCard';
import { getProjectsData } from '../../data/projects';

const Portfolio = () => {
  const { language } = useLanguage();

  const projects = getProjectsData(language);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {language === 'pt' ? 'Meu Portfólio' : 'My Portfolio'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
