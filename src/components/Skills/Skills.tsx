import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { skillsData } from '../../data/skills';

const Skills = () => {
  const { language } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          {language === 'pt' ? 'Minhas Habilidades' : 'My Skills'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Backend Skills */}
          <SkillCategory
            title={language === 'pt' ? 'Backend' : 'Backend'}
            skills={skillsData.backend}
          />
          {/* Frontend Skills */}
          <SkillCategory
            title={language === 'pt' ? 'Frontend' : 'Frontend'}
            skills={skillsData.frontend}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-full mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <img
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${skill.icon}.svg`}
                alt={skill.name}
                className="w-8 h-8 text-gray-500 dark:text-gray-300 transition-colors duration-300 group-hover:text-[color-var(--skill-${skill.icon})]"
              />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
