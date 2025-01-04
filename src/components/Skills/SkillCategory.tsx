import React from 'react';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full mb-4 transform transition-transform duration-300 group-hover:scale-110">
              <img
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${skill.icon}.svg`}
                alt={skill.name}
                className={`w-8 h-8 text-gray-500 transition-colors duration-300 group-hover:text-skills-${skill.icon}`}
              />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
