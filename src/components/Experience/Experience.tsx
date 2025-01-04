import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { experienceData } from '../../data/experience';
import TimelineItem from './TimelineItem';

const Experience = () => {
  const { language } = useLanguage();

  const experiences = experienceData(language);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === 'pt' ? 'Minha Experiência' : 'My Experience'}
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((item) => (
            <TimelineItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
